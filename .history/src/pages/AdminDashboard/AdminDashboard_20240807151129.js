import React from "react";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import "./dashboard.scss";
import CountUp from "react-countup";
export default function AdminDashboard() {
  return (
    <>
      <div className="d-flex">
        <div className="col-md-2 dash-nav"></div>
        <div className="col-md-10 dash-container">
          <div className="admin-top d-flex">
            <div>
              {" "}
              <input placeholder="search here" style={{ flexGrow: 1 }} />
            </div>
          </div>
          <center>
            {" "}
            <div style={{ padding: "40px" }}>
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
              </div>
            </div>
          </center>
        </div>
      </div>
    </>
  );
}
