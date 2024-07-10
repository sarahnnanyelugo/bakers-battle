import React from "react";
import "./registration.scss";
import Img from "../../assets/images/contest.png";
import { Link } from "react-router-dom";
import { FileUpload } from "../../components/FileUpload/FileUpload";
import Photo from "../../assets/images/photo.png";
import Sample from "../../assets/images/sample.jpg";

export const Registration = () => {
  return (
    <>
      <div className="registration-div">
        {/* <center>
          <h1>REGISTYER</h1>
        </center> */}
      </div>

      <div className="registration-form">
        <div className="form col-md-8 offset-md-2">
          {" "}
          <form className="col-md-12">
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
            <h6>Name</h6>
            <div className="row row-cols-2 row-cols-lg-2 g-2 g-lg-3">
              <div className="col">
                <input placeholder="first name" />
              </div>{" "}
              <div className="col">
                <input placeholder="last name" />
              </div>
            </div>{" "}
            <div className="row row-cols-2 row-cols-lg-2 g-2 g-lg-3">
              <div className="col">
                <h6>Phone Number</h6>
                <input placeholder="(000) 000-0000" />
                <small>Please enter a valid phone number.</small>
              </div>{" "}
              <div className="col">
                <h6>Email</h6>
                <input placeholder="" />
                <small>example@example.com</small>
              </div>
            </div>
            <h6>Address</h6>
            <input />
            <small>Street Address</small>
            <input style={{ marginTop: "20px" }} />
            <small>Street Address Line 2</small>
            <div
              className="row row-cols-2 row-cols-lg-2 g-2 g-lg-3"
              style={{ marginTop: "20px" }}
            >
              <div className="col">
                <input />
                <small>LGA</small>
              </div>{" "}
              <div className="col">
                <select>
                  <option>Male</option>
                  <option>FeMale</option>
                </select>
                <small>Select gender</small>
              </div>
            </div>
          </form>
          <div className="d-md-flex">
            <div className="col-md-4">
              {" "}
              <h4>Upload work sample</h4>
              <FileUpload
                detail="click here to upload work sample"
                ProfileAvater={Sample}
              />
            </div>{" "}
            <div className="col-md-4">
              {" "}
              <h4>Upload Profile Photo</h4>
              <FileUpload detail="click here to upload personal photo" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
