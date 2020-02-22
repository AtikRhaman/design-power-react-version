import React from "react";
import  ServiceItem from "../components/ServiceItem"

const Service = () => {
  return (
    <section className="service-section">
      <div className="container">
        <div className="service">
        <ServiceItem/>

          <div className="service__item">
            <div className="icon-container">
              <i className="fas fa-desktop"></i>
            </div>
            <h3 className="sub-heading">
              {" "}
              <span> Squeeky </span> Clean{" "}
            </h3>
            <div className="regular-text--center">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Cupiditate at explicabo illum! Ullam quam, at ab aperiam
              blanditiis nihil eum! Soluta explicabo ullam cum maxime laboriosam
              cumque officiis officia facilis?
            </div>
            <div className="btn">Read More</div>
          </div>

          <div className="service__item">
            <div className="icon-container">
              <i className="fas fa-laptop-code"></i>
            </div>
            <h3 className="sub-heading">
              <span>Multi</span> purpose
            </h3>
            <div className="regular-text--center">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Cupiditate at explicabo illum! Ullam quam, at ab aperiam
              blanditiis nihil eum! Soluta explicabo ullam cum maxime laboriosam
              cumque officiis officia facilis?
            </div>
            <div className="btn">Read More</div>
          </div>

          <div className="service__item">
            <div className="icon-container">
              <i className="fas fa-recycle"></i>
            </div>
            <h3 className="sub-heading">
              {" "}
              <span>Highly</span> Flaxible{" "}
            </h3>
            <div className="regular-text--center">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Cupiditate at explicabo illum! Ullam quam, at ab aperiam
              blanditiis nihil eum! Soluta explicabo ullam cum maxime laboriosam
              cumque officiis officia facilis?
            </div>
            <div className="btn">Read More</div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Service;
