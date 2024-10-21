import React from "react";
import styles from "./HudOverlay.module.css";

const HudOverlay = () => {
  return (
    <div className={styles.overlay}>
      <img src="/images/hud.gif" alt="HUD" className={styles.hudImage} />
    </div>
  );
};

export default HudOverlay;
