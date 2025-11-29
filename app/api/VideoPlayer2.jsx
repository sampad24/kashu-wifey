"use client"
import React, { useRef, useState } from 'react';

const VideoPlayer = () => {
  return (
    <div>
      <video
        src="/videos/hero-video.mp4"
        muted
        autoPlay
        loop
        playsInline
        controls={false}
        disablePictureInPicture
        className=""
      />
    </div>
  );
};

export default VideoPlayer;
