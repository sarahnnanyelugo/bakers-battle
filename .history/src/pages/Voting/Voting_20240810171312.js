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
        <li>Chef Chi's Votes: {votes[0]}</li>
        <li>Chef Hilda's Votes: {votes[1]}</li>
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
              <div>
                <button
                  class="button-57"
                  role="button"
                  onClick={() => incrementVote(0)}
                  style={{ flex: "1" }}
                >
                  <span class="text"> Chef Chi</span>
                  <span>VOTE(&#8358;50)</span>
                </button>
              </div>
            </div>
            <div className="d-flex">
              {" "}
              <img src={Hilda} />
              <div>
                {" "}
                <button
                  class="button-57"
                  role="button"
                  onClick={() => incrementVote(1)}
                  style={{ flex: "1" }}
                >
                  <span class="text"> Chef Hilda</span>
                  <span>VOTE(&#8358;50)</span>
                </button>
              </div>
            </div>{" "}
            <div className="d-flex">
              {" "}
              <img src={Dami} />
              <div>
                {" "}
                <button
                  class="button-57"
                  role="button"
                  onClick={() => incrementVote(2)}
                  style={{ flex: "1" }}
                >
                  <span class="text"> Chef Dami</span>
                  <span>VOTE(&#8358;50)</span>
                </button>
              </div>
            </div>
            <div className="d-flex">
              <img src={Mike} />
              <div>
                <button
                  class="button-57"
                  role="button"
                  onClick={() => incrementVote(3)}
                  style={{ flex: "1" }}
                >
                  <span class="text"> Chef Mike</span>
                  <span>VOTE(&#8358;50)</span>
                </button>
              </div>
            </div>{" "}
            <div className="d-flex">
              {" "}
              <img src={Segun} />
              <div>
                {" "}
                <button
                  class="button-57"
                  role="button"
                  onClick={() => incrementVote(4)}
                  style={{ flex: "1" }}
                >
                  <span class="text"> Chef Segun</span>
                  <span>VOTE(&#8358;50)</span>
                </button>
              </div>
            </div>
            <div className="d-flex">
              {" "}
              <img src={Lola} />
              <div>
                {" "}
                <button
                  class="button-57"
                  role="button"
                  onClick={() => incrementVote(5)}
                  style={{ flex: "1" }}
                >
                  <span class="text"> Chef Lola</span>
                  <span>VOTE(&#8358;50)</span>
                </button>
              </div>
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