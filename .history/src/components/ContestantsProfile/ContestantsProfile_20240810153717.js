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

  const inputRef = useRef(null);
  const [data, setData] = useState({});
  const [value, setValue] = useState("");
  const [id, setId] = useState(0);

  useEffect(() => {
    setId(profile);
  }, [profile]);

  useEffect(() => {
    if (id !== 0)
      setData(
        schools.find((obj) => {
          return obj.id == id;
        })
      );
    // console.log(data, research, id);
  }, [id]);
  useEffect(() => {
    setValue(schools.about);
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
              <h6>Name</h6>
              <div className="row row-cols-2 row-cols-lg-2 g-2 g-lg-3">
                <div className="col">
                  <p>{data.name}</p>
                </div>{" "}
                <div className="col">
                  <p>{data.gender}</p>
                </div>
              </div>{" "}
              <div className="row row-cols-2 row-cols-lg-2 g-2 g-lg-3">
                <div className="col">
                  <h6>Phone Number</h6>
                  <p>{data.phoneNum}</p>
                </div>{" "}
                <div className="col">
                  <h6>Email</h6>
                  {data.email}
                </div>
              </div>
              <h6>Address</h6>
              <p>{data.address}</p>
              <small>Street Address</small>
              <h6>
                Social media handle that best depicts the participant's work
              </h6>
              <p>{data.mediaHandle}</p>
            </form>
            <div className="d-md-flex file" style={{ marginTop: "10px" }}>
              <div className="col-md-5 offset-md-1">
                <h6>How the participant heard about us</h6>
                <p>{data.source}</p>
              </div>
            </div>
            <hr />
            <div className="d-flex">
              {" "}
              <button>Aprove</button> <button>Pend</button>{" "}
              <button>Decline</button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};
