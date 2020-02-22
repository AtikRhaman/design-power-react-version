import React from "react";
import SpeechBubble from "./SpeechBubble";
import SudoTextBlock from "./SudoTextBlock";

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="testimonial-main-container">
          <div className="testimonial-container">
            <div className="section-border">
              <h1 className="section-border__heading">Testimonials</h1>
            </div>

            <div className="testimonials">
              <div className="testimonials__item">
                <SudoTextBlock />
              </div>

              <div className="testimonials__item">
                <SudoTextBlock />
              </div>

              <div className="testimonials__item">
                <SudoTextBlock />
              </div>

              <div className="testimonials__item">
                <SudoTextBlock />
              </div>
            </div>
          </div>

          <div className="development-container">
            <div className="section-border">
              <h1 className="section-border__heading">Development</h1>
            </div>

            <div className="development">
              <div className="development__item">
                <div className="text-block-dev">
                  <div className="text-block-dev__tab">
                    <button
                      className="btn--dev tablink tab-active"
                      onclick="openTab(event,'Design')"
                    >
                      Design
                    </button>
                    <button
                      className="btn--dev tablink"
                      onclick="openTab(event,'Development')"
                    >
                      Development
                    </button>
                  </div>

                  <div id="Design" className="w3-container w3-border tab">
                    <h2 className="text-block-dev__title"> Design</h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Cupiditate at explicabo Lorem ipsum dolor sit amet
                      consectetur, adipisicing elit. Cupiditate at explicabo
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Cupiditate at explicabo Lorem ipsum dolor sit amet
                      consectetur, adipisicing elit. Cupiditate at explicabo
                    </p>
                    <div className="text-block-dev__btn">
                      <div className="btn">Read More</div>
                    </div>
                  </div>

                  <div
                    id="Development"
                    className="w3-container w3-border tab"
                    style={{ display: "none" }}
                  >
                    <h2 className="text-block-dev__title"> Development</h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Cupiditate at explicabo Lorem ipsum dolor sit amet
                      consectetur, adipisicing elit. Cupiditate at explicabo
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Cupiditate at
                    </p>
                    <div className="text-block-dev__btn">
                      <div className="btn">Read More</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SpeechBubble />
    </section>
  );
};

export default Testimonials;
