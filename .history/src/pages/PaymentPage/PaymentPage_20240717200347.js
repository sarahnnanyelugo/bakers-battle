import React from "react";
import "./payment-page.scss";
export const PaymentPage = () => {
  return (
    <>
      <div>
        {" "}
        <center>
          <div className="col-md-3 payment-form">
            <h6>Make your payment</h6>
            <div className="payment-form">
              <input value="5000" readOnly />
            </div>
          </div>
        </center>
      </div>
    </>
  );
};
