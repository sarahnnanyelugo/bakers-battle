import React from "react";
import Host from "../../assets/images/host.jpg";
import "./home.scss";
export const Home = () => {
  return (
    <>
      <div className="home-div"></div>

      <div className="d-flex about-div">
        <div className="col-md-6">
          <p>
            There are seven categories in the competition and the winners of
            each category will be awarded first, second, and third prizes in
            their category. Any baker who enters five or more categories will be
            entered in the Chicago’s Best Baker Contest and the winner will be
            chosen based on their overall scores. As an added treat, attendees
            can sign up to taste the entries in each category. New this year -
            we're switching out our International Category for a new category,
            called the Heirloom Recipe Category! The Heirloom Recipe Category is
            where you can enter your grandma's scones, or the chocolate cake
            that has helped your family celebrate every milestone in your family
            since 1956. It could also be the turnovers that you hope to pass
            down in your family someday - your own heirloom recipe. We're
            especially hoping to hear the stories behind these recipes, and
            maybe even to meet your grandma at the contest!
          </p>
        </div>
        <div className="col-md-6">
          <img src={Host} width="100%" />
        </div>
      </div>
    </>
  );
};
