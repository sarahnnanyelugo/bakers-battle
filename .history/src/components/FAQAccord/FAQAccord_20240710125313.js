import "./faq-accord.scss";
import React from "react";

export const FAQAccord = () => {
  return (
    <>
      <div className="accord-faq">
        <section class="card">
          <article>
            <h1 data-accordion-element-trigger>Lorem ipsum</h1>
            <div data-accordion-element-content class="content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse eu lectus quis mauris malesuada fringilla. Praesent
                non tellus massa. Phasellus at neque et massa elementum sodales.
                Quisque neque enim, dignissim at molessllis. Pellentesque
                blandit quam imperdiet lorem lobortis, at pharetra massa
                condimentum. Maecenas ac nibh mi. Donec suscipit dolor vitae
                faucibus venenatis.
              </p>
            </div>
          </article>
          <article>
            <h1 data-accordion-element-trigger>
              Lorem ipsum dolor sit amet, consect
            </h1>
            <div data-accordion-element-content class="content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse eu lectus quis mauris malesuada fringilla. Praesent
                non tellus massa. Phasellus at neque et massa elementum sodales.
                Quisque neque enim, dignissim at molestie quis, lobortis eu
                elit.{" "}
              </p>
            </div>
          </article>
          <article>
            <h1 data-accordion-element-trigger>Lorem ipsum</h1>
            <div data-accordion-element-content class="content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse eu lectus quis mauris malesuada fringilla. Praesent
                non tellus massa. Phasellus at neque et massa elementum sodales.
                Quisque neque enim, dignissim at molestie quis, lobortis eu
                elit. Sed ornare ultrices tortor sed mollis. Pellentesque
                blandit quam imperdiet lorem lobortis, at pharetra massa
                condimentum. Maecenas ac nibh mi. Donec suscipit dolor vitae
                faucibus venenatis.
              </p>
            </div>
          </article>
          <article>
            <h1 data-accordion-element-trigger>Lorem ipsum</h1>
            <div data-accordion-element-content class="content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse eu lectus quis mauris malesuada fringilla. Praesent
                non tellus massa. Phasellus at neque et massa elementum sodales.
                Quisque neque enim, dignissim at molestie quis, lobortis eu
                elit. Sed ornare ultrices tortor sed mollis. Pellentesque
                blandit quam imperdiet lorem lobortis, at pharetra massa
                condimentum. Maecenas ac nibh mi. Donec suscipit dolor vitae
                faucibus venenatis.
                <br />
                Praesent non tellus massa. Phasellus at neque et massa elementum
                sodales. Quisque neque enim, dignissim at molestie quis,
                lobortis eu elit. Sed ornare ultrices tortor sed mollis.
                Pellentesque blandit quam imperdiet lorem lobortis, at pharetra
                massa condimentum. Maecenas ac nibh mi. Donec suscipit dolor
                vitae faucibus venenatis.
              </p>
            </div>
          </article>
        </section>
      </div>
    </>
  );
};
