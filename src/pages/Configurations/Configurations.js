import React, {useState, useLocation, useEffect, useContext} from "react";

import {AuthUserContext} from "../../services/AuthUserContext";
import axios from "axios";
import moment from 'moment';
import {useNavigate} from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import {formatCurrency} from "../../utils/utils";
import { MdCopyAll, MdPanoramaFishEye,MdKeyboardHide,MdSecurityUpdate } from "react-icons/md"
import Swal from "sweetalert2";
export const Configurations=()=>{
    const {authAdmin, setAuthAdmin} = useContext(AuthUserContext);
    const [data, setData] = useState(null);
    const navigate = useNavigate();
    const [editing,setEditing]=useState(false)
    const [showSecret,setShowSetSecret]=useState(false)

    const fetchConfig = async () => {
        try {
            const baseUrl = process.env.REACT_APP_API_BASE_URL;
            const response = await axios.post(`${baseUrl}/api/admin/get-configurations`, {}, {
                headers: {
                    Authorization: `Bearer ${authAdmin.token}`, // Using token from authAdmin
                },
            });

            // console.log('API Response:', response.data); // Log the response
            setData(response.data);
        } catch (error) {
            console.error("Error fetching summary data:", error);
            if (error.response && error.response.status === 401) {
                setAuthAdmin(null);
                localStorage.removeItem('authAdmin');
                navigate('/admin');
            }
        }
    };
    useEffect(() => {
        if (!authAdmin || !authAdmin.token) {
            navigate('/admin');
        } else {
            // Implement API call for the summary data
            fetchConfig().then(r => {
            }); // Call the function to fetch data
        }
    }, [authAdmin, navigate, setAuthAdmin]);

    const handleChange = (e) => {
        const {name, value} = e.target;
        try {
            setData((prev) => ({
                ...prev,
                [name]: value,
            }));
        } catch (e) {

        }
    };

    const handleSubmitConfig = async (e) => {
        e.preventDefault();
        // Access the base URL from the environment variable
        const baseUrl = process.env.REACT_APP_API_BASE_URL;
        try {
            const response = await axios.post(`${baseUrl}/api/admin/save-configurations`, data, {
                headers: {
                    Authorization: `Bearer ${authAdmin.token}`,
                },
            });
            if (response.data.success) {
                Swal.fire({
                    title: 'Success!',
                    text: response.data.message,
                    icon: 'success',
                    confirmButtonText: 'OK'
                }).then(() => {
                    setEditing(false)
                    setShowSetSecret(false)
                });
            }
        } catch (error) {
            if (error.response && error.response.data) {
                Swal.fire({
                    title: 'Error!',
                    html: '<p>Configurations could not be saved at the moment. <br> Please check your inputs.</p><p>' + error.response.data?.message|| error.response?.message + '</p>',
                    icon: 'error',
                    confirmButtonText: 'OK'
                });
            }
        }
    };


    return (
        <>
            <div>
                <center>
                    {" "}
                    <h1 className={"text-muted"}>System Configurations</h1>
                </center>
                <div
                    className="col-md-12"
                    style={{ marginTop: "80px" }}
                >
                    <center>
                        <div className="form ">
                            <form className="col-md-6">
                                <div className="row">
                                    <div className="col mt-3">
                                        <div className="input-group">
                                            <div className="input-group-text">Entry Fee</div>
                                            <input onChange={handleChange} type="number" disabled={!editing} className="form-control" name={'registration_fee'} value={data?.registration_fee}/>
                                            <div className="input-group-text">NGN</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col mt-3">
                                        <div className="input-group">
                                            <div className="input-group-text">Version</div>
                                            <input onChange={handleChange} type="text" disabled={!editing} className="form-control" name={'current_version'} value={data?.current_version}/>
                                            <div className="input-group-text" title={"Contest Version Name/Theme/Title"}>?</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col mt-3">
                                        <div className="input-group">
                                            <div className="input-group-text">Registration Ends</div>
                                            <input onChange={handleChange} type="date" disabled={!editing} className="form-control" name={'registration_ends'} value={data?.registration_ends}/>
                                            <div className="input-group-text" title="Current Version Entry Ends on this day">?</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col mt-3">
                                        <div className="input-group">
                                            <div className="input-group-text">Judging Context</div>
                                            <input onChange={handleChange} disabled={!editing} type="text" className="form-control" name={'judging_desc'} value={data?.judging_desc}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col mt-5">
                                        <h5>Pay Stack Configuration</h5>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col mt-3">
                                        <div className="input-group">
                                            <div className="input-group-text">Pub Key</div>
                                            <input onChange={handleChange} disabled={!editing} type="text" className="form-control" name={'pk'} value={data?.pk}/>
                                            <div className="input-group-text"><span className="btn btn-default"><MdCopyAll/></span></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col mt-3">
                                        <div className="input-group">
                                            <div className="input-group-text">Secret Key</div>
                                            <input onChange={handleChange} disabled={!editing} type={showSecret?"text":"password"} name={'sk'} className="form-control" value={data?.sk}/>
                                            <div className="input-group-text" onClick={()=>{setShowSetSecret(!showSecret)}}><span className="btn btn-default"><MdKeyboardHide/></span></div>
                                        </div>
                                    </div>
                                </div>

                            </form>

                            <hr/>
                            <div className="col-md-12">
                                <div className="text-center">
                                    <div className="btn-group">
                                        {!editing && <button onClick={()=>setEditing(!editing)} className="pend-btn"> Edit </button>}
                                        {editing && <button onClick={()=>setEditing(!editing)} className="decline-btn"> Cancel </button>}
                                        {editing && <button onClick={handleSubmitConfig} className="aprove-btn"> Save </button>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </center>


                </div>
            </div>
        </>
    )
}