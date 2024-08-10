import React from "react";
import "./payment-page.scss";
import Switch from "../../assets/images/switch.png";
import { Link } from "react-router-dom";

export const PaymentPage = () => {
  return (
    <>
      <div className="payment-div">
        {" "}
        <center>
          <div className="col-md-3 payment-form">
            <h6>Make your payment</h6>
            <div className="payment-form">
              <input value="5000" readOnly />
              <small>Note:this is a fixed amount</small>
              <h6>Name</h6>
              <input type="text" placeholder="enter your name" />
              <h6>Email</h6>
              <input type="text" placeholder="enter your email" />
            </div>
            <h4>Payment Method</h4>
            <div className="payment-form">
              <img src={Switch} width="100%" alt="payment logo" />
            </div>
            <center>
              <Link
                to={"/success-page"}
                style={{ position: "relative", zIndex: 20 }}
              >
                <button>Pay Now (5000)</button>
              </Link>
            </center>
          </div>
        </center>
      </div>
    </>
  );
};
