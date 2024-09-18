import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./payment-page.scss";
import { PaystackButton } from 'react-paystack';
import Swal from 'sweetalert2';
import axios from 'axios';

const formatAmount = (amount) => {
    return parseFloat(amount) * 100; // Convert amount to kobo (assuming Naira is the currency)
};

const PaystackHook = () => {
    const [config, setConfig] = useState(null);
    const [verifying,setVerifying]=useState(false)
    const navigate = useNavigate();  // useNavigate for redirection
    useEffect(() => {
        const contestant = JSON.parse(localStorage.getItem('contestant'));
        const pk = localStorage.getItem('pk');

        if (contestant && pk) {
            setConfig({
                reference: contestant.reference,
                email: contestant.email,
                amount: formatAmount(contestant.amount), // Amount in kobo
                publicKey: pk,
            });
        } else {
            Swal.fire({
                title: 'Error!',
                text: 'Payment details are missing.',
                icon: 'error',
                confirmButtonText: 'OK'
            });
        }
    }, []);
    const token = localStorage.getItem("token");
    const target = localStorage.getItem('target')||'contestant';
    // Verification function
    const verifyTransaction = (reference) => {
        // Access the base URL from the environment variable
        const baseUrl = process.env.REACT_APP_API_BASE_URL;
        setVerifying(true)
        axios.post(`${baseUrl}/api/verify-transaction`, {
            reference: reference, // send the reference to verify
            target:target,

        },{
            headers: {
                Authorization: `Bearer ${token}`,  // Include the token in Authorization header
            },})
            .then(response => {
                const data = response.data;
                setVerifying(false)
                if (data.success) {
                    localStorage.setItem('success_data', JSON.stringify(data));
                    localStorage.removeItem('pk');
                    navigate('/success-page');
                } else {
                    // Transaction verification failed
                    Swal.fire({
                        title: 'Verification Failed!',
                        text: 'Unable to verify payment. Please contact support.',
                        icon: 'error',
                        confirmButtonText: 'OK'
                    });
                }
            })
            .catch(error => {
                setVerifying(false)
                console.error('Error verifying payment:', error);
                Swal.fire({
                    title: 'Error!',
                    text: 'There was an error verifying your payment.',
                    html:`<p>${error.response?.data?.message}</p>`,
                    icon: 'error',
                    confirmButtonText: 'OK'
                });
            });
    };

    // On success handler
    const onSuccess = (reference) => {
        console.log('Payment Successful:', reference);
        verifyTransaction(reference.reference);  // Call verification on success
    };

    // On close handler
    const onClose = () => {
        console.log('Payment modal closed');
        const contestant = JSON.parse(localStorage.getItem('contestant'));
        if (contestant && contestant.reference) {
            // Try verifying the payment on close in case it was successful
            verifyTransaction(contestant.reference);
        } else {
            Swal.fire({
                title: 'Payment Cancelled!',
                text: 'You closed the payment window.',
                icon: 'warning',
                confirmButtonText: 'OK'
            });
        }
    };
    if (!config) {
        return <p>Loading payment details...</p>;
    }

    const componentProps = {
        ...config,
        text: 'Proceed to Pay',
        onSuccess: (reference) => onSuccess(reference),
        onClose: onClose,
    };

    return (
        <>
            {!verifying && <PaystackButton {...componentProps} />}
            {verifying && <button disabled>Verifying... Please Wait</button>}
            </>
    );
};

export default PaystackHook;
