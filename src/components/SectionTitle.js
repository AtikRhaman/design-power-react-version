import React from "react";

const SectionTitle = props => {
  return (
    <div className="section-border">
      <h1 className="section-border__heading">{props.content}</h1>
    </div>
  );
};
export default SectionTitle;
