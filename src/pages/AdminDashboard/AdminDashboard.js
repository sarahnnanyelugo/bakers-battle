import React, {useContext, useEffect, useState} from "react";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import "./dashboard.scss";
import {schools} from "../../Data/schoolsData";
import CountUp from "react-countup";
import {ContestChart} from "../../components/ContestChart/ContestChart";
import AppTable from "../../components/AppTable/AppTable";
import {AdminNav} from "./AdminNav";
import {RecentActivity} from "../../components/RecentActivity/RecentActivity";
import {recentActs} from "../../Data/recentActivities";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import {FaBell} from "react-icons/fa";
import {IoMail} from "react-icons/io5";
import {useNavigate} from "react-router-dom";
import {AuthUserContext} from "../../services/AuthUserContext";
import axios from "axios";
import {AuditTrail} from "../../components/AuditTrail/AuditTrail";

// const customData = [50, 100, 80, 90, 70, 80];
const customLabels = [
    "Facebook",
    "Whatsapp",
    "Instagram",
    "Twitter",
    "LinkedIn",
    "Others",
];
export default function AdminDashboard() {
    const [state, setState] = useState({
        query: "",
        list: recentActs,
    });
    const navigate = useNavigate();
    const {authAdmin, setAuthAdmin} = useContext(AuthUserContext); // Access authenticated user
    const [summary,setSummary]=useState({
        totalRegistered:0,
        totalRegisteredPerc:0,
        totalApproved:0,
        totalApprovedPerc:0,
        totalDeclined:0,
        totalDeclinedPerc:0,
        totalPending:0,
        totalPendingPerc:0,

        Facebook:0,
        Whatsapp:0,
        Instagram:0,
        Twitter:0,
        LinkedIn:0,
        Others:0,
    })
    const [customData,setCustomData]=useState([0, 0, 0, 0, 0, 0])
    const fetchSummary = async () => {
        try {
            const baseUrl = process.env.REACT_APP_API_BASE_URL;
            const response = await axios.post(`${baseUrl}/api/admin/summary`,{}, {
                headers: {
                    Authorization: `Bearer ${authAdmin.token}`, // Using token from authAdmin
                },
            });

            if (response.data.success) {
                const data=response.data;
                setSummary({
                    totalRegistered: data.totalRegistered,
                    totalRegisteredPerc: data.totalRegisteredPerc,
                    totalApproved: data.totalApproved,
                    totalApprovedPerc: data.totalApprovedPerc,
                    totalDeclined: data.totalDeclined,
                    totalDeclinedPerc: data.totalDeclinedPerc,
                    totalPending: data.totalPending,
                    totalPendingPerc: data.totalPendingPerc,

                    Facebook:data.Facebook,
                    Whatsapp:data.Whatsapp,
                    Instagram:data.Instagram,
                    Twitter:data.Twitter,
                    LinkedIn:data.LinkedIn,
                    Others:data.Others,
                });
                // Update customData state
                setCustomData([
                    data.Facebook,
                    data.Whatsapp,
                    data.Instagram,
                    data.Twitter,
                    data.LinkedIn,
                    data.Others
                ]);
            } else {
                // Handle error if backend response indicates failure
                console.error("Failed to fetch summary data");
            }
        } catch (error) {
            console.error("Error fetching summary data:", error);
            if (error.response && error.response.status === 401) {
                // If unauthorized, log the admin out
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

            fetchSummary().then(r => {}); // Call the function to fetch data
        }
    }, [authAdmin, navigate, setAuthAdmin]);
    return (
        <>
            <div className="col-md-12 dash-container">
                <div className="admin-top d-flex">
                    <div>
                        {" "}
                        <input placeholder="search here" style={{flexGrow: 1}}/>
                    </div>
                    <div className="offset-md-9">
                        <DropdownButton
                            id="dropdown-basic-button"
                            title={<FaBell style={{color: "#1E3D73", fontSize: "20px"}}/>}
                        >
                            <h6>No notifications at the moment</h6>
                        </DropdownButton>
                    </div>
                    {" "}
                    <div>
                        <DropdownButton
                            id="dropdown-basic-button"
                            title={<IoMail style={{color: "#1E3D73", fontSize: "20px"}}/>}
                        >
                            <h6>No messages at the moment</h6>
                        </DropdownButton>
                    </div>
                </div>
                <center>
                    {" "}
                    <div style={{padding: "20px"}}>
                        {" "}
                        <div className="dash-div col-md-12">
                            <div className="row row-cols-1 row-cols-lg-4 g-2 g-lg-3">
                                <div className="col">
                                    <div className="stats d-flex">
                                        <div className="col-md-12">
                                            <h6>Total Registered</h6>
                                            <h1>
                                                {" "}
                                                <CountUp
                                                    start={0}
                                                    end={summary?.totalRegistered}
                                                    duration={2}
                                                    decimal=""
                                                    prefix=" "
                                                    suffix=""
                                                    enableScrollSpy={true}
                                                />
                                            </h1>
                                            <ProgressBar number={summary?.totalRegisteredPerc} max={100} color="#508FF4"/>
                                        </div>
                                    </div>
                                </div>
                                {" "}
                                <div className="col">
                                    <div className="stats">
                                        <h6>Total Approved</h6>
                                        <h1>
                                            {" "}
                                            <CountUp
                                                start={0}
                                                end={summary?.totalApproved}
                                                duration={2}
                                                decimal=""
                                                prefix=" "
                                                suffix=""
                                                enableScrollSpy={true}
                                            />
                                        </h1>
                                        <ProgressBar number={summary?.totalApprovedPerc} max={100} color="#008000"/>
                                    </div>
                                </div>
                                {" "}
                                <div className="col">
                                    <div className="stats">
                                        <h6>Total Declined</h6>
                                        <h1>
                                            {" "}
                                            <CountUp
                                                start={0}
                                                end={summary?.totalDeclined}
                                                duration={2}
                                                decimal=""
                                                prefix=" "
                                                suffix=""
                                                enableScrollSpy={true}
                                            />
                                        </h1>
                                        <ProgressBar number={summary?.totalDeclinedPerc} max={200} color="#900d0d"/>
                                    </div>
                                </div>
                                {" "}
                                <div className="col">
                                    <div className="stats">
                                        <h6>Total Pending</h6>
                                        <h1>
                                            {" "}
                                            <CountUp
                                                start={0}
                                                end={summary?.totalPending}
                                                duration={2}
                                                decimal=""
                                                prefix=" "
                                                suffix=""
                                                enableScrollSpy={true}
                                            />
                                        </h1>
                                        <ProgressBar number={summary?.totalPendingPerc} max={100} color="#F7BE7F"/>
                                    </div>
                                </div>
                            </div>
                            <div className="d-md-flex">
                                <div className="col-md-8 " style={{paddingRight: "10px"}}>
                                    {" "}
                                    <div className="col-md-12 reg-chart">
                                        <h6>At a glance</h6>
                                        <ContestChart labels={customLabels} dataset={customData}/>
                                    </div>
                                </div>
                                <div style={{paddingLeft: "10px"}} className="col-md-4  ">
                                    {" "}
                                    <div className="col-md-12  reg-chart">
                                        <h6>Recent Activities</h6>
                                        <hr/>
                                        {" "}
                                        {/*{state.list.map((data, index) => (*/}
                                        {/*    <RecentActivity data={data}/>*/}
                                        {/*))}*/}
                                        <AuditTrail/>
                                    </div>
                                </div>
                            </div>
                            <div className="app-table">
                                {/*<AppTable data={schools} initialDisplayCount={4}/>*/}
                                <AppTable/>
                            </div>
                        </div>
                    </div>
                </center>
            </div>
        </>
    );
}
