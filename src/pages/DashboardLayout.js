import React from "react";
import AdminDashboard from "./AdminDashboard/AdminDashboard";
import {Routes, Route, Navigate} from "react-router-dom";
import {AdminNav} from "./AdminDashboard/AdminNav";
import {Voting} from "./Voting/Voting";
import {Configurations} from "./Configurations/Configurations";
import {Stages} from "./Stages/Stages";

export const DashboardLayout = () => {
    return (
        <div className="d-md-flex">
            <div className="col-md-2">
                <AdminNav/>
            </div>
            <div className="col-md-10 dash-layout" >
                <Routes>
                    <Route path="/admin-dashboard" element={<AdminDashboard/>}/>{" "}
                    <Route path="/voting" element={<Voting/>}/>{" "}
                    <Route path="/configurations" element={<Configurations/>}/>{" "}
                    <Route path="/stages" element={<Stages/>}/>{" "}
                </Routes>
            </div>
        </div>
    );
};
