import React, {useContext, useEffect, useState} from "react";
import {AuthUserContext} from "../../services/AuthUserContext";
import axios from "axios";

import {useNavigate} from "react-router-dom";
import {RecentActivity} from "../RecentActivity/RecentActivity";

export const AuditTrail = () => {
    const {authAdmin, setAuthAdmin} = useContext(AuthUserContext);
    const [data, setData] = useState(null);
    const navigate = useNavigate();

    const fetchTrail = async () => {
        try {
            const baseUrl = process.env.REACT_APP_API_BASE_URL;
            const response = await axios.post(`${baseUrl}/api/admin/audit-trails`, {}, {
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
            fetchTrail().then(r => {
            }); // Call the function to fetch data
        }
    }, [authAdmin, navigate, setAuthAdmin]);

    return (
        <>
            {data?.map((dt, index) => (
                <RecentActivity key={index} data={dt}/>
            ))}
        </>
    )
}