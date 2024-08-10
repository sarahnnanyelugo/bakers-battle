import React from "react";
import { useVotes } from "../../components/VoteContexts";
import Hilda from "../../assets/images/hilda.jpeg";
import Segun from "../../assets/images/segun.jpeg";
import Mike from "../../assets/images/mike.jpeg";
import Lola from "../../assets/images/lola.jpeg";
import Chi from "../../assets/images/chi.jpeg";
import Dami from "../../assets/images/dami.jpeg";
import Logo from "../../assets/images/logo2.png";
import { ContestChart } from "../../components/ContestChart/ContestChart";
const customLabels = [
  "Chef Chi",
  "Chef Hilda",
  "Chef Dami",
  "Chef Mike",
  "Chef Segun",
  "Chef Lola",
];
const originalVotes = [50, 100, 80, 90, 70, 80];

export const Voting = () => {
  // const { votes } = useVotes(); // Get the votes from context
  const { votes, incrementVote, resetVotes } = useVotes(); // Use the votes and increment

  const sortedData = [...votes]
    .map((vote, index) => ({ vote, label: customLabels[index] }))
    .sort((a, b) => b.vote - a.vote);

  const sortedVotes = sortedData.map((item) => item.vote);
  const sortedLabels = sortedData.map((item) => item.label);
  const handleRestoreDefault = () => {
    resetVotes(); // Call the reset function from the context to restore default votes
  };
  return (
    <div>
      <center>
        {" "}
        <h1>Live Vote Count</h1>
      </center>

      <div
        className="col-md-12 offset-md- d-md-flex "
        style={{ marginTop: "80px" }}
      >
        <div className="col-md-4 contestants">
          <div className="col-md-12">
            <div className="d-flex">
              {" "}
              <img src={Chi} />
              <h3>
                Chef Chi's Votes: <span>{votes[0]}</span>
              </h3>
            </div>
            <div className="d-flex">
              {" "}
              <img src={Hilda} />
              <h3>
                {" "}
                Chef Hilda's Votes: <span>{votes[1]}</span>
              </h3>
            </div>{" "}
            <div className="d-flex">
              {" "}
              <img src={Dami} />
              <h3>
                Chef Dami's Votes:<span> {votes[2]}</span>
              </h3>
            </div>
            <div className="d-flex">
              <img src={Mike} />
              <h3>
                Chef Mike's Votes: <span>{votes[3]}</span>
              </h3>
            </div>{" "}
            <div className="d-flex">
              {" "}
              <img src={Segun} />
              <h3>
                Chef Segun's Votes:<span> {votes[4]}</span>
              </h3>
            </div>
            <div className="d-flex">
              {" "}
              <img src={Lola} />
              <h3>
                Chef Lola's Votes: <span>{votes[5]}</span>
              </h3>
            </div>
          </div>
        </div>
        <div
          className="chart-container col-md-8"
          style={{ marginTop: "100px" }}
        >
          <ContestChart labels={sortedLabels} dataset={sortedVotes} />
        </div>
      </div>
    </div>
  );
};
