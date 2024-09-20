import React, { createContext, useContext, useState, useEffect } from "react";
import {fetchContestants, submitVote} from "../utils/utils";

const VoteApiContext = createContext();

export const useApiVotes = () => useContext(VoteApiContext);

export const VoteApiProvider = ({ children }) => {
    const [votes, setVotes] = useState([]);
    const [labels, setLabels] = useState([]);
    const [contestants, setContestants] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const fetchedContestants = await fetchContestants();
            setContestants(fetchedContestants);
            const initialVotes = fetchedContestants.map(contestant => contestant.votes);
            const initialLabels = fetchedContestants.map(contestant => contestant.name);
            setVotes(initialVotes);
            setLabels(initialLabels);
        };

        fetchData().then(r => {});
    }, []);

    const incrementVote = async (contestantId, voterId) => {
        try {
            const response = await submitVote(contestantId);
            if (response.success) {
                // Find the index of the contestant
                const index = contestants.findIndex(contestant => contestant.id === contestantId);
                if (index !== -1) {
                    // Update votes state
                    setVotes((prevVotes) =>
                        prevVotes.map((vote, i) => (i === index ? vote + 1 : vote))
                    );
                    setTimeout(()=>{resetVotes()},200)
                }
            } else {
                console.error("Failed to vote:", response.data.message);
            }
        } catch (error) {
            console.error("Error voting:", error);
        }
    };

    const resetVotes = async () => {
        const fetchedContestants = await fetchContestants();
        const initialVotes = fetchedContestants.map(contestant => contestant.votes);
        const initialLabels = fetchedContestants.map(contestant => contestant.name);
        setVotes(initialVotes);
        setLabels(initialLabels);
        setVotes(initialVotes);
        setContestants(fetchedContestants);
    };

    return (
        <VoteApiContext.Provider value={{ votes, labels,contestants, incrementVote, resetVotes }}>
            {children}
        </VoteApiContext.Provider>
    );
};