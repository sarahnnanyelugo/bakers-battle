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
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { FaBell } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

const customData = [50, 100, 80, 90, 70, 80];
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
  return (
    <>
      <div className="col-md-12 dash-container">
        <div className="admin-top d-flex">
          <div>
            {" "}
            <input placeholder="search here" style={{ flexGrow: 1 }} />
          </div>
          <div className="offset-md-9">
            <DropdownButton id="dropdown-basic-button" title={<FaBell />}>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </DropdownButton>
          </div>{" "}
          <div>
            <DropdownButton id="dropdown-basic-button" title={<IoMail />}>
              <h6>No messages at the moment</h6>
            </DropdownButton>
          </div>
        </div>
        <center>
          {" "}
          <div style={{ padding: "20px" }}>
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
                    <ProgressBar number={90} max={100} color="#008000" />
                  </div>
                </div>{" "}
                <div className="col">
                  <div className="stats">
                    <h6>Total Declined</h6>
                    <h1>
                      {" "}
                      <CountUp
                        start={0}
                        end={50}
                        duration={2}
                        decimal=""
                        prefix=" "
                        suffix=""
                        enableScrollSpy={true}
                      />
                    </h1>
                    <ProgressBar number={26} max={200} color="#900d0d" />
                  </div>
                </div>{" "}
                <div className="col">
                  <div className="stats">
                    <h6>Total Pending</h6>
                    <h1>
                      {" "}
                      <CountUp
                        start={0}
                        end={50}
                        duration={2}
                        decimal=""
                        prefix=" "
                        suffix=""
                        enableScrollSpy={true}
                      />
                    </h1>
                    <ProgressBar number={26} max={200} color="#F7BE7F" />
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
