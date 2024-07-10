import React from "react";
import "./faq.scss";
export const FAQ = () => {
  return (
    <div className="faq-container">
      <div className="faq-div"></div>

      <h1>my accordion</h1>
      <ul>
        <li>
          <input type="checkbox" checked="" />
          <i></i>
          <h2>Accordion History</h2>
          <p>
            Accordions (from 19th-century German Akkordeon, from Akkord—"musical
            chord, concord of sounds") are a family of box-shaped musical
            instruments of the bellows-driven free-reed aerophone
            type,colloquially referred to as a squeezebox. A person who plays
            the accordion is called an accordionist. The concertina and
            bandoneón are related. The harmonium and American reed organ are in
            the same family, but are typically larger than an accordion and sit
            on a surface or the floor.
          </p>
        </li>
        <li>
          <input type="checkbox" checked="" />
          <i></i>
          <h2>Accordion Body</h2>
          <p>
            he accordion's body consists of two wooden boxes joined together by
            the bellows. These boxes house reed chambers for the right- and
            left-hand manuals. Each side has grilles in order to facilitate the
            transmission of air in and out of the instrument, and to allow the
            sound to project better. The grille for the right-hand manual is
            usually larger and is often shaped for decorative purposes. The
            right-hand manual is normally used for playing the melody and the
            left-hand manual for playing the accompaniment; however, skilled
            players can reverse these roles and play melodies with the left hand
          </p>
        </li>
        <li>
          <input type="checkbox" checked="" />
          <i></i>
          <h2>Accordion</h2>
          <p>
            Accordions are a family of box-shaped musical instruments of the
            bellows-driven free-reed aerophone type, colloquially referred to as
            a squeezebox. A person who plays the accordion is called an
            accordionist.
          </p>
        </li>
      </ul>
    </div>
  );
};
