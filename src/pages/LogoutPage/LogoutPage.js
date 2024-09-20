import React, {useContext, useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {AuthUserContext} from "../../services/AuthUserContext";
import axios from "axios";
import Swal from "sweetalert2";
import "./logout-page.scss";

const baseUrl = process.env.REACT_APP_API_BASE_URL;

export const LogoutPage = () => {
    const {setAuthAdmin, setAuthVoter, setAuthContestant} = useContext(AuthUserContext); // Access authenticated user
    const navigate = useNavigate(); // Use useNavigate for redirection
    const token = localStorage.getItem("token");

    // Logout function for contestant
    const handleLogout = async () => {
        try {
            if (!token) {
                return
            }
            // Optionally, make an API call to invalidate the token (if applicable)
            const response = await axios.post(
                `${baseUrl}/api/logout`,
                {}, // No body needed for logout
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            if(response.data?.success){
                setAuthContestant(null);
                setAuthVoter(null);
                setAuthAdmin(null);
                localStorage.removeItem("contestant");
                localStorage.removeItem("user");
                localStorage.removeItem("voter");
                localStorage.removeItem("admin");
                localStorage.removeItem("token");
                localStorage.removeItem("pk");
                localStorage.removeItem("transaction");
                localStorage.removeItem("success_data");

                Swal.fire({
                    title: 'Success!',
                    text: 'Logged out successfully.',
                    icon: 'success',
                    confirmButtonText: 'OK'
                }).then(() => {
                    // Redirect to the login page or homepage after logout
                    setTimeout(() => {
                        navigate("/");
                    }, 1000)
                });
            }
            else{
                console.log(response.data)
                Swal.fire({
                    title: 'Error!',
                    text: 'Error during logout.',
                    icon: 'error',
                    confirmButtonText: 'OK'
                }).then(() => {
                    setTimeout(() => {
                        navigate("/");
                    })
                });
            }

        } catch (error) {
            console.error("Error during logout:", error);
            Swal.fire({
                title: 'Error!',
                text: 'Error during logout.',
                icon: 'error',
                confirmButtonText: 'OK'
            }).then(() => {
                setTimeout(() => {
                    navigate("/");
                })
            });
        }
    };
    useEffect(() => {
        handleLogout().then(r => {
        });
    })

    if (!token) {
        return (
            <div className="success-page-div col-md-4 offset-md-4">
                <center>
                    <div className="col-md-12 p-5">
                        <h5>You are already logged out!</h5>
                        <Link to={'/'} className="btn text-success">Return Home</Link>
                    </div>
                </center>
            </div>
        );
    }

}
