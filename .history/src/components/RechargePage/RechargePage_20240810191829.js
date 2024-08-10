import React from "react";
import "./payment-page.scss";
import Switch from "../../assets/images/switch.png";
import Modal from "react-bootstrap/Modal";
export const RechargePage = () => {
  const [lgShow, setLgShow] = useState(false);
  return (
    <>
      <p onClick={() => setLgShow(true)} style={{ cursor: "pointer" }}>
        Vote
      </p>
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
      <Modal
        size="xl"
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
          <div className="d-md-flex col-md-12">
            {" "}
            {/* <div className="col-md-5"></div> */}
            <div className="chart-container col-md-7">
              {" "}
              <ContestChart labels={sortedLabels} dataset={sortedVotes} />
            </div>
          </div>

          <div className="button-container d-flex justify-content-between mt-4">
            {customLabels.map((label, index) => (
              <button
                class="button-57"
                role="button"
                key={index}
                onClick={() => incrementVote(index)}
                style={{ flex: "1" }}
              >
                <span class="text"> {label}</span>
                <span>VOTE</span>
              </button>
            ))}
          </div>
          <Button onClick={handleRestoreDefault} variant="warning">
            Restore to Default
          </Button>
        </Modal.Body>
      </Modal>
    </>
  );
};
