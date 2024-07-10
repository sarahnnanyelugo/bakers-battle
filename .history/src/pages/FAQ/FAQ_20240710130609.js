import React from "react";
import { FAQAccord } from "../../components/FAQAccord/FAQAccord";
import "./faq.scss";
export const FAQ = () => {
  return (
    <div className="faq-container">
      <div className="faq-div"></div>
      <a
        href="https://youtu.be/WuE_w_sLTSY"
        target="_blank"
        data-keyframers-credit
        style={{ color: "#FFF" }}
      ></a>
      <script src="https://codepen.io/shshaw/pen/QmZYMG.js"></script>

      <FAQAccord />
    </div>
  );
};
