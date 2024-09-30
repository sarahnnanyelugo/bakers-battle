import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/images/logo2.png";
import { IoStatsChart } from "react-icons/io5";
import { MdHowToVote, MdSettings,MdOutlineLogout, MdCountertops, MdRefresh } from "react-icons/md";
import Offcanvas from "react-bootstrap/Offcanvas";
import { IoMenu } from "react-icons/io5";
export const AdminNav = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
   <> 
<p
   onClick={handleShow}
   className=" offcanvas-btn"
   style={{ cursor: "pointer"}}
 >
   <IoMenu style={{ fontSize: "32px" }} />
 </p>

 <Offcanvas
        show={show}
        onHide={handleClose}
        backdrop={false}
        responsive="lg"
        placement="start"
        scroll={true}
        className="menuu"
       
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <div className="admin-nav ">
 {" "}
 <div className="dash-logo">
   {" "}
   <center>
     <Link to={"/"} onClick={handleClose}>
       <img src={Logo} width="97px" height="97px" />
     </Link>
   </center>
 </div>
 <ul className="list-unstyled col-md-12 ">
   <li>
     <NavLink to={"./admin-dashboard"} onClick={handleClose} activeClassName="active">
       <span>
         <IoStatsChart />
       </span>
       Dashboard
     </NavLink>
   </li>{" "}
   <li>
     <NavLink to={"./voting"} onClick={handleClose} activeClassName="active">
       <span>
         <MdHowToVote />
       </span>
       Voting
     </NavLink>
   </li>
   <li>
     <NavLink to={"./configurations"} onClick={handleClose} activeClassName="active">
       <span>
         <MdSettings />
       </span>
       Configurations
     </NavLink>
   </li>
   <li>
     <NavLink to={"./stages"} onClick={handleClose} activeClassName="active">
       <span>
         <MdCountertops />
       </span>
       Stages
     </NavLink>
   </li>
   <li>
     <NavLink to={"/logout"} onClick={handleClose} className="text-danger" activeClassName="active">
       <span>
         <MdOutlineLogout />
       </span>
       <small>Logout</small>
     </NavLink>
   </li>
 </ul>
</div>
        </Offcanvas.Body>
      </Offcanvas>






</>
  );
};
