import "./faq-accord.scss";
import React from "react";

export const FAQAccord = () => {
  const navItems = [
    { color: "var(--color-green)", index: 0 },
    { color: "var(--color-gold)", index: 1 },
    { color: "var(--color-purple)", index: 2 },
    { color: "var(--color-red)", index: 3 },
  ];
  return (
    <>
      <div className="accord-faq">
        <nav className="bar-navigation">
          <ul className="nav-list" style={{ "--total": navItems.length }}>
            {navItems.map((item, idx) => (
              <li
                key={idx}
                className="nav-item"
                style={{ "--i": item.index, "--color": item.color }}
                tabIndex={idx + 1}
              ></li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};
