"use client";
import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import videosdata from "@/app/components/constants/videos.json";
import { useLanguage } from "@/app/context/LanguageContext";

const translations = {
  en: {
    highlightsTitle: "Highlights & Replays",
  },
  ru: {
    highlightsTitle: "Лучшие моменты и повторы",
  },
  fr: {
    highlightsTitle: "Meilleurs Moments & Replays",
  },
  es: {
    highlightsTitle: "Destacados y Repeticiones",
  },
};

export default function VideoCarousel() {
  const [videos, setVideos] = useState([]);
  const carouselRef = useRef(null);
  const { language } = useLanguage();
  const content = translations[language] || translations.en; // Default to English

  useEffect(() => {
    setVideos(videosdata);
  }, []);

  return (
    <div className="relative w-full overflow-hidden py-12 bg-white dark:bg-black">
      <h2 className="text-3xl font-bold text-blue-600 dark:text-yellow-400 text-center mb-6">
        {content.highlightsTitle}
      </h2>

      <motion.div
        ref={carouselRef}
        className="flex space-x-6 cursor-grab no-scrollbar p-4"
        drag="x"
        dragConstraints={{ right: 0, left: -800 }}
        whileTap={{ cursor: "grabbing" }}
      >
        {videos.map((video, index) => (
          <motion.div
            key={index}
            className="relative w-[250px] h-[350px] md:w-[300px] md:h-[400px] flex-shrink-0 rounded-xl overflow-hidden bg-gray-900 dark:bg-gray-800"
          >
            <div className="group relative w-full h-full">
              {/* Top Left Date Text */}
              <div className="absolute top-0 left-0 m-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-sm font-bold">
                {video.date}
              </div>

              {/* Thumbnail */}
              <Image
                src={video.thumbnail}
                alt={video.title[language] || video.title.en} // Access title based on current language
                layout="fill"
                objectFit="cover"
                className="transition-opacity duration-500 group-hover:opacity-0"
              />

              {/* GIF Preview on Hover */}
              <video
                src={video.src}
                className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                loop
                muted
                playsInline
              />

              {/* Overlay with Text and Link on Hover */}
              <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-blue-700 dark:from-yellow-500 via-transparent to-transparent text-white text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <a
                  href={video.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {video.title[language] || video.title.en} {/* Access title based on current language */}
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}