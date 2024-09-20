import axios from "axios";
import { toast } from 'react-toastify';
/**
 * Formats a number as currency.
 * @param {number} value - The number to format.
 * @param {string} [locale='en-US'] - The locale to use for formatting (e.g., 'en-US', 'de-DE').
 * @param {string} [currency='USD'] - The currency code (e.g., 'USD', 'EUR').
 * @returns {string} - The formatted currency string.
 */
export function formatCurrency(value, locale = 'en-NG', currency = 'NGN') {
    return new Intl.NumberFormat(locale, {
        style: 'currency',
        currency: currency,
    }).format(value);
}
/**
 * Formats a number with commas for thousands, millions, etc., without the currency symbol.
 * @param {number} value - The number to format.
 * @param {string} [locale='en-NG'] - The locale to use for formatting (e.g., 'en-NG' for Nigeria).
 * @returns {string} - The formatted number string with commas.
 */
export function formatNumber(value, locale = 'en-NG') {
    return new Intl.NumberFormat(locale).format(value);
}
const baseUrl = process.env.REACT_APP_API_BASE_URL;

export async function GetPubConfig(){
    try {
        const response = await axios.post(`${baseUrl}/api/index`);
        return response.data;
    }catch (e) {
        return null;
    }
}

export async function GetAdminConfig(){
    const token = localStorage.getItem('token')
    if(!token) return null;
    try {
        const response = await axios.post(`${baseUrl}/api/admin/get-configurations`,{},{headers: {
                Authorization: `Bearer ${token}`, // Using token
            },});
        return response.data;
    }catch (e) {
        return null;
    }
}
export async function GetVoter(){
    const token = localStorage.getItem('token')
    if(!token) return null;
    try {
        const response = await axios.post(`${baseUrl}/api/voter`,{},{headers: {
                Authorization: `Bearer ${token}`, // Using token
            },});
        return response.data;
    }catch (e) {
        return null;
    }
}

export async function GetStages(){
    try {
        const response = await axios.post(`${baseUrl}/api/get-stages`);
        return response.data;
    }catch (e) {
        return null;
    }
}

export async function GetVoteStanding(){
    try {
        const response = await axios.post(`${baseUrl}/api/get-vote-standing`);
        return response.data;
    }catch (e) {
        return null;
    }
}

export async function fetchContestants() {
    try {
        const response = await axios.get(`${baseUrl}/api/contestants-votes`);
        return response.data; // Assuming data is an array of contestants
    } catch (error) {
        console.error("Error fetching contestants:", error);
        return [];
    }
}

/**
 * Increment vote for a contestant.
 * @param {number} contestantId - The ID of the contestant.
 * @returns {Promise<object>} - The response from the server.
 */
export const submitVote = async (contestantId) => {
    try {
        const token = localStorage.getItem('token'); // Retrieve the token from local storage

        const response = await axios.post(
            `${baseUrl}/api/vote`,
            { contestantId },
            {
                headers: {
                    Authorization: `Bearer ${token}`, // Use Bearer authentication
                },
            }
        );
        if (response.data.success) {
            toast.success('Vote submitted successfully!', { // Show success toast
                position: "bottom-left",
                autoClose: 1000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
        return response.data; // Return the response data
    } catch (error) {
        toast.error(error?.response?.data?.error||error?.response?.data?.message||'Error submitting vote. Please try again!', { // Show error toast
            position: "bottom-left",
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        console.error("Error submitting vote:", error);
        throw error; // Rethrow the error for handling in the calling function
    }
};