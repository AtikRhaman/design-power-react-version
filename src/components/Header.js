import React from "react";
import HeaderImg from "../images/Header-img.png";
import SpeechBubble from "./SpeechBubble";

const Header = props => {
  const { title, subtitle, author } = props;
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="header-content__image">
            <img src={HeaderImg} alt={"banner"} />
          </div>
          <div className="header-content__info">
            <h1 className="header-content__info--italic">
              {"POWERFULLY SIMPLE"}
              <span className="header-content__info--regular">{"WITH A"}</span>
              {"SQUEEKY CLEAN"}
              <span className="header-content__info--regular">{"DESIGN"}</span>
            </h1>
            <p className="header-content__info--regular">
              {
                "Find out how you can offer quick and powerful solutions to your customers now!"
              }
            </p>
            <button className="btn"> {"Learn more"} </button>
          </div>
        </div>
        <SpeechBubble />
      </div>
      <h1> {title} </h1> <h2> {subtitle} </h2>
      <h2>
        {author.firstName} {author.lastName}
      </h2>
    </header>
  );
};

export default Header;
