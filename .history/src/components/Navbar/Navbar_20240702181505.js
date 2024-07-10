import React, { useState } from "react";
import "./navbar.scss";
import Logo from "../../assets/images/logo.png";
import Flier from "../../assets/images/flier1.jpeg";
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
          height="110px"
        />
        <center>
          {" "}
          <h1 style={{ color: "#DEF2FA", fontSize: "50px" }}>BAKERS BATTLE!</h1>
        </center>

        <input type="checkbox" id="myInput" />
        <label for="myInput" className="offset-md-11">
          <span class="bar top"></span>
          <span class="bar middle"></span>
          <span class="bar bottom"></span>
        </label>

        <aside>
          <div class="aside-section aside-left col-md-4">
            <div class="aside-content">
              <img
                className="img col-md-12 offset-md-"
                src={Flier}
                alt="Scholar"
                width="100%"
              />
            </div>
          </div>
          <div class="aside-section aside-right col-md-8">
            <ul class="aside-list">
              <li>
                <a href="" class="aside-anchor">
                  HOME
                </a>
              </li>
              <li>
                <a href="" class="aside-anchor">
                  ABOUT
                </a>
              </li>
              <li>
                <a href="" class="aside-anchor">
                  FAQs
                </a>
              </li>
              <li>
                <a href="" class="aside-anchor">
                  SPONSORS
                </a>
              </li>{" "}
              <li>
                <a href="" class="aside-anchor">
                  CONTACT
                </a>
              </li>
              <li>
                <a href="" class="aside-anchor">
                  REGISTER
                </a>
              </li>
            </ul>
          </div>
        </aside>
      </main>
    </>
  );
};
