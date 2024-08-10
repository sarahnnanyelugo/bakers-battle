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
      <center>
        {" "}
        <h1>Live Vote Count</h1>
      </center>

      <div className="col-md-10 offset-md-1 " style={{ marginTop: "80px" }}>
        <div className="col-md-5 contestants">
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
        <div className="chart-container col-md-7" style={{ marginTop: 0 }}>
          <ContestChart labels={sortedLabels} dataset={sortedVotes} />
        </div>
      </div>
    </div>
  );
};
