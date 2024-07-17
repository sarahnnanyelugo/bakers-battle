import React from "react";
import "./footer.scss";
import Logo from "../../assets/images/logo2.png";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoYoutube } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsFillPatchQuestionFill } from "react-icons/bs";
import { MdContactSupport } from "react-icons/md";
import { GiArchiveRegister } from "react-icons/gi";

export const Footer = () => {
  return (
    <footer>
      <center>
        <div className="col-md-3">
          <img className="img2" src={Logo} alt="Scholar" width="75%" />
        </div>
      </center>{" "}
      <div className="d-md-flex col-md-10 offset-md-1 mobile-padding">
        <div className="col-md-5">
          <h4>About Us</h4>
          <p>
            Kitchen Disaster's Best Baker Contest was launched as a way to
            gather people from all over the city of Lagos to celebrate the
            diverse and exacting bakers who call Lagos their home. This is an
            ample oppotunity for bakers in the city to compete with and learn
            from each other on a local stage ... until now. Come see why we
            think Kitchen Disaster's bakers are the best!
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
    </footer>
  );
};
