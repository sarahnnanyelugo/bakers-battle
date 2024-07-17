import React from "react";
import "./contact.scss";
import { IoLogoTiktok } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaPhone } from "react-icons/fa";

export const Contact = () => {
  return (
    <>
      <div className="contact-div">
        <div className="offset-md-7">
          {" "}
          <h1>CONTACT US</h1>
        </div>
      </div>
      <div className="col-md-8 offset-md-2 contact-form d-md-flex">
        <h2>Follow us on</h2>
        <div className="col-md-6">
          <h4>
            <IoLogoTiktok className="media-icons" />
            <Link to={"kitchendisaster1"}>TikTok</Link>
          </h4>
          <h4>
            <FaSquareInstagram className="media-icons" />

            <Link to={"kitchendisaster1"}>Instagram</Link>
          </h4>
          <h4>
            <FaFacebookSquare className="media-icons" />

            <Link to={"kitchen disaster"}>Facebook</Link>
          </h4>
          <h4>
            <FaFacebookSquare className="media-icons" />

            <Link to={"kitchen disaster"}>Facebook</Link>
          </h4>{" "}
          <h4>
            <IoLogoYoutube className="media-icons" />

            <Link to={"kitchen disaster"}>kitchen.disaster</Link>
          </h4>{" "}
          <h4>
            <FaPhone className="media-icons" />

            <Link to={"kitchen disaster"}>09079843941</Link>
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
