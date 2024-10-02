import "./profile.scss";
import {Link, useNavigate} from "react-router-dom";
import React, {useState, useEffect, useContext} from "react";
import Modal from "react-bootstrap/Modal";
import Swal from "sweetalert2";
import axios from "axios";
import {AuthUserContext} from "../../services/AuthUserContext";
import {GetStages} from "../../utils/utils";

export const ContestantsProfile = ({profile, callback,callbackParent}) => {
    const [lgShow, setLgShow] = useState(false);
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false); // For API call loading state
    const navigate = useNavigate();
    const {authAdmin, setAuthAdmin} = useContext(AuthUserContext);
    const baseUrl = process.env.REACT_APP_API_BASE_URL;
    const [stages, setStages] = useState([])
    // Function to send the approval status to the API
    const handleApprovalStatus = async (status, note) => {
        try {
            setLoading(true);
            const response = await axios.post(
                `${baseUrl}/api/admin/contestants/approval`,
                {
                    contestant_id: profile.id,
                    approval_status: status,
                    note: note, // Include the note
                },
                {
                    headers: {
                        Authorization: `Bearer ${authAdmin.token}`, // Using token from authAdmin
                    },
                }
            );

            if (response.data.success) {
                // Generate WhatsApp message URL
                const message = `Hello ${profile.name},\n\nYour contest application has been ${status.toLowerCase()}.\n\nDetails: \n`;
                const whatsappUrl = `https://wa.me/${profile.phone}?text=${encodeURIComponent(
                    message
                )}`;


                // Update button text accordingly
                // if (status === "approved") setAprove("Approved!");
                // else if (status === "declined") setDecline("Declined!");

                //Todo: Open WhatsApp web in a new tab with the message
                window.open(whatsappUrl, "_blank");

                Swal.fire({
                    title: 'Success!',
                    text: `Contestant has been ${status.toLowerCase()} successfully.`,
                    icon: 'success',
                    confirmButtonText: 'OK'
                });
            } else {
                Swal.fire({
                    title: 'Error!',
                    text: 'Failed to update contestant status.',
                    icon: 'error',
                    confirmButtonText: 'OK'
                });
                console.error("Failed to update approval status:", response.data.message);
            }
        } catch (error) {
            console.error("Error updating approval status:", error);
            Swal.fire({
                title: 'Error!',
                text: error?.response?.data?.message || 'Something went wrong while processing the request.',
                icon: 'error',
                confirmButtonText: 'OK'
            });
        } finally {
            setLoading(false);
            setLgShow(false)
            if(callback) callback();
            if(callbackParent) callbackParent();
        }
    };
    const fetchStages = async () => {
        const stages = await GetStages(); // Await the result
        if (stages) {
            setStages(stages);
        }
    };
    useEffect(() => {
        if (lgShow) {
            fetchStages().then(r => {
            });
        }
    }, [lgShow])

