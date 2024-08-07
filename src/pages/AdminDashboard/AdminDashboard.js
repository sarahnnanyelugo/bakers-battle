import React, { useState } from "react";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import "./dashboard.scss";
import { schools } from "../../Data/schoolsData";
import CountUp from "react-countup";
import { ContestChart } from "../../components/ContestChart/ContestChart";
import AppTable from "../../components/AppTable/AppTable";
import { AdminNav } from "./AdminNav";
import { RecentActivity } from "../../components/RecentActivity/RecentActivity";
import { recentActs } from "../../Data/recentActivities";
const customData = [50, 100, 80, 90, 70, 80];
const customLabels = [
  "Facebook",
  "Whatsapp",
  "Instagram",
  "Twitter",
  "LinkedIn",
  "Others",

  ,
];
export default function AdminDashboard() {
  const [state, setState] = useState({
    query: "",
    list: recentActs,
  });
  return (
    <>
      <div className="col-md-12 dash-container">
        <div className="admin-top d-flex">
          <div>
            {" "}
            <input placeholder="search here" style={{ flexGrow: 1 }} />
          </div>
        </div>
        <center>
          {" "}
          <div style={{ padding: "20px" }}>
            {" "}
            <div className="dash-div col-md-12">
              <div className="row row-cols-1 row-cols-lg-3 g-2 g-lg-3">
                <div className="col">
                  <div className="stats d-flex">
                    <div className="col-md-12">
                      <h6>Total Registered</h6>
                      <h1>
                        {" "}
                        <CountUp
                          start={0}
                          end={530}
                          duration={2}
                          decimal=""
                          prefix=" "
                          suffix=""
                          enableScrollSpy={true}
                        />
                      </h1>
                      <ProgressBar number={98} max={100} color="#508FF4" />
                    </div>
                  </div>
                </div>{" "}
                <div className="col">
                  <div className="stats">
                    <h6>Total Approved</h6>
                    <h1>
                      {" "}
                      <CountUp
                        start={0}
                        end={430}
                        duration={2}
                        decimal=""
                        prefix=" "
                        suffix=""
                        enableScrollSpy={true}
                      />
                    </h1>
                    <ProgressBar number={90} max={100} color="#9267FF" />
                  </div>
                </div>{" "}
                <div className="col">
                  <div className="stats">
                    <h6>Total Declined</h6>
                    <h1>
                      {" "}
                      <CountUp
                        start={0}
                        end={100}
                        duration={2}
                        decimal=""
                        prefix=" "
                        suffix=""
                        enableScrollSpy={true}
                      />
                    </h1>
                    <ProgressBar number={26} max={200} color="#FFBF43" />
                  </div>
                </div>
              </div>
              <div className="d-md-flex">
                <div className="col-md-8 " style={{ paddingRight: "10px" }}>
                  {" "}
                  <div className="col-md-12 reg-chart">
                    <h6>At a glance</h6>
                    <ContestChart labels={customLabels} dataset={customData} />
                  </div>
                </div>
                <div style={{ paddingLeft: "10px" }} className="col-md-4  ">
                  {" "}
                  <div className="col-md-12  reg-chart">
                    <h6>Recent Activities</h6>
                    <hr />{" "}
                    {state.list.map((data, index) => (
                      <RecentActivity data={data} />
                    ))}
                  </div>
                </div>
              </div>
              <div className="app-table">
                <AppTable data={schools} initialDisplayCount={4} />
              </div>
            </div>
          </div>
        </center>
      </div>
    </>
  );
}
