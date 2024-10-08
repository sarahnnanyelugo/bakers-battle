import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Img from "../../assets/images/flier1.jpeg";
import "./flier-modal.scss";
function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <img src={Img} width="100%" />
      </Modal.Body>
    </Modal>
  );
}

function Flier() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <span onClick={() => setModalShow(true)} style={{ cursor: "pointer" }}>
        FLIER
      </span>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default Flier;
