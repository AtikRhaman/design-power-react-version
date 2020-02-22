import React from "react";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ServiceItem = props => {
  return (
    <div className="service__item">
      <div className="icon-container">
        <FontAwesomeIcon icon={props.icon} />
      </div>
      <h3 className="sub-heading">{props.subHeading}</h3>
      <div className="regular-text--center">{props.content}</div>
      <Button content={"Read More"} />
    </div>
  );
};
export default ServiceItem;
