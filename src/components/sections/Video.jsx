import { useEffect } from "react";
import Data from "@data/sections/video.json";
import { circleText } from "@common/utilits";

const VideoSection = () => {
  useEffect(() => {
    circleText();
  }, []);

  const clickedVideoButton = (e) => {
    e.preventDefault();

    e.target.parentNode.classList.add("active");
    let videoIframe = e.target.parentNode.querySelector(".js-video-iframe");
    let videoUrl = videoIframe.dataset.src;
    videoIframe.setAttribute("src", videoUrl);
  };

  return (
    <>
      {/* Me3 Video */}
      <section className="me3-section" id="dive" style={{ position: "relative", zIndex: 99999 }}>
        <div className="container">
          {/* video */}
          <div className="me3-video" data-me3-overlay data-me3-scroll>
            <div
              className="image"
              onClick={(e) => clickedVideoButton(e)}
              style={{ backgroundImage: "url(" + Data.bg_image + ")" }}
            />
            {/*<iframe
              className="js-video-iframe"
              allow="autoplay"
              data-src={"https://www.youtube.com/embed/" + Data.yt_video_id + "?showinfo=0&rel=0&autoplay=1"}
            />*/}

            <iframe
              className="js-video-iframe"
              data-src="https://player.vimeo.com/video/1011759662?h=1b4ce6d644&badge=0&autoplay=1&player_id=0&app_id=58479"
              allow="autoplay"
              title="Gacha Galaxy Sizzle Reel"
            ></iframe>

     
            <div className="play me3-circle-text" onClick={(e) => clickedVideoButton(e)}>
              <div className="arrow" />
              <div className="label me3-text-black me3-circle-text-label">{Data.label}</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VideoSection;
