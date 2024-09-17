import "./faq-accord.scss";
import React from "react";
import { Link } from "react-router-dom";

export const FAQAccord = () => {
  return (
    <>
      <div className="accord-faq mobile-padding">
        <div id="faq" class="faq-body col-md-6 offset-md-3">
          <div class="faq-header">
            <h3 class="faq-title">FREQUENTLY ASKED QUESTIONS</h3>
            <div class="seperator"></div>
          </div>
          <div class="faq-list">
            <div>
              <details open>
                <summary title="Do I need to be a professional baker to contest?">
                  Do I need to be a professional baker to contest?
                </summary>
                <p class="faq-content">
                  The competition is open to both professionals and non
                  professionals, however, you must be good with baking and
                  pastries.
                </p>
              </details>
            </div>
            <div>
              <details>
                <summary title="How much does the registration cost? ">
                  How much does the registration cost?
                </summary>
                <p class="faq-content">
                  The registration cost's only{" "}
                  <b>Three Thousand Naira (&#8358;3000)</b>
                </p>
              </details>
            </div>
            <div>
              <details>
                <summary title="What are your opening hours?">
                  Is the show gender based?
                </summary>
                <p class="faq-content">
                  The show is for for both genders who are creatively good with
                  baking and pastries.
                </p>
              </details>
            </div>
            <div>
              <details>
                <summary title="Will the contestants know what they will bake before the show?">
                  Will the contestants know what they will bake before the
                  competition?
                </summary>
                <p class="faq-content">
                  Not at all, just get your mind prepared for a puzzle
                </p>
              </details>
            </div>
            <div>
              <details>
                <summary title="Will I receive recognition or credit for my appearance on the show?">
                  Will I receive recognition or credit for my appearance on the
                  show?
                </summary>
                <p class="faq-content">Yes you will</p>
              </details>
            </div>
            <div>
              <details>
                <summary title=" ⁠Can I use my appearance on the show for promotional purposes? ">
                  ⁠Can I use my appearance on the show for promotional purposes?
                </summary>
                <p class="faq-content">
                  Yes, but only when you are promoting bakers battle
                </p>
              </details>
            </div>{" "}
            <div>
              <details>
                <summary title=" Will I be able to showcase my own business or brand on the show?  ">
                  Will I be able to showcase my own business or brand on the
                  show?
                </summary>
                <p class="faq-content">
                  With proper authorization, yes you can.
                </p>
              </details>
            </div>
            <div>
              <details>
                <summary title=" Will I be able to showcase my own business or brand on the show?  ">
                  Will I be able to showcase my own business or brand on the
                  show?
                </summary>
                <p class="faq-content">
                  With proper authorization, yes you can.
                </p>
              </details>
            </div>
          </div>
          <center>
            {" "}
            <Link to={"/registration"}>
              {" "}
              <button
                class="button-92"
                role="button"
                style={{ fontSize: "25px" }}
              >
                Register
              </button>
            </Link>
          </center>
        </div>
      </div>
    </>
  );
};
