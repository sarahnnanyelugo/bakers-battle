import React, { createContext, useState, useEffect } from "react";

// Create the context
export const AuthUserContext = createContext();

// AuthUserProvider component to wrap around components that need authentication logic
export const AuthUserProvider = ({ children }) => {
    const [authVoter, setAuthVoter] = useState(null); // Store authenticated user info
    const [authContestant, setAuthContestant] = useState(null); // Store authenticated user info
    const [authAdmin, setAuthAdmin] = useState(null); // Store authenticated user info

    // Simulate checking if a user is logged in by getting token from localStorage
    useEffect(() => {
        const contestantToken = localStorage.getItem("token");
        const adminToken = localStorage.getItem("admin_token");
        const voterToken = localStorage.getItem("voter_token");
        if (adminToken) {
            // You could also fetch user info here based on the token
            const admin = localStorage.getItem("admin");
            setAuthAdmin({
                user: admin, // Set this to the actual user details you get from an API
                token: adminToken,
            });
        } else {
            setAuthAdmin(null); // No user logged in
        }
        if (contestantToken) {
            // You could also fetch user info here based on the token
            const contestant = JSON.parse(localStorage.getItem('contestant'));
            setAuthContestant({
                user: contestant, // Set this to the actual user details you get from an API
                token: contestantToken,
            });
        } else {
            setAuthContestant(null); // No user logged in
        }
        if (voterToken) {
            // You could also fetch user info here based on the token
            const voter = JSON.parse(localStorage.getItem('voter'));
            setAuthVoter({
                user: voter, // Set this to the actual user details you get from an API
                token: voterToken,
            });
        } else {
            setAuthVoter(null); // No user logged in
        }
    }, []);

    return (
        <AuthUserContext.Provider value={{ authVoter, setAuthVoter,authContestant, setAuthContestant,authAdmin, setAuthAdmin }}>
            {children}
        </AuthUserContext.Provider>
    );
};
