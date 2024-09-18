import React, {useContext, useEffect, useState} from "react";
import "./voter-profile-page.scss";
import {Link, useNavigate} from "react-router-dom";
import {AuthUserContext} from "../../services/AuthUserContext";
import {ContestantsProfile} from "../../components/ContestantsProfile/ContestantsProfile";
import Modal from "react-bootstrap/Modal";
import axios from "axios";

const baseUrl = process.env.REACT_APP_API_BASE_URL;
export const VoterProfilePage = () => {
    const {authContestant, setAuthContestant} = useContext(AuthUserContext); // Access authenticated user
    const data = authContestant?.user;
    const [showProfile, setShoProfile] = useState(true)
    const navigate = useNavigate(); // Use useNavigate for redirection
    // Fetch the latest user profile when the component mounts
    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const token = authContestant?.token; // Get token from context
                if (!token) return;

                // Make API call to get updated profile data
                const response = await axios.post(`${baseUrl}/api/contestant-profile`, {}, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (response.data?.success) {
                    // Update the authContestant with the latest profile data
                    localStorage.setItem('contestant', JSON.stringify(response.data?.user))
                    if (response.data?.user?.status !== 'success' && response.data?.pk)//No payment yet
                    {
                        localStorage.setItem('pk', response.data?.pk);
                    }
                    setAuthContestant((prevState) => ({
                        ...prevState,
                        user: response.data?.user, // Assuming `user` is returned in response
                    }));
                } else {
                    console.error("Failed to fetch user profile:", response.data?.message);
                }
            } catch (error) {
                console.error("Error fetching user profile:", error);
            }
        };
        if (showProfile) {
            fetchUserProfile().then(r => {});
        }
    }, [showProfile]);

    // Logout function
    const handleLogout = async () => {
        try {
            const token = authContestant?.token;

            if (token) {
                // Optionally, make an API call to invalidate the token (if applicable)
                await axios.post(
                    `${baseUrl}/api/logout`,
                    {}, // No body needed for logout
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
            }

            // Clear user from context and localStorage

            // Redirect to the login page or homepage after logout
            navigate("/login");
        } catch (error) {
            console.error("Error during logout:", error);
        }
        finally {
            setAuthContestant(null);
            localStorage.removeItem("contestant");
            localStorage.removeItem("token");
            localStorage.removeItem("pk");
        }
    };


    if (!authContestant)
        return (
            <div className={'success-page-div col-md-4 offset-md-4'}>
                <center>
                    <div className="jumbotron">
                        <h4>Unauthorized Access</h4>
                        <p className="text-danger">You are not permitted to view this page.</p>
                        Kindly <Link to={'/login'} className={'btn text-success'}>Login</Link> or <Link to={'/registration'}
                                                                                          className={'btn text-info'}>Register</Link>
                    </div>
                </center>
            </div>
        )

    return (
        <>
            <Modal
                size="xl"
                show={showProfile}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton onClick={() => {
                    setShoProfile(false);
                    setTimeout(() => {
                        navigate('/')
                    }, 200)
                }}></Modal.Header>
                <Modal.Body className="profile">
                    {" "}
                    <div className="form ">
                        <form className="col-md-12">
                            <div className="d-md-flex">
                                <div style={{flexGrow: 1}} className="col-12 col-md-6">
                                    {" "}
                                    <h2>
                                        Baking Contest <br/>
                                        Applicants Profile
                                    </h2>
                                </div>
                                <div className="col-12 col-md-3">
                                    <img src={data?.dp} width="100%"/>
                                </div>
                            </div>
                            <div className="row row-cols-2 row-cols-lg-2 g-2 g-lg-3">
                                <div className="col">
                                    <h6>Name</h6>
                                    <p>{data?.name}</p>
                                </div>
                                {" "}
                                <div className="col">
                                    <h6>Gender</h6>
                                    <p>{data?.gender}</p>
                                </div>
                            </div>
                            {" "}
                            <div className="row row-cols-2 row-cols-lg-2 g-2 g-lg-3">
                                <div className="col">
                                    <h6>Phone Number</h6>
                                    <p>{data?.phone}</p>
                                </div>
                                {" "}
                                <div className="col">
                                    <h6>Email</h6>
                                    {data?.email}
                                </div>
                            </div>
                            <div className="row row-cols-2 row-cols-lg-2 g-2 g-lg-3">
                                <div className="col">
                                    <h6>Address</h6>
                                    <p>{data?.address}</p>
                                </div>
                                {" "}
                                <div className="col">
                                    <h6>Social media handle</h6>
                                    <p>{data?.social_handle}</p>
                                </div>
                                {" "}
                                <div className="col">
                                    <h6>Heard about us through:</h6>
                                    <p>{data?.heard_about_us_from}</p>
                                </div>
                                {data?.status === 'success' && <>
                                    <div className="col">
                                        <h6>Nomination Status</h6>
                                        <p>
                                            {!data?.nomination && <button className="pend-btn"> Pending </button>}
                                            {data?.nomination &&
                                            <button className="aprove-btn"> {data?.nomination?.stage?.name} </button>}
                                        </p>
                                    </div>
                                </>}
                                {data?.status !== 'success' && <>
                                    <div className="col">
                                        <h6>Complete Your Registration</h6>
                                        <button onClick={() => {
                                            navigate("/payment")
                                        }} className="decline-btn">Pay Now
                                        </button>
                                    </div>
                                </>}

                            </div>
                        </form>

                        <hr/>
                        <center>
                            {/*<button className="aprove-btn"> Nominated </button>*/}
                            <button onClick={handleLogout} className="decline-btn"> Logout</button>
                            {/*<button className="decline-btn"> Declined </button>*/}
                        </center>
                    </div>
                </Modal.Body>
            </Modal>

        </>
    )

}