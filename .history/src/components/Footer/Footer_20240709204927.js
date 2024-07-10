import React from "react";
import "./footer.scss";
import Logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoYoutube } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io";

export const Footer = () => {
  return (
    <footer>
      <center>
        <div className="col-md-3">
          <img className="img" src={Logo} alt="Scholar" width="100%" />
        </div>
      </center>{" "}
      <div className="d-flex col-md-10 offset-md-1">
        <div className="col-md-5">
          <h4>About Us</h4>
          <p>
            Kitchen Disaster's Best Baker Contest was launched as a way to
            gather people from all over the city of Lagos to celebrate the
            diverse and exacting bakers who call Lagos their home. Since there
            is no county fair for Cook County, amateur bakers in the city
            haven't had a chance to compete with and learn from each other on a
            local stage ... until now. Come see why we think Kitchen Disaster's
            bakers are the best!
          </p>
        </div>
        <div className="col-md-6 offset-md-1"></div>
      </div>
      <center>
        {" "}
        <ul className="list-inline">
          <li className="list-inline-item">
            <Link to={"/"}>
              <FaFacebook />
            </Link>
          </li>{" "}
          <li className="list-inline-item">
            <Link to={"/"}>
              <AiFillInstagram />
            </Link>
          </li>{" "}
          <li className="list-inline-item">
            <Link to={"/"}>
              <AiFillInstagram />
            </Link>
          </li>{" "}
          <li className="list-inline-item">
            <Link to={"/"}>
              <IoLogoYoutube />
            </Link>
          </li>{" "}
          <li className="list-inline-item">
            <Link to={"/"}>
              <IoLogoWhatsapp />
            </Link>
          </li>
        </ul>
      </center>
    </footer>
  );
};
