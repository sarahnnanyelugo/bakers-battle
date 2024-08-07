import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo2.png";
export const AdminNav = () => {
  return (
    <div className="admin-nav">
      {" "}
      <div className="dash-logo">
        {" "}
        <center>
          <Link to={"/"}>
            <img src={Logo} width="87px" height="87px" />
          </Link>
        </center>
      </div>
    </div>
  );
};
