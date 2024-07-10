import React from "react";
import "./registration.scss";
import Img from "../../assets/images/contest.png";

export const Registration = () => {
  return (
    <>
      <div className="registration-div">
        {/* <center>
          <h1>REGISTYER</h1>
        </center> */}
      </div>

      <div className="registration-form">
        <form className="col-md-8 offset-md-2">
          <div className="d-flex">
            <h2 style={{ flexGrow: 1 }}>
              Baking Contest <br />
              Application Form
            </h2>
            <div className="col-md-3">
              <img src={Img} width="100%" />
            </div>
          </div>
          <p>
            <span>Entry Fee:</span>₦5000 per person
          </p>{" "}
          <p>
            <span>Entry Fee:</span>₦5000 per person
          </p>
        </form>
      </div>
    </>
  );
};
