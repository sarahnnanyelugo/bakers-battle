import React from "react";
import "./contact.scss";
import { IoLogoTiktok } from "react-icons/io5";
import { Link } from "react-router-dom";

export const Contact = () => {
  return (
    <>
      <div className="contact-div">
        <div className="offset-md-7">
          {" "}
          <h1>CONTACT US</h1>
        </div>
      </div>
      <div className="col-md-8 offset-md-2 contact-form">
        <div className="col-md-6">
          <h4>
            <IoLogoTiktok />
            <Link to={"kitchendisaster1"}>kitchendisaster1</Link>
          </h4>
        </div>
        <div className="col-md-6">
          <form>
            <input type="text" placeholder="your name" />
            <input type="email" placeholder="your email" />
            <input type="phone" placeholder="your phone number" />
            <textarea placeholder="leave a message" />
            <center>
              <button
                class="button-92"
                role="button"
                style={{ fontSize: "25px" }}
              >
                Submit
              </button>
            </center>
          </form>
        </div>
      </div>
    </>
  );
};
