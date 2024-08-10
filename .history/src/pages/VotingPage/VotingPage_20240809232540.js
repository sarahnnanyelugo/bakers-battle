import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { ContestChart } from "../../components/ContestChart/ContestChart";
import Hilda from "../../assets/images/hilda.jpeg";
import Segun from "../../assets/images/segun.jpeg";
import Mike from "../../assets/images/mike.jpeg";
import Lola from "../../assets/images/lola.jpeg";
import Chi from "../../assets/images/lola.jpeg";
import Dami from "../../assets/images/dami.jpeg";
import { useVotes } from "../../components/VoteContexts";
import "./voting-page.scss";
// const customData = [50, 100, 80, 90, 70, 80];
const customLabels = [
  "Chef Chi",
  "Chef Hilda",
  "Chef Dami",
  "Chef Mike",
  "Chef Segun",
  "Chef Lola",

  ,
];
const originalVotes = [50, 100, 80, 90, 70, 80];

function VotingPage() {
  const [lgShow, setLgShow] = useState(false);
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
    <>
      <div
        className="col-md-10 offset-md-1 d-md-flex"
        style={{ marginTop: "80px" }}
      >
        <div className="col-md-5 contestants">
          <div className="col-md-6">
            {" "}
            <div>
              {" "}
              <img src={Hilda} width="100%" />
            </div>
            <div>
              <img src={Mike} width="100%" />
            </div>
            <div>
              {" "}
              <img src={Dami} width="100%" />
            </div>
            <div>
              {" "}
              <img src={Lola} width="100%" />
            </div>
            <div>
              {" "}
              <img src={Segun} width="100%" />
            </div>
            <div>
              {" "}
              <img src={Chi} width="100%" />
            </div>
          </div>
        </div>
        <div className="chart-container col-md-7">
          {" "}
          <ContestChart labels={sortedLabels} dataset={sortedVotes} />
        </div>
      </div>
    </>
  );
}

export default VotingPage;