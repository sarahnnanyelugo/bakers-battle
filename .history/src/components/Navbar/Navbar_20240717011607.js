import React, { useEffect, useState } from "react";
import "./navbar.scss";
import Logo from "../../assets/images/logo2.png";
import Flier from "../../assets/images/flier2.jpeg";
import { Link } from "react-router-dom";
import { Title } from "../Title";
export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Step 2: Create a function to handle checkbox changes
  const handleCheckboxChange = (event) => {
    setIsMenuOpen(event.target.checked);
  };

  // Step 3: Use useEffect to track checkbox status changes
  useEffect(() => {
    // Code to run when isMenuOpen changes
    console.log(`Checkbox is now ${isMenuOpen ? "checked" : "unchecked"}`);
  }, [isMenuOpen]); // Dependency array contains isMenuOpen

  // Function to close menu
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  return (
    <>
      <div style={{ height: "30px", background: "#DC727C" }} />
      <div style={{ height: "10px", background: "#DEF2FA" }} />

      <main>
        <div
          className="col-md-2 offset-md-1"
          style={{ position: "relative", zIndex: 220 }}
        >
          {" "}
          <Link to={"/"}>
            <img className="img2" src={Logo} alt="Scholar" width="70%" />
          </Link>
        </div>
        <center>
          <h1 style={{ color: " black", fontSize: "90px" }}></h1>
        </center>

        <input
          type="checkbox"
          id="myInput"
          checked={isMenuOpen}
          onChange={handleCheckboxChange}
        />
        <label for="myInput" className="offset-md-11 tog">
          <span class="bar top"></span>
          <span class="bar middle"></span>
          <span class="bar bottom"></span>
        </label>

        <aside>
          <div class="aside-section aside-left col-md-4">
            <div class="aside-content" style={{ zIndex: 230 }}>
              <img
                className="img col-md-12 offset-md-"
                src={Flier}
                alt="Scholar"
                width="100%"
              />
            </div>
          </div>
          <div class="aside-section aside-right col-md-8 ">
            <div className="col-md-4 offset-md-4">
              {" "}
              <ul class="aside-list ">
                <li>
                  <Link to={"/"} class="aside-anchor" onClick={closeMenu}>
                    HOME
                  </Link>
                </li>
                <li>
                  <Link to={"/about"} class="aside-anchor" onClick={closeMenu}>
                    ABOUT
                  </Link>
                </li>
                <li>
                  <Link to={"/faq"} class="aside-anchor" onClick={closeMenu}>
                    FAQs
                  </Link>
                </li>
                <li onClick={closeMenu}>
                  <Link to={"/sponsors"} class="aside-anchor">
                    SPONSORS
                  </Link>
                </li>{" "}
                <li onClick={closeMenu}>
                  <Link to={"/contact"} class="aside-anchor">
                    CONTACT
                  </Link>
                </li>
                <li onClick={closeMenu}>
                  <Link to={"/registration"} class="aside-anchor">
                    REGISTER
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </aside>
      </main>
    </>
  );
};
