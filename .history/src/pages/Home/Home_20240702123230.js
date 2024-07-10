import React, { useState } from "react";
import "./home.scss";

export const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredElement, setHoveredElement] = useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMouseEnter = (index) => {
    setHoveredElement(index);
  };

  const handleMouseLeave = () => {
    setHoveredElement(null);
  };

  return (
    <main>
      <h1>
        Fullscreen menu
        <span> with cool links </span>
      </h1>

      <input type="checkbox" id="myInput" className="offset-md-10" />
      <label for="myInput">
        <span class="bar top"></span>
        <span class="bar middle"></span>
        <span class="bar bottom"></span>
      </label>

      <aside>
        <div class="aside-section aside-left">
          <div class="aside-content">
            <p> Some text that will make you click the cta </p>
            <button class="button"> CTA </button>
          </div>
        </div>
        <div class="aside-section aside-right">
          <ul class="aside-list">
            <li>
              <a href="" class="aside-anchor">
                Link
              </a>
            </li>
            <li>
              <a href="" class="aside-anchor">
                Link
              </a>
            </li>
            <li>
              <a href="" class="aside-anchor">
                Link
              </a>
            </li>
            <li>
              <a href="" class="aside-anchor">
                Link
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </main>
  );
};
