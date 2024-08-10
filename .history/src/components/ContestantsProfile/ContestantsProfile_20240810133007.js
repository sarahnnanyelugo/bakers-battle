import "./profile.scss";
import Img from "../../assets/images/contest.png";
import { Link } from "react-router-dom";
import { FileUpload } from "../FileUpload/FileUpload";
import Photo from "../../assets/images/photo.png";
import Sample from "../../assets/images/sample.png";
import { useRef, useCallback, useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import Flier from "../FlierModal/FlierModal";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
export const ContestantsProfile = () => {
  const [smShow, setSmShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);

  return (
    <>
      <p onClick={() => setLgShow(true)} style={{ cursor: "pointer" }}>
        View
      </p>
      <Modal
        size="lg"
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
                    Application Form
                  </h2>
                  <p style={{ marginTop: "40px" }}>
                    <span>Entry Fee:</span> ₦5000 per person
                  </p>{" "}
                  <p>
                    <span>Awards:</span> Consult <Flier />
                  </p>
                  <p>
                    <span>Registration</span>: 31st of July 2024
                  </p>{" "}
                  <p>
                    <span>Judging:</span> There will be 3 Judges and winner will
                    be posted at 3pm(WAT).
                  </p>
                </div>
                <div className="col-md-3">
                  <img src={Img} width="100%" />
                </div>
              </div>
              <h6>Name</h6>
              <div className="row row-cols-2 row-cols-lg-2 g-2 g-lg-3">
                <div className="col">
                  <input placeholder="first & last name" />
                </div>{" "}
                <div className="col">
                  <select>
                    <option>Male</option>
                    <option>FeMale</option>
                  </select>
                  <small>Select gender</small>
                </div>
              </div>{" "}
              <div className="row row-cols-2 row-cols-lg-2 g-2 g-lg-3">
                <div className="col">
                  <h6>Phone Number</h6>
                  <input placeholder="(000) 000-0000" />
                  <small>Please enter a valid phone number.</small>
                </div>{" "}
                <div className="col">
                  <h6>Email</h6>
                  <input placeholder="" />
                  <small>example@example.com</small>
                </div>
              </div>
              <h6>Address</h6>
              <input />
              <small>Street Address</small>
              <h6>Your social media handle that best depicts your work</h6>
              <input style={{ marginTop: "20px" }} />
              <small>eg: facebook, instagram, youtube</small>
              <div
                className="row row-cols-2 row-cols-lg-2 g-2 g-lg-3"
                style={{ marginTop: "20px" }}
              ></div>
            </form>
            <div className="d-md-flex file" style={{ marginTop: "10px" }}>
              <div className="d-md-flex col-md-6">
                {/* <div className="col-md-5">
                {" "}
                <center>
                  {" "}
                  <h5>Upload work sample</h5>
                </center>
                <FileUpload
                  detail="click here to upload work sample"
                  ProfileAvater={Sample}
                />
              </div>{" "} */}
                <div className="col-md-6 offset-md-1">
                  {" "}
                  <center>
                    {" "}
                    <h5>Upload Profile Photo</h5>
                  </center>
                  <FileUpload
                    detail="click here to upload personal photo"
                    ProfileAvater={Photo}
                  />
                </div>
              </div>
              <div className="col-md-5 offset-md-1">
                <h6>How did you hear about us?</h6>
                <select>
                  <option>Facebook</option>
                  <option>Instagram</option>
                  <option>Whatsapp</option>
                  <option>Youtube</option>
                  <option>LinkedIn</option>
                  <option>Friends</option>
                  <option>Others</option>
                </select>
              </div>
            </div>
            <Accordion defaultActiveKey="0" className="col-md-7">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  Rules and Terms of Agreement
                </Accordion.Header>
                <Accordion.Body>
                  <ul className="rules">
                    <li>Professional bakers are not allowed to participate.</li>
                    <li>
                      Baking Contest Officials have the right to accept or
                      reject the entries in accordance with the rules.
                    </li>
                    <li>
                      The final decision of the winner will be decided by the
                      judges and the online voters, hence keep an opem mind.
                      There will be no expectations.
                    </li>
                  </ul>
                  <p>I, undersigned, agree with the following statements:</p>
                  <ul className="rules">
                    <li>
                      <input type="checkbox" /> I am the participant of the
                      contest or the parent / guardian of the participant
                    </li>
                    <li>
                      The decision to participate was taken with free will.
                    </li>
                    <li>
                      {" "}
                      <input type="checkbox" />I understand, appreciate and
                      acknowledge that property damage and injuries are common
                      on such event. I participate in this voluntarily and with
                      full knowledge of the inherent risks.
                    </li>
                    <li>
                      {" "}
                      <input type="checkbox" />I hereby release any and all
                      rights that either my assigns or I may have against the
                      contest organization, the supervisors, hosts agents or
                      employees arising from my participation, including but not
                      limited to property damage and injuries.
                    </li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>

            <br />
            <br />
            <p>
              By clicking on the register button below, you have agreed to the
              rules and terms of agreement listed above.
            </p>
            <hr />
            <center>
              <Link to={"/payment"}>
                <button class="button-57" role="button">
                  <span class="text">Register</span>
                  <span>Make Payment</span>
                </button>
              </Link>
            </center>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};
