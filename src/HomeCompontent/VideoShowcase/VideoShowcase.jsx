
import React from "react";
import "./VideoShowcase.css";
import video from '../../assets/home/video.mp4'
const VideoShowcase = () => {
  return (
    <section className="zia-video-section">
      <div className="zia-video-container">

        <div className="zia-video-heading">
          <span>INSIDE ZIADENT</span>
          <h2>Precision in Every Restoration</h2>
          <p>
            Discover the technology, craftsmanship and care
            behind our dental restorations.
          </p>
        </div>

        <div className="zia-video-frame">
          <video
            controls
            muted
            playsInline
            preload="metadata"
            poster="/images/video-poster.jpg"
          >
            <source
              src={video}
              type="video/mp4"
            />
            Your browser does not support video playback.
          </video>
        </div>

      </div>
    </section>
  );
};

export default VideoShowcase;
