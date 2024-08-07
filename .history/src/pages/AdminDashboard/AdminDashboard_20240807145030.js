import React from "react";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import "./dashboard.scss";
export default function AdminDashboard() {
  return (
    <>
      <div className="d-flex">
        <div className="col-md-2 dash-nav"></div>
        <div className="col-md-10 dash-container">
          <div className="dash-div ">
            <div className="row row-cols-1 row-cols-lg-3 g-2 g-lg-3">
              <div className="col">
                <div className="stats d-flex">
                  <div className="col-md-10 offset-md-1">
                    <h6>Total Registered</h6>
                    <ProgressBar number={16} max={200} color="#0470C7" />
                  </div>
                  <h1>100</h1>
                </div>
              </div>{" "}
              <div className="col">
                <div className="stats">
                  {" "}
                  <ProgressBar number={10} max={100} color="#0470C7" />
                </div>
              </div>{" "}
              <div className="col">
                <div className="stats">
                  {" "}
                  <ProgressBar number={16} max={200} color="yellow" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
