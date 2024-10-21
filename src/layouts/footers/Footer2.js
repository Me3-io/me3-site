import { Link } from "react-router-dom";
import appData from "@data/app.json";
import { useEffect } from "react";
import ImageView from "@components/ImageView";
import { footerSticky } from "@common/utilits";

const Footer2 = () => {
  useEffect(() => {
    footerSticky();
  }, []);

  return (
    <>
      {/* Footer */}
      <footer className="me3-footer footer--white">
        <div className="footer--default">
          <div className="container">
            <div className="row gap-bottom-40">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                {/* Heading */}
                <div className="me3-heading">
                  <h2 className="me3-title-2">
                    <span>
                      Let’s Chat! Let’s Build Something <br />
                      Awesome Together
                    </span>
                  </h2>
                  <p>
                    <a href="/contact" className="me3-footer-lnk me3-lnk lnk--revert">
                      Lets Start Project
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="row gap-bottom-40">
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-2">
                {/* Logo */}
                <div className="me3-f-logo gap-bottom-40" style={{ maxWidth: "70px" }}>
                  <a href="/">
                    <img src={appData.footer.logo.image} alt={appData.footer.logo.alt} />
                  </a>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
                {/* Description */}
                <div className="me3-text">
                  From the moment our company was founded, we have helped our clients find exceptional solutions{" "}
                  <strong>for their businesses</strong>.
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 offset-lg-1">
                {/* Description */}
                <div className="me3-text">
                  <ul className="me3-footer-menu">
                    <li>
                      <a href="/services/service-1">
                        <span className="me3-lnk">Branding &#038; logo</span>
                      </a>
                    </li>
                    <li>
                      <a href="/services/service-2">
                        <span className="me3-lnk">Web design</span>
                      </a>
                    </li>
                    <li>
                      <a href="/services/service-3">
                        <span className="me3-lnk">Development Services</span>
                      </a>
                    </li>
                    <li>
                      <a href="/blog">
                        <span className="me3-lnk">Publications</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-2">
                {/* Description */}
                <div className="me3-text">
                  Baird House, 15-17 St Cross St <br />
                  London EC1N 8UW
                  <p>
                    <a className="me3-lnk" href="tel:+4402074302973" target="blank">
                      +44 (0) 20 7430 2973
                    </a>
                    <br />
                    <a className="me3-lnk" href="mailto:username@domain.com" target="blank">
                      username@domain.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 align-self-center">
                {/* Copyright */}
                <div className="copyright">
                  <div dangerouslySetInnerHTML={{ __html: appData.footer.copy }} />
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 align-right">
                {/* Social*/}
                <div className="me3-social-1 me3-social-active">
                  <ul>
                    {appData.social.map((item, key) => (
                      <li key={`fsocial-item-${key}`}>
                        <a
                          className="me3-social-link me3-hover-2"
                          href={item.link}
                          title={item.title}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className={item.icon} />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <ImageView />
    </>
  );
};
export default Footer2;
