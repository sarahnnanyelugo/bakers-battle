import React from "react";
import { FAQAccord } from "../../components/FAQAccord/FAQAccord";
import "./faq.scss";
export const FAQ = () => {
  return (
    <>
      <Title text="FAQs" />
      <div className="faq-container">
        <div className="faq-div"></div>

        <FAQAccord />
      </div>
    </>
  );
};
