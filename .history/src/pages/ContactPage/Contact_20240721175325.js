import React from "react";
import "./contact.scss";
import { IoLogoTiktok } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaPhone } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

export const Contact = () => {
  return (
    <>
      <div className="contact-div">
        <div className="offset-md-7 heading">
          {" "}
          <h1>CONTACT US</h1>
        </div>
      </div>

      <div className="col-md-8 offset-md-2 contact-form mobile-padding ">
        <h2>Follow us on:</h2>
        <div className="d-md-flex">
          {" "}
          <div className="col-md-6 " style={{ marginTop: "30px" }}>
            <h4>
              <IoLogoTiktok className="media-icons" />
              <Link
                to={
                  "https://www.tiktok.com/@kitchendisaster1?_t=8oDCq7r9lsD&_r=1"
                }
              >
                TikTok
              </Link>
            </h4>
            <h4>
              <FaSquareInstagram className="media-icons" />

              <Link
                to={
                  "https://www.instagram.com/kitchen.disaster_show?igsh=MTZxdzM1MG1ybGNtaQ%3D%3D&utm_source=qr"
                }
              >
                Instagram
              </Link>
            </h4>
            <h4>
              <FaFacebookSquare className="media-icons" />

              <Link to={"kitchen disaster"}>Facebook</Link>
            </h4>
            <h4>
              <IoLogoYoutube className="media-icons" />

              <Link to={"kitchen disaster"}>kitchen.disaster</Link>
            </h4>{" "}
            <h4>
              <IoMail className="media-icons" />

              <Link to={"kitchen disaster"}>Email</Link>
            </h4>{" "}
            <h4>
              <FaPhone className="media-icons" />

              <Link to={"kitchen disaster"}>09079843941</Link>
            </h4>
          </div>
          <div className="col-md-6 accord">
            <h3>Feel free to leave us a message</h3>
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
      </div>
    </>
  );
};
