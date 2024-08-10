import React from "react";
import "./payment-page.scss";
import Switch from "../../assets/images/switch.png";
import Modal from "react-bootstrap/Modal";
export const RechargePage = () => {
  const [lgShow, setLgShow] = useState(false);
  return (
    <>
      <button onClick={() => setLgShow(true)} style={{ cursor: "pointer" }}>
        Recharge wallet
      </button>

      <Modal
        size="sm"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            <h3>Get your person to win</h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
                  <button>Pay Now (5000)</button>
                </center>
              </div>
            </center>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};