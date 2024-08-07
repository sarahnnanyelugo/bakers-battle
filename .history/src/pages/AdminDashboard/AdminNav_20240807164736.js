import React from "react";

export const AdminNav = () => {
  return (
    <div className="admin-nav">
      {" "}
      <div className="dash-logo">
        {" "}
        <center>
          <Link to={"/"}>
            <img src={Logo} width="164px" height="57px" />
          </Link>
        </center>
      </div>
    </div>
  );
};
