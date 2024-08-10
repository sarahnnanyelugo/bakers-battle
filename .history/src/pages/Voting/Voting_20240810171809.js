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
      <h1>Live Vote Count</h1>

      <div
        className="col-md-10 offset-md-1 d-md-flex"
        style={{ marginTop: "80px" }}
      >
        <div className="col-md-12 contestants">
          <div className="col-md-12">
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
              <h2>Chef Dami's Votes: {votes[2]}</h2>
            </div>
            <div className="d-flex">
              <img src={Mike} />
              <h2>Chef Mike's Votes: {votes[3]}</h2>
            </div>{" "}
            <div className="d-flex">
              {" "}
              <img src={Segun} />
              <h2>Chef Segun's Votes: {votes[4]}</h2>
            </div>
            <div className="d-flex">
              {" "}
              <img src={Lola} />
              <h2>Chef Lola's Votes: {votes[5]}</h2>
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
