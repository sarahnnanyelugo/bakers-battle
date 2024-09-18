import React, {useContext, useEffect, useState} from "react";
import "./recent-activity.scss";
import facebook from "../../assets/images/fb.png";
import instagram from "../../assets/images/instagram.jpeg";
import whatsapp from "../../assets/images/whatsapp.png";
import twitter from "../../assets/images/twitter.jpeg";
import linkedin from "../../assets/images/Linkedin.png";
import others from "../../assets/images/others.png";
import moment from 'moment';

export const RecentActivity = ({data}) => {
    const getImg=(source)=>{
        switch (source) {
            case 'facebook':
                return facebook;
            case 'instagram':
                return instagram;
            case 'whatsapp':
                return whatsapp;
            case 'twitter':
                return  twitter;
            case 'linkedin':
                return linkedin;
            default:
                return others;
        }
    }

    return (
    <div className="activities">
      <img
        src={getImg(data?.details?.source)}
        height="25px"
        width="25px"
        style={{ marginRight: "10px" }}
      />
      <div className="col-md-8" style={{ flexGrow: 1 }}>
        <h4>{data?.details?.name}</h4>
        <p>{data?.action}</p>
      </div>
      <div className="col-md-3">
        <small>{moment(data?.created_at).fromNow()}</small>
        <sup>.</sup>
      </div>
    </div>
  );
};
