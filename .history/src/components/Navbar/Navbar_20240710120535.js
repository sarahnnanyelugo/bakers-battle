import React, { useState } from "react";
import "./navbar.scss";
import Logo from "../../assets/images/logo.png";
import Flier from "../../assets/images/flier2.jpeg";
import { Link } from "react-router-dom";
export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to close menu
  const closeMenu = () => {
    setIsMenuOpen(false);
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
          <h1 style={{ color: "#7BD6F5", fontSize: "90px" }}>
            <em>BAKERS BATTLE!</em>
          </h1>
        </center>

        <input
          type="checkbox"
          id="myInput"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <label for="myInput" className="offset-md-11 tog">
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
                <Link to={"/"} class="aside-anchor" onClick={closeMenu}>
                  HOME
                </Link>
              </li>
              <li>
                <Link to={"/about"} class="aside-anchor">
                  ABOUT
                </Link>
              </li>
              <li>
                <Link to={"/faq"} class="aside-anchor" onClick={closeMenu}>
                  FAQs
                </Link>
              </li>
              <li onClick={closeMenu}>
                <a href="" class="aside-anchor">
                  SPONSORS
                </a>
              </li>{" "}
              <li onClick={closeMenu}>
                <a href="" class="aside-anchor">
                  CONTACT
                </a>
              </li>
              <li onClick={closeMenu}>
                <a href="" class="aside-anchor">
                  REGISTER
                </a>
              </li>
            </ul>
            {isMenuOpen && (
              <nav>
                <ul>
                  <li>
                    <a href="#home" onClick={closeMenu}>
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#about" onClick={closeMenu}>
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#services" onClick={closeMenu}>
                      Services
                    </a>
                  </li>
                  <li>
                    <a href="#contact" onClick={closeMenu}>
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>
            )}
          </div>
        </aside>
      </main>
    </>
  );
};
