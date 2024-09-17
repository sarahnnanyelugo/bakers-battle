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
                <summary title="Do I need a referral?">
                  Do I need a referral?
                </summary>
                <p class="faq-content">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facilis quisquam numquam labore explicabo cupiditate
                  laboriosam. Ipsam explicabo possimus illum aspernatur.
                </p>
              </details>
            </div>
            <div>
              <details>
                <summary title="Is the cost of the appointment covered by private health insurance?">
                  Is the cost of the appointment covered by private health
                  insurance?
                </summary>
                <p class="faq-content">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Explicabo quos quam asperiores enim sequi nihil? Iure
                  blanditiis autem in ratione rerum, sequi cupiditate eos nemo
                  iusto unde eaque voluptatum alias, porro aliquid sunt.
                  Nesciunt veritatis, ex esse tempora laudantium officiis? Quas
                  corrupti a aut sed quaerat, ipsa incidunt tempora velit dolor
                  distinctio repellat tenetur illum consectetur quos veniam eius
                  provident earum doloremque commodi! Minus amet, obcaecati rem,
                  modi accusantium ad, deleniti possimus incidunt laudantium
                  vitae iusto laborum culpa! Similique, repellat.
                </p>
              </details>
            </div>
            <div>
              <details>
                <summary title="What are the parking and public transport options?">
                  What are the parking and public transport options?
                </summary>
                <p class="faq-content">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facilis quisquam numquam labore explicabo cupiditate
                  laboriosam. Ipsam explicabo possimus illum aspernatur.
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
