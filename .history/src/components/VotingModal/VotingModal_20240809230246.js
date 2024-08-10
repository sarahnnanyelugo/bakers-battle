import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { ContestChart } from "../ContestChart/ContestChart";
import { useVotes } from "../VoteContexts";
import "./voting-modal.scss";
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

function VotingModal() {
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
      <p onClick={() => setLgShow(true)} style={{ cursor: "pointer" }}>
        Vote
      </p>

      <Modal
        size="xl"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            <h3>Get your person to win</h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-md-flex">
          <div className="col-md-5"></div>
          <div className="chart-container col-md-7">
            {" "}
            <ContestChart labels={sortedLabels} dataset={sortedVotes} />
          </div>

          <div className="button-container d-flex justify-content-between mt-4">
            {customLabels.map((label, index) => (
              <button
                class="button-57"
                role="button"
                key={index}
                onClick={() => incrementVote(index)}
                style={{ flex: "1" }}
              >
                <span class="text"> {label}</span>
                <span>VOTE</span>
              </button>
            ))}
          </div>
          <Button onClick={handleRestoreDefault} variant="warning">
            Restore to Default
          </Button>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default VotingModal;
