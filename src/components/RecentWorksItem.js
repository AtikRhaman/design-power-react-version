import React from "react";
import placeholderImg from "../images/img-placeholder.png";
import SudoTextBlock from "../components/SudoTextBlock";

const RecentWorksItem = () => {
  return (
    <div className="recent-works__item">
      <div className="image-container">
        <img src={placeholderImg} alt={"placeholder"} />
      </div>
      <SudoTextBlock
        title={"Block Title"}
        content={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel lacus ornare, ultricies tortor pharetra, fringilla est. Aliquam facilisis mattis diam nec faucibus."
        }
      />
    </div>
  );
};
export default RecentWorksItem;
