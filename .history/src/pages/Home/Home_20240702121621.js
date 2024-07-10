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
    // <main>
    //   <h1>
    //     Fullscreen menu
    //     <span> with cool links </span>
    //   </h1>
    //   <input type="checkbox" id="myInput" />
    //   <label for="myInput">
    //     <span class="bar top"></span>
    //     <span class="bar middle"></span>
    //     <span class="bar bottom"></span>
    //   </label>
    //   <aside>
    //     <div class="aside-section aside-left">
    //       <div class="aside-content">
    //         <p> Some text that will make you click the cta </p>
    //         <button class="button"> CTA </button>
    //       </div>
    //     </div>
    //     <div class="aside-section aside-right">
    //       <ul class="aside-list">
    //         <li>
    //           <a href="" class="aside-anchor">
    //             Link
    //           </a>
    //         </li>
    //         <li>
    //           <a href="" class="aside-anchor">
    //             Link
    //           </a>
    //         </li>
    //         <li>
    //           <a href="" class="aside-anchor">
    //             Link
    //           </a>
    //         </li>
    //         <li>
    //           <a href="" class="aside-anchor">
    //             Link
    //           </a>
    //         </li>
    //       </ul>
    //     </div>
    //   </aside>
    // </main>

    <div>
      <div className={`logo ${isOpen ? "is-active" : ""}`}>
        <img
          src="https://witwinkel.ch/themes/witwinkel/assets/images/logo/witwinkel_white.png"
          alt="Logo"
        />
      </div>

      <div
        className={`hamburger ${isOpen ? "is-active" : ""}`}
        onClick={toggleMenu}
      >
        <div className="hamburger--container">
          <div className="hamburger--bars"></div>
        </div>
      </div>

      <div className={`fsmenu ${isOpen ? "is-active" : "close-menu"}`}>
        <div className="fsmenu--container">
          <div className="fsmenu--text-block">
            <div className="fsmenu--text-container">
              <ul className="fsmenu--list">
                {["Agentur", "Portfolio", "Team", "Kontakt"].map(
                  (item, index) => (
                    <li
                      className={`fsmenu--list-element ${
                        hoveredElement === index ? "open" : "is-closing"
                      }`}
                      onMouseEnter={() => handleMouseEnter(index)}
                      onMouseLeave={handleMouseLeave}
                      key={index}
                    >
                      <a href="#">
                        <span>{item}</span>
                      </a>
                      <div className="fsmenu--scrolling-text">
                        {Array(5).fill(<span key={index}>{item}</span>)}
                      </div>
                      <div className="fsmenu--link-img">
                        <div className="fsmenu--img-container">
                          <img
                            src={`https://witwinkel.ch/themes/witwinkel/assets/images/content/WITWINKEL-buero-albisrieden-2019.jpg`}
                            alt={`${item}`}
                          />
                        </div>
                      </div>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <main>
        <img
          src="https://witwinkel.ch/themes/witwinkel/assets/projects/alfa-romeo-alfabet/content1.jpg"
          alt="Main Content"
        />
      </main>
    </div>
  );
};
