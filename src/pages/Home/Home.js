import React from "react";
import { Link } from "react-router-dom";
import Host from "../../assets/images/host.jpg";
import { ScreenSlide } from "../../components/ScreenSlide/ScreenSlide";
import "./home.scss";
import Accordion from "react-bootstrap/Accordion";
import Flier from "../../assets/images/flier1.jpeg";

import { FAQAccord } from "../../components/FAQAccord/FAQAccord";
import { OurSponsors } from "../../components/OurSponsors/OurSponsors";

export const Home = () => {
  return (
    <>
      <div className="home-div">
        {/* <h1 className="offset-md-6">BAKERS BATTLE</h1> */}
      </div>
      {/* <ScreenSlide /> */}
      <div className="d-md-flex about-div col-md-10 offset-md-1">
        <div className="col-md-6 mobile-padding">
          <div className="col-md-11">
            {" "}
            <h3>
              Welcome to Bakers Battle, where the best bakers in Nigeria compete
              for the title of Kitchen Disaster’s Best Baker!
            </h3>
            <br />
            <h3>The Contest</h3>
            <p>
              Join us on November 2024 at a renowed baking empire in Lagos State
              to discover who is who on the baking battle field. The event will
              be free and open to the public.
            </p>
            <p>
              At the end of the intense competition, there shall emerge three
              winners with prices for each. and of course, consolation rewards
              for all participants.
            </p>
              <Link to={"/about"}>
                <button class="button-48" role="button">
                  <span class="text">Read more</span>
                </button>
              </Link>
            <p>
              <strong> Kitchen Disaster's Bakers Battle Contest</strong> was
              launched as a way to gather people from all walks of life to
              celebrate the diverse and exacting bakers who call Nigeria their
              home.
            </p>{" "}
            <p>
              For rules, view
              <Link class="button-48" role="button" to={"/registration"}>
                <span class="text">registration and rules</span>
              </Link>
              <br />
              For further enquiries{" "}
              <Link
                class=""
                role="button"
                to={"/contact"}
                style={{ color: "black" }}
              >
                contact us
              </Link>{" "}
            </p>
            <Link to={"/registration"}>
              {" "}
              <button class="button-92" role="button">
                Register
              </button>
            </Link>
          </div>
        </div>
        <div className="col-md-6 mobile-padding host">
          <img src={Host} width="100%" />
        </div>
      </div>
      <div
        className="offset-md-1 col-md-10 mobile-padding"
        style={{ marginTop: "70px" }}
      >
        <div className="d-md-flex">
          <div className="col-md-6 home-flier">
            {" "}
            <img className="img  img-adj" src={Flier} alt="Scholar" />
          </div>{" "}
          <div className="col-md-6 ">
            <FAQAccord />
          </div>
        </div>
      </div>

      <div className="col-md-12 sponsors-div">
        <center>
          <h2>Our Sponsors</h2>
        </center>
       <OurSponsors />
      </div>
    </>
  );
};
