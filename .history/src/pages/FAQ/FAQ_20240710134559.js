import React from "react";
import { FAQAccord } from "../../components/FAQAccord/FAQAccord";
import { Title } from "../../components/Title";
import "./faq.scss";
export const FAQ = () => {
  return (
    <>
      <div className="faq-container">
        {" "}
        <Title text="FAQs" />
        <div className="faq-div"></div>
        <FAQAccord />
      </div>
    </>
  );
};
