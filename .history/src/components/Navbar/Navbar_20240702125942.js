import React, { useState } from "react";
import "./navbar.scss";
import Logo from "../../assets/images/logo.png";
export const Navbar = () => {
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
    <>
      <div style={{ height: "30px", background: "#DC727C" }} />
      <div style={{ height: "10px", background: "#DEF2FA" }} />
      <main>
        <img
          className="img"
          src={Logo}
          alt="Scholar"
          width="164px"
          height="57px"
        />
        <h1>
          Fullscreen menu
          <span> with cool links </span>
        </h1>

        <input type="checkbox" id="myInput" />
        <label for="myInput" className="offset-md-11">
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
    </>
  );
};
