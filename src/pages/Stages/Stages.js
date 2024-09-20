import React, {useState, useLocation, useEffect, useContext} from "react";

import {AuthUserContext} from "../../services/AuthUserContext";
import axios from "axios";
import moment from 'moment';
import {useNavigate} from "react-router-dom";
import "./stages.scss";
import Modal from "react-bootstrap/Modal";
import {formatCurrency, GetStages} from "../../utils/utils";
import {MdCopyAll, MdPanoramaFishEye, MdKeyboardHide, MdSecurityUpdate} from "react-icons/md"
import Swal from "sweetalert2";

export const Stages = () => {
    const {authAdmin, setAuthAdmin} = useContext(AuthUserContext);
    const [data, setData] = useState(null);
    const navigate = useNavigate();
    const [editing, setEditing] = useState(false)
    const [showSecret, setShowSetSecret] = useState(false)
    const [stages, setStages] = useState([])
    const [loading, setLoading] = useState(false); // For API call loading state
    const baseUrl = process.env.REACT_APP_API_BASE_URL;
    const fetchStages = async () => {
        const stages = await GetStages(); // Await the result
        if (stages) {
            setStages(stages);
        }
    };
    useEffect(() => {
        if (!authAdmin || !authAdmin.token) {
            navigate('/admin');
        } else {
            fetchStages().then(r => {
            });
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

    const handleSaveStage = async () => {
        try {
            setLoading(true);
            const response = await axios.post(
                `${baseUrl}/api/admin/save-stage`,
                data,
                {
                    headers: {
                        Authorization: `Bearer ${authAdmin.token}`, // Using token from authAdmin
                    },
                }
            );

            if (response.data.success) {
                Swal.fire({
                    title: 'Success!',
                    text: `Stage has been saved successfully.`,
                    icon: 'success',
                    confirmButtonText: 'OK'
                });
                setData(null)
                fetchStages().then(() => {
                });
            } else {
                Swal.fire({
                    title: 'Error!',
                    text: 'Failed to save stage.',
                    icon: 'error',
                    confirmButtonText: 'OK'
                });
                console.error("Failed to save stage:", response.data.message);
            }
        } catch (error) {
            console.error("Error saving stage:", error);
            Swal.fire({
                title: 'Error!',
                text: error?.response?.data?.message || 'Something went wrong while processing the request.',
                icon: 'error',
                confirmButtonText: 'OK'
            });
        } finally {

        }
    };


    const handleSubmitConfig = async (e) => {
        e.preventDefault();
        // Access the base URL from the environment variable

        try {
            const response = await axios.post(`${baseUrl}/api/admin/save-stage`, data, {
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
                    html: '<p>Configurations could not be saved at the moment. <br> Please check your inputs.</p><p>' + error.response.data?.message || error.response?.message + '</p>',
                    icon: 'error',
                    confirmButtonText: 'OK'
                });
            }
        }
    };


    function initStage(dt) {
        if (dt == undefined)
            dt = {name: "", description: ""}
        setData(dt)
    }

    function cancelStage() {
        setData(null)
    }

    async function handleActivateStage(id) {
        try {
            const response = await axios.post(`${baseUrl}/api/admin/activate-stage`, {id: id}, {
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
                    fetchStages().then(() => {
                    });
                });
            }
        } catch (error) {
            if (error.response && error.response.data) {
                Swal.fire({
                    title: 'Error!',
                    html: '<p>Configurations could not be saved at the moment. <br> Please check your inputs.</p><p>' + error.response.data?.message || error.response?.message + '</p>',
                    icon: 'error',
                    confirmButtonText: 'OK'
                });
            }
        }
    }
    async function handleDeleteStage(id) {
        if(!window.confirm("Are you sure?"))return;
        try {
            const response = await axios.post(`${baseUrl}/api/admin/delete-stage`, {id: id}, {
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
                    fetchStages().then(() => {
                    });
                });
            }
        } catch (error) {
            if (error.response && error.response.data) {
                Swal.fire({
                    title: 'Error!',
                    html: '<p>Stage could not be deleted at the moment.</p><p>' + error.response.data?.message || error.response?.message + '</p>',
                    icon: 'error',
                    confirmButtonText: 'OK'
                });
            }
        }
    }

    return (
        <>
            <div>
                <center>
                    {" "}
                    <h1 className={"text-muted"}>Contest Stages</h1>
                </center>
                <div
                    className="col-md-12"
                    style={{marginTop: "80px"}}
                >
                    <center>
                        <div className="form ">
                            <table className="table table-responsive table-hover table-bordered">
                                <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Stage Title</th>
                                    <th>Stage Description</th>
                                    <th>Current State</th>
                                    <th>Options</th>
                                </tr>
                                </thead>
                                <tbody>
                                {stages?.map((stage, index) =>
                                    <tr key={stage.id} className={`${data?.id == stage.id ? 'active-row' : ''}`}>
                                        <td>{index + 1}</td>
                                        <td>{stage.name}</td>
                                        <td>{stage.description}</td>
                                        <td>
                                            <button onClick={() => handleActivateStage(stage.id)}
                                                    className={`btn btn-sm ${stage.active ? 'btn-outline-success' : 'btn-outline-info'}`}>{stage.active ? 'Active' : 'Activate'}</button>
                                        </td>
                                        <td>
                                            <div className="input-group">
                                                <button className="btn btn-sm btn-outline-info"
                                                        onClick={() => initStage(stage)}>Edit
                                                </button>
                                                {!stage.statutory &&
                                                <button onClick={() => handleDeleteStage(stage.id)} className="btn btn-sm btn-outline-danger">Delete</button>}
                                            </div>
                                        </td>
                                    </tr>
                                )}
                                </tbody>
                                {data && <tfoot>
                                <tr>
                                    <td>#</td>
                                    <td><input type="text" className="form-control" name='name' value={data?.name}
                                               onChange={handleChange}/></td>
                                    <td><input type="text" className="form-control" name='description'
                                               value={data?.description} onChange={handleChange}/></td>
                                    <td colSpan={2}>
                                        <div className="btn-group">
                                            <button onClick={handleSaveStage} className="btn btn-sm btn-outline-success">Save
                                            </button>
                                            <button onClick={cancelStage} className="btn btn-sm btn-outline-warning">Cancel
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                </tfoot>}
                            </table>
                            {!data && <button className="btn btn-sm btn-info" onClick={() => initStage()}>Add Stage</button>}
                        </div>
                    </center>


                </div>
            </div>
        </>
    )
}