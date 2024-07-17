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
import Sponsor4 from "../../assets/images/sponsor4.png";
import Sponsor5 from "../../assets/images/sponsor5.png";
import Sponsor6 from "../../assets/images/sponsor6.png";

export const Home = () => {
  return (
    <>
      <div className="home-div"></div>
      {/* <ScreenSlide /> */}
      <div className="d-md-flex about-div col-md-10 offset-md-1">
        <div className="col-md-6 ">
          <div className="col-md-11">
            {" "}
            <h3>
              Welcome to Bakers Battle, where the best amateur bakers in Nigeria
              compete for the title of Kitchen Disaster’s Best Baker!
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
              be entered in the Lagos’ Best Baker Contest and the winner will be
              chosen based on their overall scores. As an added treat, attendees
              can sign up to taste the entries in each category.
            </p>
            <p>
              we're switching out our International Category for a new category,
              called the Heirloom Recipe Category! The Heirloom Recipe Category
              is where you can enter your grandma's scones, or the chocolate
              cake that has helped your family celebrate every milestone in your
              family since 1956. It could also be the turnovers that you hope to
              pass down in your family someday - your own heirloom recipe. We're
              especially hoping to hear the stories behind these recipes, and
              maybe even to meet your grandma at the contest!
              <button class="button-48" role="button">
                <span class="text">Read more</span>
              </button>
            </p>
            <p>
              Kitchen Disaster's Best Baker Contest was launched as a way to
              gather people from all over the city of Lagos to celebrate the
              diverse and exacting bakers who call Lagos their home. Since there
              is no county fair for Cook County, amateur bakers in the city
              haven't had a chance to compete with and learn from each other on
              a local stage ... until now. Come see why we think Kitchen
              Disaster's bakers are the best!
            </p>{" "}
            <p>
              For rules, view
              <Link class="button-48" role="button">
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
        <div className="col-md-6">
          <img src={Host} width="100%" />
        </div>
      </div>
      <div className="offset-md-1 col-md-10 " style={{ marginTop: "70px" }}>
        <div className="d-md-flex">
          <div className="col-md-6">
            {" "}
            <img
              className="img  offset-md-"
              src={Flier}
              alt="Scholar"
              width="80%"
            />
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
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Category 2</Accordion.Header>
                  <Accordion.Body>
                    <p>
                      {" "}
                      This category shall involve the first five selected
                      contestants whose works impressed both the judges and the
                      online voters. Here each contestant shall be expected
                      to... Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit, sed do eiusmod tempor incididunt ut labore et dolore
                      magna aliqua. Ut enim ad minim veniam, quis nostrud
                      exercitation ullamco laboris nisi ut aliquip ex ea commodo
                      consequat. Duis aute irure dolor in
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
                  <Accordion.Header>Category 3</Accordion.Header>
                  <Accordion.Body>
                    <p>
                      {" "}
                      This is the final category. It shall involve the first
                      three contestants from category2 . <br />
                      <br />
                      <span style={{ color: "red" }}>
                        {" "}
                        NOTE: WHAT TO BE BAKED ON THIS CATEGORY SHALL BE UNKNOWN
                        TILL THE LAST MINUTE!{" "}
                      </span>
                      <br />
                      <br />
                      come prepared for the unexpected!... <br />
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
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
            </Accordion>
          </div>
        </div>
      </div>

      <div className="col-md-12 sponsors-div">
        <center>
          <h2>Our Sponsors</h2>
        </center>
        <div className="col-md-10 offset-md-1  d-md-flex row row-cols-2 row-cols-lg-6 g-2 g-lg-3">
          <div className="col">
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
          </div>
          <div className="col">
            <div className="sponsors">
              {" "}
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
          </div>
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
          <div className="col">
            <div className="sponsors">
              {" "}
              <center>
                {" "}
                <img
                  className="img  offset-md-"
                  src={Sponsor4}
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
