import React, { useRef, useState, useEffect } from "react";
import "./Playvideo.css";
import video from "../../../assets/Playvideo.mp4";

const Playvideo = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Handle touch devices better
  const handleTouch = (e) => {
    e.preventDefault();
    togglePlay();
  };

  return (
    <section 
      className="home-playvideo section"
      onClick={togglePlay}
      onTouchEnd={isMobile ? handleTouch : undefined}
    >
      <video 
        ref={videoRef}
        loop
        muted
        playsInline // Important for mobile Safari
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      <div className="video-overlay"></div>
      
      {!isPlaying ? (
        <div 
          className="video-control-button custom-play-button"
          onClick={e => e.stopPropagation()}
          onTouchEnd={e => {
            e.stopPropagation();
            togglePlay();
          }}
        />
      ) : (
        <div 
          className="video-control-button custom-pause-button"
          onClick={e => e.stopPropagation()}
          onTouchEnd={e => {
            e.stopPropagation();
            togglePlay();
          }}
        />
      )}
    </section>
  );
};

export default Playvideo;