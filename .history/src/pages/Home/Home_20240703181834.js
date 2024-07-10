import React from "react";
import { Link } from "react-router-dom";
import Host from "../../assets/images/host.jpg";
import { ScreenSlide } from "../../components/ScreenSlide/ScreenSlide";
import "./home.scss";
export const Home = () => {
  return (
    <>
      <div className="home-div"></div>
      {/* <ScreenSlide /> */}
      <div className="d-md-flex about-div col-md-10 offset-md-1">
        <div className="col-md-6">
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
              at the Wilson Abbey to discover whose bakes have won! The event
              will be free and open to the public.
            </p>
            <p>
              Attendance at the event is free, and passes for tastings after the
              winners are announced.
            </p>
            <p>
              There are seven categories in the competition and the winners of
              each category will be awarded first, second, and third prizes in
              their category. Any baker who enters five or more categories will
              be entered in the Chicago’s Best Baker Contest and the winner will
              be chosen based on their overall scores. As an added treat,
              attendees can sign up to taste the entries in each category. New
              this year -
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
            <Link to={"/rules"}>Rules and Registration</Link>
            <button class="button-92" role="button">
              Register
            </button>
            <p>
              For rules, view <Link to={"/"}>registration and rules</Link>.
              Questions? Comments? Email us at bakersbattle@gmail.com
            </p>
            <p>
              Kitchen Disaster's Best Baker Contest was launched as a way to
              gather people from all over the city of Lagos to celebrate the
              diverse and exacting bakers who call Lagos their home. Since there
              is no county fair for Cook County, amateur bakers in the city
              haven't had a chance to compete with and learn from each other on
              a local stage ... until now. Come see why we think Kitchen
              Disaster's bakers are the best!
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <img src={Host} width="100%" />
        </div>
      </div>
    </>
  );
};
