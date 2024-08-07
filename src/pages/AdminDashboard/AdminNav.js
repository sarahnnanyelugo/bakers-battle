import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/images/logo2.png";
export const AdminNav = () => {
  return (
    <div className="admin-nav">
      {" "}
      <div className="dash-logo">
        {" "}
        <center>
          <Link to={"/"}>
            <img src={Logo} width="97px" height="97px" />
          </Link>
        </center>
      </div>
      <ul className="list-unstyled col-md-12 ">
        <li>
          <NavLink to={"./my-schools"} activeClassName="active">
            <span>
              <LuSchool />
            </span>
            Dashboard
          </NavLink>
        </li>{" "}
        <li>
          <NavLink to={"./sch-sub"} activeClassName="active">
            <span>
              {" "}
              <MdOutlinePayments />
            </span>
            Subscription
          </NavLink>
        </li>{" "}
      </ul>
    </div>
  );
};
