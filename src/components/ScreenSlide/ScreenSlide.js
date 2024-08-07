import React from "react";
import "./slide.scss";
export const ScreenSlide = () => {
  return (
    <div class="untitled">
      <div class="untitled__slides">
        <div class="untitled__slide">
          <div class="untitled__slideBg"></div>
          <div class="untitled__slideContent">
            <span>London</span>
            <span>Scout</span>
            <a
              class="button"
              href="https://unsplash.com/@scoutthecity"
              target="/black"
            >
              Unsplash Profile
            </a>
          </div>
        </div>
        <div class="untitled__slide">
          <div class="untitled__slideBg"></div>
          <div class="untitled__slideContent">
            <span>Vladimir</span>
            <span>Kudinov</span>
            <a
              class="button"
              href="https://unsplash.com/@madbyte"
              target="/black"
            >
              Unsplash Profile
            </a>
          </div>
        </div>
        <div class="untitled__slide">
          <div class="untitled__slideBg"></div>
          <div class="untitled__slideContent">
            <span>Macio</span>
            <span>Amorim</span>
            <a
              class="button"
              href="https://unsplash.com/@maicoamorim"
              target="/black"
            >
              Unsplash Profile
            </a>
          </div>
        </div>
        <div class="untitled__slide">
          <div class="untitled__slideBg"></div>
          <div class="untitled__slideContent">
            <span>Mario</span>
            <span>Calvo</span>
            <a
              class="button"
              href="https://unsplash.com/@mariocalvo"
              target="/black"
            >
              Unsplash Profile
            </a>
          </div>
        </div>
      </div>
      <div class="untitled__shutters"></div>
    </div>
  );
};
