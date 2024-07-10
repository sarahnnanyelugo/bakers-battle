import React, { useState } from "react";
import "./home.scss";

export const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div class="stretched device-xl">
      <div
        id="wrapper"
        style={{
          backgroundColor: "rgb(222, 242, 249)",
          borderTop: "24px solid rgb(220, 114, 124)",
          animationDuration: "1500ms",
          opacity: 1,
        }}
        class="clearfix"
      >
        <header id="header" class="transparent-header no-sticky">
          <div id="header-wrap">
            <div class="main-logo">
              <a href="https://chicagosbestbaker.com">
                <img
                  src="images/cbbc-2019_logo.png"
                  alt="Chicago's Best Baker Competition logo"
                  style={{
                    paddingTop: "15px",
                    paddingLeft: "15px",
                    maxWidth: "225px",
                  }}
                />
              </a>
            </div>

            <div>
              <div class="primary-menu-trigger hamburger is-opened-navi">
                <i class="icon-line-menu"></i>
                <i class="icon-line-cross"></i>
              </div>
              <div class="global-menu">
                <div class="global-menu__wrap">
                  <a class="global-menu__item is-opened" href="/">
                    Home
                  </a>
                  <a
                    class="global-menu__item is-opened"
                    href="/registration-and-rules"
                  >
                    Contest Registration &amp; Rules
                  </a>
                  <a class="global-menu__item is-opened" href="/cookie-swap">
                    Holiday Cookie Swap
                  </a>
                  <a class="global-menu__item is-opened" href="/sponsors">
                    Sponsors
                  </a>
                  <a
                    class="global-menu__item is-opened"
                    href="/taste-the-entries"
                  >
                    Taste the Entries
                  </a>
                  <a class="global-menu__item is-opened" href="/faq">
                    FAQ
                  </a>
                </div>
              </div>
              <svg
                class="shape-overlays is-opened"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                <path
                  class="shape-overlays__path"
                  d="M 0 0 V 100 C 16.666666666666664 100 16.666666666666664 100 33.33333333333333 100 C 49.99999999999999 100 49.99999999999999 100 66.66666666666666 100 C 83.33333333333334 100 83.33333333333334 100 100 100 V 0 H 0"
                ></path>
                <path
                  class="shape-overlays__path"
                  d="M 0 0 V 100 C 16.666666666666664 100 16.666666666666664 100 33.33333333333333 100 C 49.99999999999999 100 49.99999999999999 100 66.66666666666666 100 C 83.33333333333334 100 83.33333333333334 100 100 100 V 0 H 0"
                ></path>
                <path
                  class="shape-overlays__path"
                  d="M 0 0 V 100 C 16.666666666666664 100 16.666666666666664 100 33.33333333333333 100 C 49.99999999999999 100 49.99999999999999 100 66.66666666666666 100 C 83.33333333333334 100 83.33333333333334 100 100 100 V 0 H 0"
                ></path>
                <path
                  class="shape-overlays__path"
                  d="M 0 0 V 100 C 16.666666666666664 100 16.666666666666664 100 33.33333333333333 100 C 49.99999999999999 100 49.99999999999999 100 66.66666666666666 100 C 83.33333333333334 100 83.33333333333334 100 100 100 V 0 H 0"
                ></path>
              </svg>
            </div>
          </div>
        </header>

        <section
          id="slider"
          class="slider-element swiper_wrapper full-screen clearfix desktop-only"
          style={{
            borderBottom: "24px solid rgb(220, 114, 124)",
            height: "187px",
          }}
        >
          <div
            class="swiper-container swiper-parent swiper-container-horizontal"
            style="cursor: grab;"
          >
            <div class="swiper-wrapper">
              <div
                class="swiper-slide swiper-slide-active"
                style={{ background: "red" }}
              >
                <div class="banner">Chicago's Only Amateur Baking Contest</div>

                <a
                  href="#"
                  data-scrollto="#content"
                  data-offset="100"
                  class="red one-page-arrow"
                >
                  <i class="icon-angle-down infinite animated fadeInDown"></i>
                </a>
              </div>
            </div>
            <span
              class="swiper-notification"
              aria-live="assertive"
              aria-atomic="true"
            ></span>
          </div>
        </section>

        <div
          class="mobile-slide mobile-only"
          style={{ borderBottom: "24px solid #dc727c", position: "relative" }}
        >
          <div class="banner">Chicago's Only Amateur Baking Contest</div>

          <img
            src="images/CBBC-2024-best-baker-contest_mobile.jpg"
            alt=""
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </div>
    </div>
  );
};
