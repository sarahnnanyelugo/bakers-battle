import React from "react";
import "./dashboard.scss";
export default function AdminDashboard() {
  return (
    <>
      <div>
        <div className="col-md-2 dash-nav"></div>
        <div className="col-md-10 dash-container">
          <div className="dash-div ">
            <div className="row row-cols-2 row-cols-lg-3 g-2 g-lg-3">
              <div className="col">
                <div className="stats"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
