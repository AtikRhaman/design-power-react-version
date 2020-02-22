import React from "react";
import HeaderImg from "../images/Header-img.png";
import SpeechBubble from "./SpeechBubble";
import Button from "./Button";

const Header = props => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="header-content__image">
            <img src={HeaderImg} alt={"banner"} />
          </div>
          <div className="header-content__info">
            <h1 className="header-content__info--italic">
              POWERFULLY SIMPLE
              <span className="header-content__info--regular"> WITH A</span>
              <br />
              SQUEEKY CLEAN
              <span className="header-content__info--regular"> DESIGN </span>
            </h1>
            <p className="header-content__info--regular">
              Find out how you can offer quick and powerful solutions to your
              customers now!
            </p>
            <Button content={"Lern More"} />
          </div>
        </div>
        <SpeechBubble />
      </div>
    </header>
  );
};

export default Header;
