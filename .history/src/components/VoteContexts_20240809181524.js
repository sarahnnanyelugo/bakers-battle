import React, { createContext, useContext, useState } from "react";

const VoteContext = createContext();

export const useVotes = () => useContext(VoteContext);

export const VoteProvider = ({ children }) => {
  const [votes, setVotes] = useState([50, 100, 80, 90, 70, 80]);

  const incrementVote = (index) => {
    const newVotes = [...votes];
    newVotes[index] += 1;
    setVotes(newVotes);
  };

  return (
    <VoteContext.Provider value={{ votes, incrementVote,, resetVotes }}>
      {children}
    </VoteContext.Provider>
  );
};
