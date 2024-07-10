import "./faq-accord.scss";
import React from "react";

export const FAQAccord = () => {
  return (
    <>
      <div>
        <a
          href="https://youtu.be/WuE_w_sLTSY"
          target="_blank"
          data-keyframers-credit
          style="color: #FFF"
        ></a>
        <script src="https://codepen.io/shshaw/pen/QmZYMG.js"></script>

        <nav class="bar-navigation">
          <ul class="nav-list" style="--total: 4;">
            <li
              class="nav-item"
              style="--i:0; --color: var(--color-green)"
              tabindex="1"
            ></li>
            <li
              class="nav-item"
              style="--i:1; --color: var(--color-gold)"
              tabindex="2"
            ></li>
            <li
              class="nav-item"
              style="--i:2; --color: var(--color-purple)"
              tabindex="3"
            ></li>
            <li
              class="nav-item"
              style="--i:3; --color: var(--color-red)"
              tabindex="4"
            ></li>
          </ul>
        </nav>
      </div>
    </>
  );
};
