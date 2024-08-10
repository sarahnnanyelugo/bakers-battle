import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { ContestChart } from "../../components/ContestChart/ContestChart";
// import { ContestChart } from "../ContestChart/ContestChart";
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
    vbngnfghfghfghf
      <div className="chart-container col-md-8">
        {" "}
        <ContestChart labels={sortedLabels} dataset={sortedVotes} />
      </div>
    </>
  );
}

export default VotingPage;
