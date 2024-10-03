import React from 'react'
import Sponsor1 from "../../assets/images/sponsor1.jpeg";
import Sponsor2 from "../../assets/images/sponsor2.png";
import Sponsor3 from "../../assets/images/olivia.jpg";
import Sponsor4 from "../../assets/images/hexxondiv-tech-hub.jpeg";
import Sponsor5 from "../../assets/images/elixir.jpeg";
import Sponsor6 from "../../assets/images/sponsor6.png";
import { Link } from 'react-router-dom';
export const OurSponsors = () => {
  return (
    <> <div className="col-md-10 offset-md-1  d-md-flex row row-cols-2 row-cols-lg-6 g-2 g-lg-3 mobile-padding">
    <Link
      className="col"
      target="_blank"
      to={
        "https://www.instagram.com/straightstreetbakery?igsh=MWdvdGg4eWx0eWYycA=="
      }
    >
      <div className="sponsors">
        <center>
          {" "}
          <img
            className="img  offset-md-"
            src={Sponsor1}
            alt="Scholar"
            width="80%"
          />
        </center>
      </div>
    </Link>
    <Link
      className="col"
      target="_blank"
      to={"https://www.instagram.com/sleeknigeria?igsh=d2xpeTNkaTVuNW5o"}
    >
      <div className="sponsors">
        <br />
        <center>
          {" "}
          <img
            className="img  offset-md-"
            src={Sponsor2}
            alt="Scholar"
            width="95%"
          />
        </center>
      </div>
    </Link>
    <Link to={"https://www.instagram.com/oliviafresh.ng?igsh=OWh0bjA0Y3J2MHRk"} className="col" target="_blank">
      <div className="sponsors">
        {" "}
        <center>
          {" "}
          <img
            className="img  offset-md-"
            src={Sponsor3}
            alt="Scholar"
            width="66%"
          />
        </center>
      </div>
    </Link>
    <Link
      className="col"
      target="_blank"
      to={"https://www.hexxondiv.com"}
    >
      <div className="sponsors">
        <center>
          {" "}
          <img
            className="img  offset-md-"
            src={Sponsor4}
            alt="Scholar"
            width="80%"
          />
        </center>
      </div>
    </Link>{" "}
    <Link
      to={
        "https://www.instagram.com/elixirvictoria?igsh=MXZtbnU2NWc0cGZnNA=="
      }
      target="_blank"
      className="col"
    >
      <div className="sponsors">
        {" "}
        <center>
          {" "}
          <img
            className="img  offset-md-"
            src={Sponsor5}
            alt="Scholar"
            width="80%"
          />
        </center>
      </div>
    </Link>{" "}
    <div className="col">
      <div className="sponsors">
        {" "}
        <center>
          {" "}
          <img
            className="img  offset-md-"
            src={Sponsor6}
            alt="Scholar"
            width="50%"
          />
        </center>
      </div>
    </div>
  </div></>
  )
}
