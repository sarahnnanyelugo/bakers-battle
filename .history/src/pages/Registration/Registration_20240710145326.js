import React from "react";
import "./registration.scss";
import Img from "../../assets/images/contest.png";
import { Link } from "react-router-dom";

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
            <span>Entry Fee:</span> ₦5000 per person
          </p>{" "}
          <p>
            <span>Awards:</span> Consult flier on the{" "}
            <Link to={"/"}>Home Page</Link>
          </p>
          <p>
            <span>Registration</span>:Until Saturday, July 30th at 11am (WAT)
          </p>{" "}
          <p>
            <span>Judging:</span> There will be 3 Judges and winner will be
            posted at 3pm(WAT).
          </p>
          <div className="row row-cols-2 row-cols-lg-2 g-2 g-lg-3">
            <div className="col">
              <input placeholder="first name" />
            </div>{" "}
            <div className="col">
              <input placeholder="last name" />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
