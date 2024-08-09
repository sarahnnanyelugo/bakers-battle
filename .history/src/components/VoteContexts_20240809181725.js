import React, { createContext, useContext, useState } from "react";

const VoteContext = createContext();

export const useVotes = () => useContext(VoteContext);

export const VoteProvider = ({ children }) => {
  const [votes, setVotes] = useState(originalVotes);

  const incrementVote = (index) => {
    setVotes((prevVotes) =>
      prevVotes.map((vote, i) => (i === index ? vote + 1 : vote))
    );
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
