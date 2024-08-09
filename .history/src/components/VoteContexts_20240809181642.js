import React, { createContext, useContext, useState } from "react";

const VoteContext = createContext();

export const useVotes = () => useContext(VoteContext);

export const VoteProvider = ({ children }) => {
  const [votes, setVotes] = useState(originalVotes);

  const incrementVote = (index) => {
    const newVotes = [...votes];
    newVotes[index] += 1;
    setVotes(newVotes);
  };
  const resetVotes = () => {
    setVotes(originalVotes);
  };
  return (
    <VoteContext.Provider value={{ votes, incrementVote, resetVotes }}>
      {children}
    </VoteContext.Provider>
  );
};
