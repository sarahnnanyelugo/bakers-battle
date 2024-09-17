import React from "react";
import { Link } from "react-router-dom";
import Host from "../../assets/images/host.jpg";
import { ScreenSlide } from "../../components/ScreenSlide/ScreenSlide";
import "./home.scss";
import Accordion from "react-bootstrap/Accordion";
import Flier from "../../assets/images/flier1.jpeg";
import Sponsor1 from "../../assets/images/sponsor1.jpeg";
import Sponsor2 from "../../assets/images/sponsor2.png";
import Sponsor3 from "../../assets/images/sponsor3.png";
import Sponsor4 from "../../assets/images/hexxondiv-tech-hub.jpeg";
import Sponsor5 from "../../assets/images/elixir.PNG";
import Sponsor6 from "../../assets/images/sponsor6.png";

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
              Join us on Saturday, July 20, 2024, at 2 p.m., in the Auditorium
              at the Mainland to discover whose bakes have won! The event will
              be free and open to the public.
            </p>
            <p>
              Attendance at the event is free, and passes for tastings after the
              winners are announced.
            </p>
            <p>
              There are three categories in the competition and the winners of
              each category will be awarded first, second, and third prizes in
              their category. Any baker who enters two or more categories will
              be entered in the Kitchen Disaster’s Best Baker Contest and the
              winner will be chosen based on their overall scores. As an added
              treat, attendees can sign up to taste the entries in each
              category.
              <Link to={"/about"}>
                <button class="button-48" role="button">
                  <span class="text">Read more</span>
                </button>
              </Link>
            </p>
            <p>
              Kitchen Disaster's Best Baker Contest was launched as a way to
              gather people from all over the city of Lagos to celebrate the
              diverse and exacting bakers who call Lagos their home.
            </p>{" "}
            <p>
              For rules, view
              <Link class="button-48" role="button" to={"/registration"}>
                <span class="text">registration and rules</span>
              </Link>
              Questions? Comments? Email us at{" "}
              <Link class="button-48" role="button">
                <span class="text">bakersbattle@gmail.com</span>
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
          <div className="col-md-6">
            {" "}
            <img className="img  img-adj" src={Flier} alt="Scholar" />
          </div>{" "}
          <div className="col-md-5 offset-md-1 accord">
            {" "}
            <h3>The Categories</h3>
            <p>There are three main categories to this competition</p>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Category 1</Accordion.Header>
                <Accordion.Body>
                  <p>
                    {" "}
                    This category shall involve the twenty selected contestants.
                    Here each contestant shall be expected to... Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim
                    ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure
                    dolor in
                  </p>
                  <Link to={"/registration"}>
                    {" "}
                    <button
                      class="button-92"
                      role="button"
                      style={{ fontSize: "15px" }}
                    >
                      Register
                    </button>
                  </Link>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="1">
                <Accordion.Header>Category 2</Accordion.Header>
                <Accordion.Body>
                  <p>
                    {" "}
                    This category shall involve the first five selected
                    contestants whose works impressed both the judges and the
                    online voters. Here each contestant shall be expected to...
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in
                  </p>
                  <Link to={"/registration"}>
                    {" "}
                    <button
                      class="button-92"
                      role="button"
                      style={{ fontSize: "15px" }}
                    >
                      Register
                    </button>
                  </Link>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Category 3</Accordion.Header>
                <Accordion.Body>
                  <p>
                    {" "}
                    This is the final category. It shall involve the first three
                    contestants from category2 . <br />
                    <br />
                    <span style={{ color: "red" }}>
                      {" "}
                      NOTE: WHAT TO BE BAKED ON THIS CATEGORY SHALL BE UNKNOWN
                      TILL THE LAST MINUTE!{" "}
                    </span>
                    <br />
                    <br />
                    come prepared for the unexpected!... <br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in
                  </p>
                  <Link to={"/registration"}>
                    {" "}
                    <button
                      class="button-92"
                      role="button"
                      style={{ fontSize: "15px" }}
                    >
                      Register
                    </button>
                  </Link>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>

      <div className="col-md-12 sponsors-div">
        <center>
          <h2>Our Sponsors</h2>
        </center>
        <div className="col-md-10 offset-md-1  d-md-flex row row-cols-2 row-cols-lg-6 g-2 g-lg-3 mobile-padding">
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
          <div className="col">
            <div className="sponsors">
              {" "}
              <center>
                {" "}
                <img
                  className="img  offset-md-"
                  src={Sponsor3}
                  alt="Scholar"
                  width="100%"
                />
              </center>
            </div>
          </div>
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
          <div className="col">
            <div className="sponsors">
              {" "}
              <center>
                {" "}
                <img
                  className="img  offset-md-"
                  src={Sponsor5}
                  alt="Scholar"
                  width="100%"
                />
              </center>
            </div>
          </div>{" "}
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
        </div>
      </div>
    </>
  );
};
