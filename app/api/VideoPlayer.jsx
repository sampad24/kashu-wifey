"use client"
import React, { useRef, useState, useEffect } from 'react';
import Video from 'next-video';
import HomeVideo from "@/videos/hero-video.mp4"

const VideoPlayer = () => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const [volume, setVolume] = useState(0.5);

  const scrollTimeoutRef = useRef(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    if (videoRef.current) {
      videoRef.current.volume = newVolume;
      setVolume(newVolume);
      if (isMuted) {
        videoRef.current.muted = false;
        setIsMuted(false);
      }
    }
  };

  // 🔥 AUTO-MUTE ON SCROLL + AUTO-UNMUTE AFTER STOP
  useEffect(() => {
    const handleScroll = () => {
      if (!videoRef.current) return;

      // Mute immediately while scrolling
      videoRef.current.muted = true;
      setIsMuted(true);

      // Clear previous timeout so unmute does not trigger too early
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      // After scrolling stops (1.5 sec), unmute automatically
      scrollTimeoutRef.current = setTimeout(() => {
        videoRef.current.muted = false;
        setIsMuted(false);
      }, 1500);  // <-- adjust delay here
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);
  // 🔥 END

  return (
    <div>
      <Video
        src= {HomeVideo}
        ref={videoRef}
        autoPlay
        loop
        playsInline
        controls={false}
        className="video-background"
        muted={isMuted}
        />

      <div className=" volume-btn space-x-4">
        <input
          type="range"
          min="0"
          max="1"
          step="0.1"
          value={volume}
          onChange={handleVolumeChange}
          disabled={isMuted}
        />
        <button
          onClick={toggleMute}
          className=" px-4 py-2 rounded-xl"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-volume-up" viewBox="0 0 16 16">
            <path d="M11.536 14.01A8.47 8.47 0 0 0 14.026 8a8.47 8.47 0 0 0-2.49-6.01l-.708.707A7.48 7.48 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303z" />
            <path d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.48 5.48 0 0 1 11.025 8a5.48 5.48 0 0 1-1.61 3.89z" />
            <path d="M10.025 8a4.5 4.5 0 0 1-1.318 3.182L8 10.475A3.5 3.5 0 0 0 9.025 8c0-.966-.392-1.841-1.025-2.475l.707-.707A4.5 4.5 0 0 1 10.025 8M7 4a.5.5 0 0 0-.812-.39L3.825 5.5H1.5A.5.5 0 0 0 1 6v4a.5.5 0 0 0 .5.5h2.325l2.363 1.89A.5.5 0 0 0 7 12zM4.312 6.39 6 5.04v5.92L4.312 9.61A.5.5 0 0 0 4 9.5H2v-3h2a.5.5 0 0 0 .312-.11" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default VideoPlayer;
