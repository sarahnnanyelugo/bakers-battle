import React from "react";
import "./sponsors.scss";

import { Link } from "react-router-dom";
import { OurSponsors } from "../../components/OurSponsors/OurSponsors";
export const Sponsors = () => {
  return (
    <>
      <div className="sponsor-div mobile-padding">
        <div className="offset-md-7 heading">
          {" "}
          <h1>MEET OUR SPONSORS</h1>
        </div>
      </div>
      <div className="col-md-12 sponsors-div">
        <center>
          <h1>Our Sponsors</h1>
        </center>
      <OurSponsors />
      </div>
      <center><div className="adv">
        <h4>
          For sponsorship and advertisement, kindly{" "}
          <Link to={"/contact"}>Contact us</Link>
        </h4>
      </div></center>
    </>
  );
};
