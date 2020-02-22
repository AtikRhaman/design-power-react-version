import React from "react";
import placeholderImg from "../images/img-placeholder.png";
import SudoTextBlock from "../components/SudoTextBlock";

const RecentWorksItem = () => {
  return (
    <div className="recent-works__item">
      <div className="image-container">
        <img src={placeholderImg} alt={"placeholder"} />
      </div>
      <SudoTextBlock />
    </div>
  );
};
export default RecentWorksItem;
