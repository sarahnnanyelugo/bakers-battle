import React from "react";
import AdminDashboard from "./AdminDashboard/AdminDashboard";
import { Routes, Route, Navigate } from "react-router-dom";
export const DashboardLayout = () => {
  return (
    <div className="d-flex">
      <div className="col-md-2">
        <DashboardNav />
      </div>
      <div className="col-md-10" style={{ padding: "0px 20px" }}>
        <Routes>
          <Route path="/admin-dashboard" element={<AdminDashboard />} />{" "}
        </Routes>
      </div>
    </div>
  );
};
