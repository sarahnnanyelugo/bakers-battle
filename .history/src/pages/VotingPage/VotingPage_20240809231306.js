import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { ContestChart } from "../../components/ContestChart/ContestChart";

import { useVotes } from "../../components/VoteContexts";
import "./voting-page.scss";

function VotingPage() {
  return (
    <>
      <div className="chart-container col-md-7">
        {" "}
        <ContestChart labels={sortedLabels} dataset={sortedVotes} />
      </div>
    </>
  );
}

export default VotingPage;
