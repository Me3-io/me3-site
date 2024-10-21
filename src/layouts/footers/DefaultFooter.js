import { Link } from "react-router-dom";
import appData from "@data/app.json";
import ImageView from "@components/ImageView";

//import { useEffect } from "react";
//import { footerSticky } from "@common/utilits";

const DefaultFooter = () => {
  /*useEffect(() => {
    footerSticky();
  }, []);*/

  return (
    <>
      {/* Footer */}
      <footer className="me3-footer footer--dark">
        <div className="footer--default">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 align-self-center">
                {/* Copyright */}

                <img src="/images/logo.webp" alt="footer logo" className="mobile footer-logo" width="120px" />

                <div className="footer-links">
                  <img src="/images/logo.webp" alt="footer logo" className="hidemobile footer-logo" width="120px" />

                  <a href="https://help.me3.io/en/articles/9245378-terms-of-use" className="me3-text-white">
                    Terms of Use
                  </a>
                  <a href="https://help.me3.io/en/articles/9245363-privacy-policy" className="me3-text-white">
                    Privacy Policy
                  </a>
                  <a
                    href="https://help.me3.io/en/articles/9245321-risk-disclaimers-disclosures"
                    className="me3-text-white"
                  >
                    Risk Disclaimers & Disclosure
                  </a>
                </div>

                {/* Images and Links */}
                <div className="footer-images-links">
                  <div className="footer-images">
                    <a href="https://assuredefi.com/projects/me3/">
                      <img src="/images/footer1.svg" alt="footer logo" className="footer-image" />
                    </a>
                    <a href="https://github.com/0xGuard-com/audit-reports/blob/master/Me3/Me3.pdf">
                      <img src="/images/footer2.webp" alt="footer img" className="footer-image" />
                    </a>
                    <a href="https://bscscan.com/token/0x42b4daa9210102707373f4618852f926a4150277">
                      <img src="/images/footer3.svg" alt="footer img" className="footer-image" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 align-right">
                {/* Social Icons */}
                <div className="footer-social-icons">
                  <a href="https://x.com/Me3Labs">
                    <img src="/images/x.svg" alt="footer img" className="footer-image" />
                  </a>
                  <a href="https://t.me/Me3Official">
                    <img src="/images/telegram.svg" alt="footer img" className="footer-image" />
                  </a>
                  <a href="https://discord.com/invite/jDQYXyHzKX">
                    <img src="/images/discord.svg" alt="footer img" className="footer-image" />
                  </a>
                  <a href="https://help.me3.io/">
                    <img src="/images/help.svg" alt="footer img" className="footer-image" />
                  </a>
                  <a hred="https://github.com/Me3-io">
                    <img src="/images/github.svg" alt="footer img" className="footer-image" />
                  </a>
                  <a href="https://www.youtube.com/@Me3Labs">
                    <img src="/images/youtube.svg" alt="footer img" className="footer-image" />
                  </a>
                  <a href="mailto:info@me3.io">
                    <img src="/images/mail.svg" alt="footer img" className="footer-image" />
                  </a>

                  {/* Add more social icons as needed */}
                </div>
                <div className="copyright me3-text-white">
                  <div dangerouslySetInnerHTML={{ __html: appData.footer.copy }} />
                </div>
              </div>
            </div>

            <div className="separator"></div>
          </div>
        </div>
      </footer>

      <ImageView />
    </>
  );
};

export default DefaultFooter;
