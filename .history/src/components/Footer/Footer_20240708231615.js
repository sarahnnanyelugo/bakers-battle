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
      </center>
    </footer>
  );
};
