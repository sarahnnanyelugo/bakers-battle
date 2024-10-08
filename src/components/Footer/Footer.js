import React, { useEffect, useState, useRef } from "react";
import "./footer.scss";
import Logo from "../../assets/images/logo2.png";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoYoutube } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsFillPatchQuestionFill } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import { GiArchiveRegister } from "react-icons/gi";

export const Footer = () => {
  const prevUrlRef = useRef(null);
  const [showNav, setShowNav] = useState(true);
  const location = useLocation();
  let currentUrl;
  useEffect(() => {
    currentUrl = location.pathname;
  });
  useEffect(() => {
    if (prevUrlRef.current !== currentUrl) {
      prevUrlRef.current = currentUrl;
      // console.log(currentUrl);
      setTimeout(() => {
        switch (currentUrl) {
          case "/dashboard-layout/admin-dashboard":
          case "/dashboard-layout/voting":
            // case "/sign-up":
            setShowNav(false);
            break;
          default:
            setShowNav(true);
            break;
        }
        // console.log(currentUrl, showNav);
      }, 10);
    }
  });
  return (
    <footer className={`  ${showNav ? "" : "hide"}`}>
      <center>
        <div className="col-md-3 col-8">
         <Link to={"/"}> <img className="img2" src={Logo} alt="Scholar" width="75%" /></Link>
        </div>
      </center>{" "}
      <div className="d-md-flex col-md-10 offset-md-1 mobile-padding footer-paragraph">
        <div className="col-md-5">
          <h4>About Us</h4>
          <p>
            Kitchen Disaster's Bakers Battle Contest was launched as a way to
            gather all food and fun lovers to experience baking creativity at
            it's peak. This is an ample opportunity for bakers to compete and
            learn from each other on the battle field. Register to participate
            and flex your culinary know-how.
          </p>
        </div>
        <div className="col-md-2 offset-md-4">
          <h4>Quick Links</h4>
          <ul className="list-unstyled">
            <li>
              <BsFillPatchQuestionFill style={{ fontSize: "22px" }} />

              <Link to={"/faq"}>FAQs</Link>
            </li>{" "}
            <li>
              <FaPhoneAlt style={{ fontSize: "22px" }} />

              <Link to={"/contact"}>Contact us</Link>
            </li>{" "}
            <li>
              <GiArchiveRegister style={{ fontSize: "22px" }} />

              <Link to={"/registration"}>Register</Link>
            </li>{" "}
          </ul>
        </div>
      </div>
      <center>
        <h4>Follow us on:</h4>
        <ul className="list-inline media-links">
          <li className="list-inline-item">
            <Link to={"/"}>
              <FaFacebook style={{ fontSize: "50px" }} />
            </Link>
          </li>{" "}
          <li className="list-inline-item">
            <Link to={"/"}>
              <AiFillInstagram style={{ fontSize: "50px" }} />
            </Link>
          </li>{" "}
          <li className="list-inline-item">
            <Link to={"/"}>
              <AiFillTwitterCircle style={{ fontSize: "50px" }} />
            </Link>
          </li>{" "}
          <li className="list-inline-item">
            <Link to={"/"}>
              <IoLogoYoutube style={{ fontSize: "50px" }} />
            </Link>
          </li>{" "}
          <li className="list-inline-item">
            <Link to={"/"}>
              <IoLogoWhatsapp style={{ fontSize: "50px" }} />
            </Link>
          </li>
        </ul>
      </center>
      <br />
      <div className="d-md-flex col-md-10 offset-md-1">
        <p className=" col-md-5 ">
          © Copyright 2024 Kitchen Disaster. All Rights Reserved
        </p>
        <p className=" col-md-5 offset-md-2">
          Designed and developed by{" "}
          <Link to={"/"} style={{ textDecoration: "underline" }}>
            Hexxondiv Global Services
          </Link>
        </p>
      </div>
    </footer>
  );
};
