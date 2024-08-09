import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { ContestChart } from "../ContestChart/ContestChart";
import { useVotes } from "../VoteContexts";

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
function VotingModal() {
  const [lgShow, setLgShow] = useState(false);
  const { votes, incrementVote } = useVotes(); // Use the votes and increment
  const sortedData = [...votes]
    .map((vote, index) => ({ vote, label: customLabels[index] }))
    .sort((a, b) => b.vote - a.vote);

  const sortedVotes = sortedData.map((item) => item.vote);
  const sortedLabels = sortedData.map((item) => item.label);
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
        <Modal.Body>
          <ContestChart labels={customLabels} dataset={votes} />
          <div className="d-flex">
            {customLabels.map((label, index) => (
              <button key={index} onClick={() => incrementVote(index)}>
                {label}
              </button>
            ))}
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default VotingModal;
