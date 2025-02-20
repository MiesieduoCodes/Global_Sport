"use client";
import React, { useRef, useState, useEffect } from "react";

const VideoPlayer = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(1);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const time = videoRef.current.currentTime;
    setCurrentTime(time);
    if (duration) setProgress((time / duration) * 100);
  };

  const handleLoadedData = () => {
    if (videoRef.current) setDuration(videoRef.current.duration);
  };

  const handleProgressChange = (e) => {
    const newProgress = e.target.value;
    if (videoRef.current) {
      videoRef.current.currentTime = (newProgress / 100) * duration;
      setProgress(newProgress);
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    if (videoRef.current) {
      videoRef.current.volume = newVolume;
      setVolume(newVolume);
    }
  };

  const toggleFullscreen = () => {
    if (!videoRef.current) return;
    if (!document.fullscreenElement) {
      videoRef.current.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60) || 0;
    const seconds = Math.floor(time % 60) || 0;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <div className="relative">
        {/* The video element without default controls */}
        <video
          ref={videoRef}
          src="/videos/sample.mp4"
          className="w-full rounded-lg shadow-xl"
          onTimeUpdate={handleTimeUpdate}
          onLoadedData={handleLoadedData}
        />
        {/* Custom Controls */}
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 px-4 py-2 flex flex-col space-y-2">
          {/* Progress Bar */}
          <input
            type="range"
            min="0"
            max="100"
            value={progress}
            onChange={handleProgressChange}
            className="w-full accent-yellow-400"
          />
          <div className="flex items-center justify-between">
            <button onClick={togglePlay} className="focus:outline-none">
              {isPlaying ? (
                <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 4h4v16H6zm8 0h4v16h-4z" />
                </svg>
              ) : (
                <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </button>
            <div className="text-sm text-white">
              {formatTime(currentTime)} / {formatTime(duration)}
            </div>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={handleVolumeChange}
              className="w-24 accent-blue-500"
            />
            <button onClick={toggleFullscreen} className="focus:outline-none">
              <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7 14H5v5h5v-2H7v-3zm0-4h2V7h3V5H7v5zm10 9h-3v2h5v-5h-2v3zm-3-9h3V5h-5v2h3v3z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const VideoPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center transition-colors duration-300 bg-white dark:bg-black">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-extrabold text-blue-500 dark:text-yellow-300">
          Custom Video Player
        </h1>
        <p className="mt-2 text-lg text-black dark:text-white">
          Enjoy our stylish player with unique controls.
        </p>
      </header>
      <main>
        <VideoPlayer />
      </main>
    </div>
  );
};

export default VideoPage;
