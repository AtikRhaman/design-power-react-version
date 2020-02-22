import React from "react";
import ButtonWhite from "./ButtonWhite";

const SpeechBubble = (props) => {
  return (
    <div class="speech-bubble">
      <h2 class="speech-bubble__text">
        Create a <span class="speech-bubble__text--regular">powerful </span>{" "}
        solutions now!
      </h2>
      <ButtonWhite content={"Get Start"} />
    </div>
  );
};

export default SpeechBubble;
