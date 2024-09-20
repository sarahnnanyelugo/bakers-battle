import React, {createContext, useState, useEffect} from "react";

// Create the context
export const AuthUserContext = createContext();

// AuthUserProvider component to wrap around components that need authentication logic
export const AuthUserProvider = ({ children }) => {
    const contestantToken = JSON.parse(localStorage.getItem('contestant'));
    const adminToken = JSON.parse(localStorage.getItem("admin"));
    const voterToken = JSON.parse(localStorage.getItem('voter'));
    const token = localStorage.getItem("token");

    const [authVoter, setAuthVoter] = useState(() => {
        return (voterToken&&token) ? {user:voterToken,token:token} : null;
    }); // Store authenticated voter info
    const [authContestant, setAuthContestant] = useState(
        () => {
            // Try to get the initial state from localStorage
            return (contestantToken&&token) ? {user:contestantToken,token:token} : null;
        }
    ); // Store authenticated user info
    const [authAdmin, setAuthAdmin] = useState(
        () => {
            // Try to get the initial state from localStorage
            return (adminToken&&token) ? {user:adminToken,token:token} : null;
        }
    ); // Store authenticated user info


    useEffect(() => {
        if(!token)
        {
            setAuthVoter(null);
            setAuthAdmin(null);
            setAuthContestant(null)
            return;
        }
        if (adminToken) {
            setAuthVoter(null);
            setAuthContestant(null)
            // You could also fetch user info here based on the token
            setAuthAdmin({
                user: adminToken, // Set this to the actual user details you get from an API
                token: token,
            });
        } else if (contestantToken) {
            setAuthVoter(null);
            setAuthAdmin(null);
            // You could also fetch user info here based on the token
            setAuthContestant({
                user: contestantToken, // Set this to the actual user details you get from an API
                token: token,
            });
        } else if (voterToken) {
            setAuthAdmin(null);
            setAuthContestant(null)
            // You could also fetch user info here based on the token
            setAuthVoter({
                user: voterToken, // Set this to the actual user details you get from an API
                token: token,
            });
        }
    },[children]);

    return (
        <AuthUserContext.Provider value={{ authVoter, setAuthVoter,authContestant, setAuthContestant,authAdmin, setAuthAdmin }}>
            {children}
        </AuthUserContext.Provider>
    );
};
