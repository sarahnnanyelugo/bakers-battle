import React from "react";
import Logo from "../../assets/images/logo2.png";
export const AdminNav = () => {
  return (
    <div className="admin-nav">
      {" "}
      <div className="dash-logo">
        {" "}
        <center>
          <Link to={"/"}>
            <img src={Logo} width="57px" height="57px" />
          </Link>
        </center>
      </div>
    </div>
  );
};