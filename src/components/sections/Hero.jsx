import { useState } from "react";
import styles from "../HudOverlay.module.css";
import Data from "@data/sections/hero.json";

const HeroSection = () => {
  const [mute, setMute] = useState(false);

  const clickedMuteHeroVideo = (e) => {
    e.preventDefault();
    setMute(!mute);
  };

  return (
    <>
      {/* Me3 Hero */}
      <section className="me3-section me3-hero" id="home">
        <div className={styles.overlay}>
          <img src="/images/hud.gif" alt="HUD" className={styles.hudImage} />
        </div>
        <div className="image">
          <video autoPlay muted={!mute} loop playsInline id="heroVideo">
            <source src={Data.mp4} type="video/mp4" />
          </video>
        </div>
        <div className="container">
          <h1 className="title me3-text-white">{Data.title.text}</h1>

          <a href="#" className={mute ? "me3-play-btn active" : "me3-play-btn"} onClick={clickedMuteHeroVideo}>
            <span className="play-circles" />
            <span className="play-lines">
              <span />
              <span />
              <span />
              <span />
            </span>
          </a>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
