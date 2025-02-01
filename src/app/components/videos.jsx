"use client";
import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import videosdata from '@/app/components/constants/videos.json';

export default function VideoCarousel() {
  const [videos, setVideos] = useState([]);
  const carouselRef = useRef(null);

  useEffect(() => {
    // Directly setting the imported videos data
    setVideos(videosdata);
  }, []);

  return (
    <div className="relative w-full overflow-hidden py-12 bg-black">
      <h2 className="text-3xl font-bold text-yellow-400 text-center mb-6">
        Highlights & Replays
      </h2>

      <motion.div
        ref={carouselRef}
        className="flex space-x-6  cursor-grab no-scrollbar p-4"
        drag="x"
        dragConstraints={{ right: 0, left: -800 }}  // Increased drag area to the left
        whileTap={{ cursor: "grabbing" }}
      >
        {videos.map((video, index) => (
          <motion.div
            key={index}
            className="relative w-[250px] h-[350px] md:w-[300px] md:h-[400px] flex-shrink-0 rounded-xl overflow-hidden bg-gray-900"
          >
            <div className="group relative w-full h-full">
              {/* Thumbnail */}
              <Image
                src={video.thumbnail}
                alt={video.title}
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
              
              {/* Overlay with Text and Link */}
              <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-blue-700 via-transparent to-transparent text-white text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <a href={video.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  {video.title}
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
