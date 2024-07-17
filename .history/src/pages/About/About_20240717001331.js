import React from "react";
import "./about.scss";
import Flier from "../../assets/images/flier2.jpeg";
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
      <div className="col-md-8 offset-md-2 d-md-flex about-start">
        <div className="col-md-6">
          {" "}
          <img src={Flier} width="100%" />
        </div>
        <div className="col-md-6">
          <p>
            Welcome to Kitchen Disaster, the home of culinary creativity and
            delicious chaos! Founded by a passionate food enthusiast, Kitchen
            Disaster is a vibrant online platform where cooking meets
            entertainment. Our mission is to inspire home cooks and food lovers
            to embrace the joy of cooking, even when things don't go as planned.
            With a blend of humor, creativity, and practical tips, we aim to
            make the kitchen a fun and welcoming space for everyone.
          </p>
        </div>
      </div>
    </>
  );
}
