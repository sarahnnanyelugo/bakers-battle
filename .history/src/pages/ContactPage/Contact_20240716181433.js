import React from "react";
import "./contact.scss";
export const Contact = () => {
  return (
    <>
      <div className="contact-div">
        <div className="offset-md-7">
          {" "}
          <h1>CONTACT US</h1>
        </div>
      </div>
      <div className="col-md-8 offset-md-2">
        <div className="col-md-6"></div>
        <div className="col-md-6">
          <form>
            <input type="text" placeholder="your name" />
            <input type="email" placeholder="your email" />
            <input type="phone" placeholder="your phone number" />
            <textarea  placeholder="leave a message" />
            <center></center>
          </form>
        </div>
      </div>
    </>
  );
};
