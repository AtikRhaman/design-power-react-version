import React from "react";

const SudoTextBlock = props => {
  return (
    <div class="text-block">
      <h2 class="text-block__title"> {props.title}</h2>
      <div class="text-block__regular">{props.content}</div>
    </div>
  );
};

export default SudoTextBlock;
