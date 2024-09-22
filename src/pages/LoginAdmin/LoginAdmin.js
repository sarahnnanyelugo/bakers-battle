import React, {useContext, useEffect, useState} from "react";
import "./login-admin.scss";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import {AuthUserContext} from "../../services/AuthUserContext";

export const LoginAdmin = () => {
    const navigate = useNavigate();
    const { authAdmin, setAuthAdmin,setAuthContestant,setAuthVoter } = useContext(AuthUserContext); // Access authenticated user
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    // const [formData, setFormData] = useState({
    //     email: "admin@bakersbattle.com",
    //     password: "adminPassword",
    // });

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
            const response = await axios.post(`${baseUrl}/api/admin/login`, data, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            if (response.data.success) {
                const {admin, token} = response.data;

                // Save user and token to localStorage
                localStorage.setItem('admin', JSON.stringify(admin));
                localStorage.setItem('token', token);
                setAuthContestant(null)
                setAuthVoter(null)
                setAuthAdmin({user: admin,token:token});

                Swal.fire({
                    title: 'Success!',
                    text: response.data.message,
                    icon: 'success',
                    confirmButtonText: 'OK'
                }).then(() => {
                    navigate("/dashboard-layout/admin-dashboard");
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
    if (authAdmin?.token) {
        return (
            <div className="success-page-div col-md-4 offset-md-4">
                <center>
                    <div className="col-md-12 p-5">
                        <h6>Hello {authAdmin.user.name}!</h6>
                        <h5>You are already logged in!</h5>
                        <Link to={'/dashboard-layout/admin-dashboard'} className="btn text-success">Go to Dashboard</Link>
                    </div>
                </center>
            </div>
        );
    }

    return (
        <div className="success-page-div col-md-4 offset-md-4">
            <center>
                <h5>Admin Login!</h5>
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
                            <span>Admin Login</span>
                        </button>
                    </center>
                </form>
            </center>
        </div>
    );
};
