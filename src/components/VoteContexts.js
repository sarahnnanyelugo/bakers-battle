import React, { createContext, useContext, useState } from "react";
const originalVotes = [50, 100, 80, 90, 70, 80]; // Define the default values here
const originalLabels = [
  "Chef Chi",
  "Chef Hilda",
  "Chef Dami",
  "Chef Mike",
  "Chef Segun",
  "Chef Lola",
];

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
