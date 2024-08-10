import React from "react";
import { useVotes } from "../../components/VoteContexts";

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
    </div>
  );
};
