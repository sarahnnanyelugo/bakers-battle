import "./profile.scss";
import Img from "../../assets/images/contest.png";
import { Link, useLocation, useParams } from "react-router-dom";
import { FileUpload } from "../FileUpload/FileUpload";
import Photo from "../../assets/images/photo.png";
import Sample from "../../assets/images/sample.png";
import { useRef, useCallback, useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import Flier from "../FlierModal/FlierModal";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { schools } from "../../Data/schoolsData";
export const ContestantsProfile = ({ profile }) => {
  const [lgShow, setLgShow] = useState(false);
  const [aprove, setAprove] = useState("Aprove");
  const [pend, setPend] = useState("Pend");
  const [decline, setDecline] = useState("Decline");
  const inputRef = useRef(null);
  const [data, setData] = useState({});
  const [value, setValue] = useState("");
  const [id, setId] = useState(0);

  function Aprove() {
    setAprove("Aproved!");
  }
  function Decline() {
    setDecline("Declined!");
  }
  function Pend() {
    setPend("Pended!");
  }
  function Aprove() {
    setAprove("Aproved!");
  }
  useEffect(() => {
    if (!profile) return;
    console.log(profile);
    setData(profile);
  }, []);

  return (
    <>
      <p onClick={() => setLgShow(true)} style={{ cursor: "pointer" }}>
        View
      </p>
      <Modal
        size="xl"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body className="profile">
          {" "}
          <div className="form ">
            <form className="col-md-12">
              <div className="d-flex">
                <div style={{ flexGrow: 1 }} className="col-12 col-md-6">
                  {" "}
                  <h2>
                    Baking Contest <br />
                    Applicants Profile
                  </h2>
                </div>
                <div className="col-md-3">
                  <img src={data.profilePhoto} width="100%" />
                </div>
              </div>
              <div className="row row-cols-2 row-cols-lg-2 g-2 g-lg-3">
                <div className="col">
                  <h6>Name</h6>
                  <p>{data.name}</p>
                </div>{" "}
                <div className="col">
                  <h6>Gender</h6>
                  <p>{data.gender}</p>
                </div>
              </div>{" "}
              <div className="row row-cols-2 row-cols-lg-2 g-2 g-lg-3">
                <div className="col">
                  <h6>Phone Number</h6>
                  <p>{data.phone}</p>
                </div>{" "}
                <div className="col">
                  <h6>Email</h6>
                  {data.email}
                </div>
              </div>
              <div className="row row-cols-2 row-cols-lg-2 g-2 g-lg-3">
                <div className="col">
                  <h6>Address</h6>
                  <p>{data.address1}</p>
                </div>{" "}
                <div className="col">
                  <h6>Social media handle</h6>
                  <p>{data.mediaHandle}</p>
                </div>{" "}
                <div className="col">
                  <h6>Heard about us through:</h6>
                  <p>{data.source}</p>
                </div>
              </div>
            </form>

            <hr />
            <center>
              {" "}
              <button className="aprove-btn" onClick={Aprove}>
                {aprove}
              </button>
              <button className="pend-btn">{pend}</button>{" "}
              <button className="decline-btn">{decline}</button>
            </center>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};