// Unified function for both Approve and Decline actions
    const handleContestantAction = (status) => {
        const actionText = status === 'approved' ? 'Approve' :(status === 'declined' ? 'Decline':(status === 'advanced' ? 'Advance':'Eliminate'));

        Swal.fire({
            title: `Are you sure you want to ${actionText} this contestant?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: actionText,
            cancelButtonText: 'Cancel',
        }).then((result) => {
            if (result.isConfirmed) {
                // Call the API to handle approval/decline status
                handleApprovalStatus(status).then((response) => {
                }).catch(error => {
                    console.error('Error updating status:', error);
                    Swal.fire({
                        title: 'Error!',
                        text: `An error occurred while trying to ${actionText} the contestant.`,
                        icon: 'error',
                    });
                });
            }
        });
    };

    function Advance() {
        handleContestantAction('advanced'); // Pass 'approved' for approval action
    }
    function Eliminate() {
        handleContestantAction('eliminated'); // Pass 'approved' for approval action
    }
    function Approve() {
        handleContestantAction('approved'); // Pass 'approved' for approval action
    }

    function Decline() {
        handleContestantAction('declined'); // Pass 'declined' for decline action
    }

    useEffect(() => {
        if (!profile) return;
        setData(profile);
    }, [profile]);

    const setBackgroundForSource = (source) => {
        switch (source?.toLowerCase()) {
            case 'facebook':
                return 'btn-outline-primary';
            case 'whatsapp':
                return 'btn-outline-info';
            case 'youtube':
                return 'btn-outline-danger';
            case 'linkedin':
                return 'btn-outline-primary';
            default:
                return 'btn-outline-success';

        }
    }
    const setBackgroundForApprovalStatus = (status) => {
        switch (status?.toLowerCase()) {
            case 'approved':
                return 'btn-outline-success text-success';
            case 'declined':
                return 'btn-outline-danger text-danger';
            default:
                return 'btn-outline-warning text-warning';

        }
    }

    return (
        <>
            <p
                onClick={() => setLgShow(true)}
                style={{cursor: "pointer", color: "#1A5319", fontWeight: "bold"}}
            >
                View
            </p>
            <Modal
                size="xl"
                show={lgShow}
                onHide={() => {
                    setLgShow(false);
                    return callback ? callback() : null;
                }}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body className="profile">
                    {" "}
                    <div className="form ">
                        <form className="col-md-12">
                            <div className="d-flex">
                                <div style={{flexGrow: 1}} className="col-5 col-md-6">
                                    {" "}
                                    <h2>
                                        Baking Contest <br/>
                                        Applicants Profile
                                    </h2>
                                </div>
                                <div className="col-md-3 col-5">
                                    <img src={data.dp} width="100%"/>
                                </div>
                            </div>
                            <div className="row row-cols-2 row-cols-lg-2 g-2 g-lg-3">
                                <div className="col">
                                    <h6>Name</h6>
                                    <p>{data.name}</p>
                                </div>
                                {" "}
                                <div className="col">
                                    <h6>Gender</h6>
                                    <p>{data.gender}</p>
                                </div>
                            </div>
                            {" "}
                            <div className="row row-cols-2 row-cols-lg-2 g-2 g-lg-3">
                                <div className="col">
                                    <h6>Phone Number</h6>
                                    <a href={`https://wa.me/${data.phone}`} target={"_blank"}>{data.phone}</a>
                                </div>
                                {" "}
                                <div className="col">
                                    <h6>Email</h6>
                                    {data.email}
                                </div>
                            </div>
                            <div className="row row-cols-2 row-cols-lg-2 g-2 g-lg-3">
                                <div className="col">
                                    <h6>Address</h6>
                                    <p>{data.address}</p>
                                </div>
                                {" "}
                                <div className="col">
                                    <h6>Social media handle</h6>
                                    <Link className={"text-info"} to={data.social_handle} target={'_blank'}>
                                        <p>{data.social_handle}</p></Link>
                                </div>
                                {" "}
                                <div className="col">
                                    <h6>Heard about us through:</h6>
                                    <p className={`btn ${setBackgroundForSource(data.heard_about_us_from)}`}>#{data.heard_about_us_from?.toUpperCase()}</p>
                                </div>
                                <div className="col">
                                    <h6>Approval Status: </h6>
                                    <p className={`btn btn-sm ${setBackgroundForApprovalStatus(data.approval_status)}`}>{data.approval_status?.toUpperCase()}</p>

                                </div>
                                {data.nomination && <div className="col">
                                    <h6>Current Stage: </h6>
                                    <p className={`btn btn-sm btn-outline-info`}>{data.nomination?.stage_name?.toUpperCase()}</p>

                                </div>}
                            </div>
                        </form>

                        <hr/>
                        <center>
                            {data.status=='success' ? <>
                                {data.approval_status !== 'approved' && <>
                                    <button className="aprove-btn" onClick={Approve}>
                                        Approve
                                    </button>
                                    <button className="decline-btn" onClick={Decline}>
                                        Decline
                                    </button>
                                </>}
                                {data.approval_status === 'approved' &&<div className="btn-group">
                                    <button onClick={Advance} className="btn btn-info" title="Advance Contestant to Current Stage">
                                        Advance
                                    </button>
                                    <button onClick={Eliminate} className="btn btn-danger" title="Eliminate Contestant">
                                        Eliminate
                                    </button>
                                </div>}
                            </>:<>
                            <div className="alert alert-info">Payment not yet verified.</div>
                            </>}


                        </center>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
};
