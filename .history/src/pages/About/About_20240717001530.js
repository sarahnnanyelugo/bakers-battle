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
      <div className="col-md-10 offset-md-1 d-md-flex about-start">
        <div className="col-md-6">
          {" "}
          <img
            src={Flier}
            className="col-md-11"
            style={{ borderRadius: "6px" }}
          />
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
          <p>
            At Kitchen Disaster, we believe that the best culinary adventures
            often start with a pinch of unpredictability. Our content is a
            delightful mix of recipe experiments, cooking challenges, and
            behind-the-scenes glimpses into the world of a content creator who
            isn’t afraid to show the occasional kitchen mishap. We celebrate the
            beauty of imperfection and the learning experiences that come with
            every culinary disaster. Whether you're a seasoned chef or a novice
            cook, our goal is to make you smile, laugh, and feel empowered to
            try new things in the kitchen.
          </p>
        </div>
      </div>
    </>
  );
}
