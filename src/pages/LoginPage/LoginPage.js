import React, {useContext, useState} from "react";
import "./login-page.scss";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import {AuthUserContext} from "../../services/AuthUserContext";

export const LoginPage = () => {
    const token = localStorage.getItem('token'); // Token from localStorage
    const navigate = useNavigate();
    const { authContestant, setAuthContestant } = useContext(AuthUserContext); // Access authenticated user
    const [formData, setFormData] = useState({
        email: "hexxondiv@gmail.com",
        password: "password",
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Input validation before sending the request
        if (!formData.email || !formData.password) {
            Swal.fire({
                title: 'Error!',
                text: 'Please enter both email and password.',
                icon: 'error',
                confirmButtonText: 'OK'
            });
            return;
        }

        const data = new FormData();
        data.append("email", formData.email);
        data.append("password", formData.password);

        const baseUrl = process.env.REACT_APP_API_BASE_URL;

        try {
            const response = await axios.post(`${baseUrl}/api/login`, data, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            if (response.data.success) {
                const {contestant, token} = response.data;

                // Save user and token to localStorage
                localStorage.setItem('contestant', JSON.stringify(contestant));
                localStorage.setItem('token', token);

                setAuthContestant((prevState) => ({
                    ...prevState,
                    user: contestant,
                    token:token,
                }));

                Swal.fire({
                    title: 'Success!',
                    text: response.data.message,
                    icon: 'success',
                    confirmButtonText: 'OK'
                }).then(() => {
                    navigate("/my-profile");
                });
            }
        } catch (error) {
            if (error.response && error.response.data) {
                Swal.fire({
                    title: 'Error!',
                    text: 'Login failed. Please check your credentials.',
                    icon: 'error',
                    confirmButtonText: 'OK'
                });
            } else {
                Swal.fire({
                    title: 'Error!',
                    text: 'An error occurred. Please try again later.',
                    icon: 'error',
                    confirmButtonText: 'OK'
                });
            }
        }
    };

    // If the user is already logged in
    if (token) {
        return (
            <div className="success-page-div col-md-4 offset-md-4">
                <center>
                    <div className="col-md-12 p-5">
                        <h5>You are already logged in!</h5>
                        <Link to={'/'} className="btn text-success">Return Home</Link>
                    </div>
                </center>
            </div>
        );
    }

    return (
        <div className="success-page-div col-md-4 offset-md-4">
            <center>
                <h5>Please Login!</h5>
                <form className="col-md-12" onSubmit={handleSubmit}>
                    <h6>Email</h6>
                    <div className="row">
                        <center>
                            <div className="col col-md-8">
                                <input
                                    placeholder="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="form-control text-center"
                                    type="email"
                                    required
                                />
                            </div>
                        </center>
                    </div>
                    <div className="row">
                        <center>
                            <div className="col col-md-8">
                                <h6>Password</h6>
                                <input
                                    placeholder="********"
                                    name="password"
                                    type="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="form-control text-center"
                                    required
                                />
                            </div>
                        </center>
                    </div>
                    <center>
                        <button type="submit" className="button-57">
                            <span className="text">Login</span>
                            <span>Contestant Login</span>
                        </button>
                    </center>
                </form>
                <p className='pt-3'>Not yet registered as a contestant? </p>
                <p><Link to={'/registration'} className={'btn text-info'}>Register Now</Link></p>
            </center>
        </div>
    );
};
