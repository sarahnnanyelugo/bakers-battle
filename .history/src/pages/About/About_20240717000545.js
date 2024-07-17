import React from "react";
import "./about.scss";
import Flier from "../../assets/images/flier1.jpeg";
export default function About() {
  return (
    <>
      {" "}
      <div className="about-div">
        <div className="offset-md-7">
          {" "}
          <h1>ABOUT US</h1>
        </div>
      </div>
      <div className="col-md-10 offset-md-1 d-md-flex">
        <div className="col-md-6">
          {" "}
          <img src={Flier} width="100%" />
        </div>
        <div className="col-md-6"></div>
      </div>
    </>
  );
}
