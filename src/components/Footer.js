import React from "react";

const Footer = props => {
  //   const { copyRight } = props;
  //   return (
  //     <footer className="footer">
  //       <p> {copyRight} </p>
  //     </footer>
  //   );
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer">
          <div className="footer__item">
            <h2 className="sub-heading--color-white responsive-margin">
              About us
            </h2>
            <div className="footer-text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum
                dolorum dicta impedit?
              </p>
              <p>
                123 Street Name <br />
                Road Name <br />
                Londdon <br />
                +44 74139 13807
              </p>
            </div>
          </div>
          <div className="footer__item">
            <h2 className="sub-heading--color-white">Latest Tweets</h2>
            <div className="footer-text">
              <p>
                @HyeSoo Just subscribed another great item on #themeforest about
                3 hours ago
              </p>
              <p>
                @HyeSoo Working on an awesome theme for #themeforest about 3
                months ago
              </p>
            </div>
          </div>
          <div className="footer__item">
            <h2 className="sub-heading--color-white">Latest Post</h2>
            <div className="footer-text">
              <ul>
                <li>
                  <a href="/#">Lorem ipsum dolor sit amet, consec</a>
                </li>
                <li>
                  <a href="/#">Lorem ipsum dolor sit amet, consec</a>
                </li>
                <li>
                  <a href="/#">Lorem ipsum dolor sit amet, consec</a>
                </li>
                <li>
                  <a href="/#">Lorem ipsum dolor sit amet, consec</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer__item">
            <h2 className="sub-heading--color-white">Flickr</h2>
            <div className="flickr">
              <div className="flicker__item"></div>
              <div className="flicker__item"></div>
              <div className="flicker__item"></div>
              <div className="flicker__item"></div>
              <div className="flicker__item"></div>
              <div className="flicker__item"></div>
              <div className="flicker__item"></div>
              <div className="flicker__item"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-conteiner">
            <div className="footer-bottom-conteiner__text">
              <p>Ux Atik © 2018 All Rights Reserved.</p>
            </div>
            <div className="footer-bottom-conteiner__social">
              <div className="socil-icon">
                <ul>
                  <li>
                    <a href="/#">
                      {" "}
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/#">
                      <i className="fab fa-vimeo-v"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/#">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/#">
                      <i className="fab fa-pinterest"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
