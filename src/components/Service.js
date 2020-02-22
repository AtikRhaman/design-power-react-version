import React from "react";
import ServiceItem from "../components/ServiceItem";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { faRecycle } from "@fortawesome/free-solid-svg-icons";

const Service = () => {
  return (
    <section className="service-section">
      <div className="container">
        <div className="service">
          <ServiceItem
            icon={faHome}
            subHeading={"SUPPERBLY RESPONSIVE"}
            content={
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate at explicabo illum! Ullam quam, at ab aperiam blanditiis nihil eum! Soluta explicabo ullam cum maxime laboriosam cumque officiis officia facilis?"
            }
          />
          <ServiceItem
            icon={faDesktop}
            subHeading={"SUPPERBLY RESPONSIVE"}
            content={
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate at explicabo illum! Ullam quam, at ab aperiam blanditiis nihil eum! Soluta explicabo ullam cum maxime laboriosam cumque officiis officia facilis?"
            }
          />
          <ServiceItem
            icon={faLaptopCode}
            subHeading={"SUPPERBLY RESPONSIVE"}
            content={
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate at explicabo illum! Ullam quam, at ab aperiam blanditiis nihil eum! Soluta explicabo ullam cum maxime laboriosam cumque officiis officia facilis?"
            }
          />
          <ServiceItem
            icon={faRecycle}
            subHeading={"SUPPERBLY RESPONSIVE"}
            content={
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate at explicabo illum! Ullam quam, at ab aperiam blanditiis nihil eum! Soluta explicabo ullam cum maxime laboriosam cumque officiis officia facilis?"
            }
          />
        </div>
      </div>
    </section>
  );
};
export default Service;
