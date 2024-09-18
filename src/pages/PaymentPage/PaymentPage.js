import React, {useEffect, useState} from "react";
import "./payment-page.scss";
import Switch from "../../assets/images/paystack.png";
import PaystackHook from "./PaystackHook";
export const PaymentPage = () => {
    const [contestant, setContestant] = useState(null);
    useEffect(() => {
        // Retrieve the required data from localStorage
        const contestant = JSON.parse(localStorage.getItem('contestant'));
        if (contestant) {
            setContestant(contestant)
        }
    }, []);
    return (
        <>
            <div className="payment-div">
                {" "}
                <center>
                    <div className="col-md-3 payment-form">
                        <h6>Make your payment</h6>
                        <div className="payment-form">
                            <input value={contestant?.amount} readOnly/>
                            <small>Note:this is a fixed amount</small>
                            <h6>Name</h6>
                            <input type="text" value={contestant?.name} placeholder="enter your name" readOnly/>
                            <h6>Email</h6>
                            <input type="text" value={contestant?.email} placeholder="enter your email" readOnly/>
                        </div>
                        <h4>Payment Method</h4>
                        <div className="payment-form">
                            <img src={Switch} width="100%" alt="payment logo"/>
                        </div>
                        <center>
                            {/*<Link*/}
                            {/*    to={"/success-page"}*/}
                            {/*    style={{position: "relative", zIndex: 20}}*/}
                            {/*>*/}
                                <PaystackHook target={''}/>
                            {/*</Link>*/}
                        </center>
                    </div>
                </center>
            </div>
        </>
    );
};
