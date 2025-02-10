// components/VideoPlayer.tsx
"use client";

import Spline from "@splinetool/react-spline";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function VideoPlayer({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isVideoPlayed, setIsVideoPlayed] = useState(false);
  const [shouldPlayVideo, setShouldPlayVideo] = useState(false);
  const [videoSrc, setVideoSrc] = useState("");
  const url = usePathname();

  useEffect(() => {
    // Define the URLs where the video should be played
    const videoUrls = ["/", "/magnitude"];
    if (videoUrls.includes(url)) {
      setShouldPlayVideo(true);
    } else {
      setIsVideoPlayed(true); // Skip video if not in the specified URLs
    }
  }, [url]);

  useEffect(() => {
    // Set video source based on screen size
    const updateVideoSrc = () => {
      if (window.innerWidth < 768) {
        setVideoSrc("/mobile2.mp4");
      } else {
        setVideoSrc("/loadingvideo.mp4");
      }
    };

    updateVideoSrc();
    window.addEventListener("resize", updateVideoSrc);

    return () => {
      window.removeEventListener("resize", updateVideoSrc);
    };
  }, []);

  setTimeout(() => {
    setIsVideoPlayed(true);
  }, 4000);

  return (
    <div className="relative">
      {!isVideoPlayed && shouldPlayVideo ? (
        <div className="absolute top-0 left-0 w-screen h-screen z-50">
          {/* <video
            src={videoSrc}
            autoPlay
            playsInline
            muted
            onEnded={handleVideoEnd}
            className="w-full h-full object-cover"
          /> */}
          <Spline scene="https://prod.spline.design/8TGjdX6NhTEH996U/scene.splinecode" />
        </div>
      ) : (
        children
      )}
    </div>
  );
}
