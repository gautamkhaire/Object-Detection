"use client";

import { useEffect, useRef } from "react";
import Webcam from "react-webcam";

const ObjectDetection = () => {
  const webcamRef = useRef(null);
  const showmyVideo = () => {
    if (
      webcamRef.current !== null &&
      webcamRef.current.video?.readyState === 4
    ) {
      const myVideoWidth = webcamRef.current.video.videoWidth;
      const myVideoHeight = webcamRef.current.video.videoHeight;

      webcamRef.current.video.videoWidth = myVideoWidth;
      webcamRef.current.video.videoHeight = myVideoHeight;
    }
  };

  useEffect(()=>{
    showmyVideo();
  },[]);
  
  return (
    <div className="mt-8">
      <div className="relative flex justify-center items-center gradient p-1.5 rounded-md">
        {/* webcam */}
        <Webcam
          ref={webcamRef}
          className="rounded-md w-full lg:h-[720px]"
          muted
        />
        {/* canvas */}
      </div>
    </div>
  );
};

export default ObjectDetection;
