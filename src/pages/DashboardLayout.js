import React from "react";
import AdminDashboard from "./AdminDashboard/AdminDashboard";
import { Routes, Route, Navigate } from "react-router-dom";
import { AdminNav } from "./AdminDashboard/AdminNav";
import { Voting } from "./Voting/Voting";
export const DashboardLayout = () => {
  return (
    <div className="d-md-flex">
      <div className="col-md-2">
        <AdminNav />
      </div>
      <div className="col-md-10" style={{ padding: "0px 20px" }}>
        <Routes>
          <Route path="/admin-dashboard" element={<AdminDashboard />} />{" "}
          <Route path="/voting" element={<Voting />} />{" "}
        </Routes>
      </div>
    </div>
  );
};
