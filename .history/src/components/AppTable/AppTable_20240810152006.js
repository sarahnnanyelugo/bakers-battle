import React, { useState, useLocation, useEffect } from "react";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import { ContestantsProfile } from "../ContestantsProfile/ContestantsProfile";
import "./schools-table.scss";
const AppTable = ({ data, initialDisplayCount = 4 }) => {
  // const [num] = data;
  const [blogId, setBlogId] = useState(0);
  // const location = useLocation();
  const [prevData, setPrevData] = useState([]);
  useEffect(() => {
    setBlogId(data.id);
  });

  const [isShowingAll, setIsShowingAll] = useState(false);

  const handleToggleDisplay = () => {
    setIsShowingAll(!isShowingAll);
  };
  const visibleData = isShowingAll ? data : data.slice(0, initialDisplayCount);

  const { bg, colo, bd2, colo2 } = data;
  return (
    <div>
      <div className="d-flex tabled-data">
        {" "}
        <h5 style={{ flexGrow: 1 }}>Newly Registered Contestants</h5>
        <div>
          {" "}
          <button onClick={handleToggleDisplay} className="dashboard-btn">
            {isShowingAll ? "See less" : "See all"}
          </button>
        </div>
      </div>

      <Table striped bordered hover className="school-table" responsive>
        <thead>
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            <th>Name</th>
            <th>Status</th>
            <th>PhoneNum</th>

            <th>Gender</th>
            <th colSpan={2}>Action</th>
          </tr>
        </thead>
        <tbody>
          {visibleData.map((item) => (
            <tr key={item.id}>
              <td>
                <input type="checkbox" />
              </td>

              <td className="">
                <div className="d-flex">
                  <img
                    src={item.smPhoto}
                    height="20px"
                    width="20px"
                    style={{ borderRadius: "100%", marginRight: "10px" }}
                  />
                  {item.name}
                </div>
              </td>

              <td>
                <div
                  className="table-btn"
                  style={{
                    background: item.bg,
                    color: item.colo,
                    padding: "0px 25px",
                    width: "fit-content",
                    height: "35px",
                  }}
                >
                  <button> {item.status}</button>
                </div>
              </td>
              <td>{item.phone}</td>
              <td>{item.gender}</td>
              <td className="edit">
                <Link
                  className="view"
                  to={"/dashboard-layout/sch-showcase/" + item.id}
                  state={{ blog_id: blogId }}
                >
                  view
                </Link>
                {/* <ContestantsProfile /> */}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className="d-flex">
        <p style={{ flexGrow: 1 }}>Page 1 of 10</p>
        <div className="d-flex">
          <div>
            {" "}
            <button className="dashboard-btn" style={{ marginRight: "10px" }}>
              Previous
            </button>
          </div>
          <div>
            {" "}
            <button className="dashboard-btn">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppTable;
