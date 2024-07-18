import React from "react";
import { FAQAccord } from "../../components/FAQAccord/FAQAccord";
import { Title } from "../../components/Title";
import "./faq.scss";
export const FAQ = () => {
  return (
    <>
      <div className="faq-container">
        {" "}
        <div className="faq-div" style={{ paddingTop: "15%" }}>
          <div className="offset-md-7 heading">
            <h1>CONTACT US</h1>
          </div>
        </div>
        <FAQAccord />
      </div>
    </>
  );
};
