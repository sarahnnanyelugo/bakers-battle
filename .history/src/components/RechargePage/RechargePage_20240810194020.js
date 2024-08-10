import React, { useState } from "react";
import Switch from "../../assets/images/switch.png";
import Modal from "react-bootstrap/Modal";
export const RechargePage = () => {
  const [lgShow, setLgShow] = useState(false);
  return (
    <>
      <button onClick={() => setLgShow(true)} className="wallet-btn">
        Recharge Wallet
      </button>

      <Modal
        size="md"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            <h5>Recharge your Wallet</h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="">
            {" "}
            <center>
              <div className=" payment-form">
                <div className="payment-form">
                  <h6>Enter Amount</h6>
                  <input placeholder="min of 500" type="text" />
                  <small>Note: Minimum to purchase is 10Units</small>
                  <h6>Qty</h6>
                  <input type="number" />
                  <small>Note: 1 unit is 50naira</small>
                  <h6>Email</h6>
                  <input type="text" placeholder="enter your email" />
                </div>
                <h4>Payment Method</h4>
                <div className="">
                  <img src={Switch} width="100%" alt="payment logo" />
                </div>
                <center>
                  <button>Buy Voucher</button>
                </center>
              </div>
            </center>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};