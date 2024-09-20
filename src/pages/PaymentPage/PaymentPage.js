import React, {useEffect, useState} from "react";
import "./payment-page.scss";
import Switch from "../../assets/images/paystack.png";
import PaystackHook from "./PaystackHook";
import PaystackWalletHook from "./PaystackWalletHook";
export const PaymentPage = () => {
    const [contestant, setContestant] = useState(null);
    const [voter, setVoter] = useState(null);
    const [transaction, setTransaction] = useState(null);
    useEffect(() => {
        const contestant = JSON.parse(localStorage.getItem('contestant'));
        const voter = JSON.parse(localStorage.getItem('voter'));
        const transaction = JSON.parse(localStorage.getItem('transaction'));
        if (contestant) {
            setContestant(contestant)
        }
        else{
            if (voter) {
                setVoter(voter)
            }
            if (transaction) {
                setTransaction(transaction)
            }
        }
    }, []);
    return (
        <>
            <div className="payment-div">
                {" "}
                <center>
                    <div className="col-md-3 payment-form">
                        {contestant && <><h6>Make your payment</h6>
                            <div className="payment-form">
                                <input value={contestant?.amount} readOnly/>
                                <small>Note:this is a fixed amount</small>
                                <h6>Name</h6>
                                <input type="text" value={contestant?.name} placeholder="enter your name" readOnly/>
                                <h6>Email</h6>
                                <input type="text" value={contestant?.email} placeholder="enter your email" readOnly/>
                            </div></>}
                            {!contestant && voter && transaction && <><h6>Credit Your Wallet</h6>
                            <div className="payment-form">
                                <input value={transaction?.amount} readOnly/>
                                <h6>Name</h6>
                                <input type="text" value={voter?.name} placeholder="enter your name" readOnly/>
                                <h6>Email</h6>
                                <input type="text" value={voter?.email} placeholder="enter your email" readOnly/>
                            </div></>}
                        <h4>Payment Method</h4>
                        <div className="payment-form">
                            <img src={Switch} width="100%" alt="payment logo"/>
                        </div>
                        <center>
                            {contestant && <PaystackHook target={''}/>}
                            {!contestant && voter && transaction && <PaystackWalletHook target={''}/>}
                        </center>
                    </div>
                </center>
            </div>
        </>
    );
};
