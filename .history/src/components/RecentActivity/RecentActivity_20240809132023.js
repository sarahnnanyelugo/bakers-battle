import React from "react";
import "./recent-activity.scss";

export const RecentActivity = ({ data }) => {
  return (
    <div className="activities">
      <img src={Icon} height="20px" width="20px" />
      <div className="col-md-9" style={{ flexGrow: 1 }}>
        <h4>{data.schoolName}</h4>
        <p>{data.schoolDetail}</p>
      </div>
      <div className="col-md-3">
        <small>{data.time}</small>
        <sup>.</sup>
      </div>
    </div>
  );
};
