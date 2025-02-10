// components/VideoPlayer.js
import Spline from "@splinetool/react-spline";
import React, { useEffect, useRef, useState } from "react";

interface VideoPlayerProps {
  videoSrc: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoSrc }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.onended = () => {
        // Handle video end, e.g., navigate to the main page
        setIsLoading(false);
      };
    }
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 1000,
      }}
    >
      {isLoading && (
        <Spline scene="https://prod.spline.design/8TGjdX6NhTEH996U/scene.splinecode" />
      )}
    </div>
  );
};

export default VideoPlayer;
