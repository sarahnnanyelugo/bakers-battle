import React from "react";
import { useVotes } from "../../components/VoteContexts";
import Hilda from "../../assets/images/hilda.jpeg";
import Segun from "../../assets/images/segun.jpeg";
import Mike from "../../assets/images/mike.jpeg";
import Lola from "../../assets/images/lola.jpeg";
import Chi from "../../assets/images/chi.jpeg";
import Dami from "../../assets/images/dami.jpeg";
import Logo from "../../assets/images/logo2.png";
export const Voting = () => {
  const { votes } = useVotes(); // Get the votes from context

  return (
    <div>
      <h3>Live Vote Count</h3>
      <ul>
        <li></li>
        <li></li>
        <li>Chef Dami's Votes: {votes[2]}</li>
        <li>Chef Mike's Votes: {votes[3]}</li>
        <li>Chef Segun's Votes: {votes[4]}</li>
        <li>Chef Lola's Votes: {votes[5]}</li>
      </ul>

      <div
        className="col-md-10 offset-md-1 d-md-flex"
        style={{ marginTop: "80px" }}
      >
        <div className="col-md-4 contestants">
          <div className="col-md-10">
            <div className="d-flex">
              {" "}
              <img src={Chi} />
              <h2>Chef Chi's Votes: {votes[0]}</h2>
            </div>
            <div className="d-flex">
              {" "}
              <img src={Hilda} />
              <h2> Chef Hilda's Votes: {votes[1]}</h2>
            </div>{" "}
            <div className="d-flex">
              {" "}
              <img src={Dami} />
            </div>
            <div className="d-flex">
              <img src={Mike} />
            </div>{" "}
            <div className="d-flex">
              {" "}
              <img src={Segun} />
            </div>
            <div className="d-flex">
              {" "}
              <img src={Lola} />
            </div>
          </div>
        </div>
        <div className="chart-container col-md-8" style={{ marginTop: 0 }}>
          {/* <ContestChart labels={sortedLabels} dataset={sortedVotes} /> */}
        </div>
      </div>
    </div>
  );
};
