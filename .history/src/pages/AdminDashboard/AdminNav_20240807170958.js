import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/images/logo2.png";
import { IoStatsChart } from "react-icons/io5";
import { MdHowToVote } from "react-icons/md";
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
              <IoStatsChart />
            </span>
            Dashboard
          </NavLink>
        </li>{" "}
        <li>
          <NavLink to={"./sch-sub"} activeClassName="active">
            <span>
              <dHowToVote /><span/>
                   
            </NavLink>
        </li>{" "}
      </ul>
    </div>
  );
};
