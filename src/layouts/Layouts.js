import { useEffect } from "react";
import appData from "@data/app.json";
import Footer from "./footers/Index";
import Header from "./headers/Index";
import Preloader from "./Preloader";

const Layouts = ({ children, header, footer, noHeader, noFooter, darkHeader, cartButton }) => {
  useEffect(() => {
    // preloader
    if (typeof window !== "undefined") {
      document.querySelector("body").classList.remove("me3--noscroll");
      const loader = document.getElementsByClassName("preloader");

      if (loader[0] && appData.settings.preloader) {
        setTimeout(function () {
          loader[0]?.classList.add("closed");
          document?.querySelector("body").classList.add("animated--swiper--active");
          loader[0].querySelector(".preloader__spinner").style.opacity = 0;
        }, 500);
        setTimeout(function () {
          loader[0]?.classList.add("loaded");
          document?.querySelector("body").classList.add("animated--active");
        }, 1500);
      } else {
        loader[0].classList.add("loaded");
        document?.querySelector("body").classList.add("animated--swiper--active");
        document?.querySelector("body").classList.add("animated--active");
      }
    }
  }, []);

  return (
    <>
      <div className="me3-page">
        <Preloader />

        {!noHeader && <Header header={header} />}

        {/* Wrapper */}
        <div className="wrapper">{children}</div>

        <Footer footer={footer} />
      </div>
    </>
  );
};
export default Layouts;
