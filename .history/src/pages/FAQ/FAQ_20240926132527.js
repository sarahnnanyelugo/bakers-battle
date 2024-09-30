import React from "react";
import { FAQAccord } from "../../components/FAQAccord/FAQAccord";
import { Title } from "../../components/Title";
import "./faq.scss";
export const FAQ = () => {
  return (
    <>
      <div className="faq-container col-md-12">
        {" "}
        <div
          className="faq-div col-md-6 offset-md-3"
          style={{ paddingTop: "20%" }}
        >
          <div className="offset-md-1 heading">
            <h1>FAQs</h1>
          </div>
        </div>
        <FAQAccord />
      </div>
    </>
  );
};
