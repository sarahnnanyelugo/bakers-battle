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
                <div className="stats">
                  <h6>Registered</h6>
                  {/* <ProgressBar number={16} max={200} color="#0470C7" /> */}
                </div>
              </div>{" "}
              <div className="col">
                <div className="stats">
                  {" "}
                  {/* <ProgressBar number={16} max={200} color="#0470C7" /> */}
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
