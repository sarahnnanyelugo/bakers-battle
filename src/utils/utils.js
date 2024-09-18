import axios from "axios";

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

export async function GetPubConfig(){
    try {
        const baseUrl = process.env.REACT_APP_API_BASE_URL;
        const response = await axios.post(`${baseUrl}/api/index`);
        return response.data;
    }catch (e) {
        return null;
    }
}