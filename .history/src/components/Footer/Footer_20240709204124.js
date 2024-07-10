import React from "react";
import "./footer.scss";
import Logo from "../../assets/images/logo.png";
export const Footer = () => {
  return (
    <footer>
      <center>
        <div className="col-md-3">
          <img className="img" src={Logo} alt="Scholar" width="100%" />
        </div>
      </center>{" "}
      <div className="d-flex col-md-10 offset-md-1">
        <div className="col-md-6">
          <h4>About Us</h4>
          <p></p>
        </div>
        <div className="col-md-6"></div>
      </div>
    </footer>
  );
};
