import "./registration.scss";
import Img from "../../assets/images/contest.png";
import {Link} from "react-router-dom";
import {FileUpload} from "../../components/FileUpload/FileUpload";
import Photo from "../../assets/images/photo.png";
import Sample from "../../assets/images/sample.png";
import React, {useRef, useCallback, useState, useEffect} from "react";
import Accordion from "react-bootstrap/Accordion";
import Flier from "../../components/FlierModal/FlierModal";
import axios from "axios";  // Axios for HTTP requests
import Swal from "sweetalert2";
import moment from "moment";
import {formatCurrency, GetPubConfig} from "../../utils/utils";  // Import SweetAlert

export const Registration = (effect, deps) => {
    const [scrollProgress, setScrollProgress] = useState(0);
    const [showPassword, setShowPassword] = useState(false)
    const [formData, setFormData] = useState({
        name: "",
        gender: "",
        email: "",
        phone: "",
        password: "",
        password_confirmation: "",
        address: "",
        social_handle: "",
        dp: null,
        heard_about_us_from: "Instagram",
    });
    // const [formData, setFormData] = useState({
    //     name: "Paul Allen",
    //     gender: "Male",
    //     email: "paulallen@gmail.com",
    //     phone: "08068122579",
    //     password: "",
    //     password_confirmation: "",
    //     address: "Golden Pearls' Estate, Rd 4 House 11",
    //     social_handle: "https://instagram.com/hexxondiv",
    //     dp: null,
    //     heard_about_us_from: "Instagram",
    // });
    const [config, setConfig] = useState(null)

    const [errors, setErrors] = useState({});
    const handleScroll = () => {
        const {scrollTop, scrollHeight, clientHeight} = document.documentElement;
        const windowScroll = scrollTop;
        const windowHeight = scrollHeight - clientHeight;
        const scrolled = (windowScroll / windowHeight) * 100;
        setScrollProgress(scrolled);
    };

    useEffect(() => {
        const fetchConfig = async () => {
            const conf = await GetPubConfig(); // Await the result
            if (conf) {
                setConfig(conf);
            }
        };

        fetchConfig(); // Call the function to fetch the config
    }, []); // Empty dependency array ensures this runs once on mount
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {

        console.log(config)
    }, [config])

    // Handle form input change
    const handleChange = (e) => {
        const {name, value} = e.target;

        try {
            setFormData((prev) => ({
                ...prev,
                [name]: value,
            }));
        } catch (e) {

        }
    };

    // Handle file upload for profile photo (dp)
    const handleFileChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            dp: e.target.files[0], // Store the file object
        }));
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors({})
        const data = new FormData(); // FormData object for handling file uploads
        data.append("name", formData?.name);
        data.append("gender", formData?.gender);
        data.append("email", formData?.email);
        data.append("phone", formData?.phone);
        data.append("password", formData?.password);
        data.append("password_confirmation", formData?.password_confirmation);
        data.append("address", formData?.address);
        data.append("social_handle", formData?.social_handle);
        data.append("heard_about_us_from", formData?.heard_about_us_from);
        if (formData?.dp) {
            data.append("dp", formData?.dp); // Append the file if present
        }

        // Access the base URL from the environment variable
        const baseUrl = process.env.REACT_APP_API_BASE_URL;
        try {
            const response = await axios.post(`${baseUrl}/api/contestants`, data, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            if (response.data.success) {
                const {contestant, token, pk} = response.data;

                // Save to localStorage
                localStorage.setItem('contestant', JSON.stringify(contestant));
                localStorage.setItem('token', token);
                localStorage.setItem('pk', pk);

                Swal.fire({
                    title: 'Success!',
                    text: response.data.message,
                    icon: 'success',
                    confirmButtonText: 'OK'
                }).then(() => {
                    window.location.href = "/payment";  // Redirect to /payment
                });
            }
        } catch (error) {
            if (error.response && error.response.data) {
                // setErrors(error.response.data.errors); // Handle validation errors
                Swal.fire({
                    title: 'Error!',
                    html: '<p>Registration failed. Please check your inputs.</p><p>' + error.response.data?.message || error.response?.message + '</p>',
                    icon: 'error',
                    confirmButtonText: 'OK'
                });
            }
        }
    };

    return (
        <>
            <div className="registration-form">
                <div className="form col-md-8 offset-md-2">
                    <div className="progress-bar">
                        <div
                            className="progress-bar-fill"
                            style={{width: `${scrollProgress}%`}}
                        >
              <span className="progress-bar-text">
                {Math.round(scrollProgress)}%
              </span>
                        </div>
                    </div>
                    <form className="col-md-12" onSubmit={handleSubmit}>
                        <div className="d-flex">
                            <div style={{flexGrow: 1}} className="col-12 col-md-6">
                                {" "}
                                <h2>
                                    Baking Contest <br/>
                                    Application Form
                                </h2>
                                <p style={{marginTop: "40px"}}>
                                    <span>Entry Fee:</span> {formatCurrency(config?.registration_fee)} per person
                                </p>{" "}
                                <p>
                                    <span>Awards:</span> Consult <Flier/>
                                </p>
                                <p>
                                    <span>Registration</span>: {moment(config?.registration_ends).format('Do MMMM, YYYY')}
                                </p>{" "}
                                <p>
                                    <span>Judging:</span> {config?.judging_desc||'There will be 3 Judges and winner will be posted at 3pm(WAT)'}.
                                </p>
                            </div>
                            <div className="col-md-3">
                                <img src={Img} width="100%" alt="Contest Image"/>
                            </div>
                        </div>
                        <h6>Name</h6>
                        <div className="row row-cols-2 row-cols-lg-2 g-2 g-lg-3">
                            <div className="col">
                                <input
                                    placeholder="first & last name"
                                    name="name"  // make sure the name attribute matches your state property
                                    value={formData?.name}
                                    onChange={handleChange}
                                />
                                {errors.name && <small>{errors?.name[0]}</small>}
                            </div>
                            {" "}
                            <div className="col">
                                <select
                                    name="gender"
                                    value={formData?.gender}
                                    onChange={handleChange}
                                >
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                                <small>Select gender</small>
                                {errors.gender && <small>{errors.gender[0]}</small>}
                            </div>
                        </div>
                        {" "}
                        <div className="row row-cols-2 row-cols-lg-2 g-2 g-lg-3">
                            <div className="col">
                                <h6>Phone Number</h6>
                                <input
                                    placeholder="(+234) 000-000-0000"
                                    name="phone"
                                    type="tel"
                                    value={formData?.phone}
                                    onChange={handleChange}
                                />
                                {errors.phone && <small>{errors.phone[0]}</small>}
                            </div>
                            {" "}
                            <div className="col">
                                <h6>Email</h6>
                                <input
                                    placeholder="example@example.com"
                                    name="email"
                                    value={formData?.email}
                                    onChange={handleChange}
                                />
                                {errors.email && <small>{errors.email[0]}</small>}
                            </div>
                        </div>
                        <div className="row row-cols-2 row-cols-lg-2 g-2 g-lg-3">
                            <div className="col">
                                <h6>Password</h6>
                                <input
                                    placeholder="********"
                                    name="password"
                                    value={formData?.password}
                                    onChange={handleChange}
                                    type='password'
                                />
                                {errors.password && <small>{errors.password[0]}</small>}
                            </div>
                            {" "}
                            <div className="col">
                                <h6>Confirm Password</h6>
                                <input
                                    placeholder="********"
                                    name="password_confirmation"
                                    value={formData?.password_confirmation}
                                    onChange={handleChange}
                                    type="password"
                                />
                                {errors.password_confirmation && <small>{errors.password_confirmation[0]}</small>}
                            </div>
                        </div>
                        <h6>Address</h6>
                        <input
                            name="address"
                            value={formData?.address}
                            onChange={handleChange}
                        />
                        <small>Street Address</small>
                        {errors.address && <small>{errors.address[0]}</small>}
                        <h6>Your social media handle that best depicts your work</h6>
                        <input
                            style={{marginTop: "20px"}}
                            name="social_handle"
                            value={formData?.social_handle}
                            onChange={handleChange}
                        />
                        <small>eg: facebook, instagram, youtube</small>
                        <div
                            className="row row-cols-2 row-cols-lg-2 g-2 g-lg-3"
                            style={{marginTop: "20px"}}
                        ></div>
                        <div className="d-md-flex file" style={{marginTop: "10px"}}>
                            <div className="col-md-6">
                                <center>
                                    <div className="col-md-10">
                                        <h5>Upload Profile Photo</h5>
                                        <input type="file" onChange={handleFileChange}/>
                                        {errors.dp && <small>{errors.dp[0]}</small>}
                                    </div>
                                </center>

                            </div>
                            <div className="col-md-6">
                                <center>
                                    <div className="col-md-10">
                                        <h5>How did you hear about us?</h5>
                                        <select
                                            name="heard_about_us_from"
                                            value={formData?.heard_about_us_from}
                                            onChange={handleChange}
                                        >
                                            <option value="Facebook">Facebook</option>
                                            <option value="Instagram">Instagram</option>
                                            <option value="Whatsapp">Whatsapp</option>
                                            <option value="Youtube">Youtube</option>
                                            <option value="LinkedIn">LinkedIn</option>
                                            <option value="Friends">Friends</option>
                                            <option value="Others">Others</option>
                                        </select>
                                    </div>
                                </center>
                                {errors.heard_about_us_from && <small>{errors.heard_about_us_from[0]}</small>}
                            </div>
                        </div>
                    </form>
                    <Accordion defaultActiveKey="0" className="col-md-7">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Rules and Terms of Agreement</Accordion.Header>
                            <Accordion.Body>
                                <ul className="rules">
                                    <li>Professional bakers are not allowed to participate.</li>
                                    <li>
                                        Baking Contest Officials have the right to accept or reject
                                        the entries in accordance with the rules.
                                    </li>
                                    <li>
                                        The final decision of the winner will be decided by the
                                        judges and the online voters, hence keep an opem mind. There
                                        will be no expectations.
                                    </li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>

                    <br/>
                    <br/>
                    <p>
                        By clicking on the register button below, you have agreed to the
                        rules and terms of agreement listed above.
                    </p>
                    <hr/>
                    <center>
                        <button className="button-57" role="button" onClick={handleSubmit}>
                            <span className="text">Register</span>
                            <span>Make Payment</span>
                        </button>

                        <p className='pt-3'>Already registered as a contestant? </p>
                        <p><Link to={'/login'} className={'btn text-info'}>Login Now</Link></p>
                    </center>
                </div>
            </div>
        </>
    );
};
