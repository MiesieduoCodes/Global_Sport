"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const videos = [
  { src: "/videos/video1.mp4", thumbnail: "/images/thumb1.jpg", title: "Epic Goal Moments" },
  { src: "/videos/video2.mp4", thumbnail: "/images/thumb2.jpg", title: "Best Assists Compilation" },
  { src: "/videos/video3.mp4", thumbnail: "/images/thumb3.jpg", title: "Top Saves of the Year" },
  { src: "/videos/video4.mp4", thumbnail: "/images/thumb4.jpg", title: "Unbelievable Dribbles" },
  { src: "/videos/video5.mp4", thumbnail: "/images/thumb5.jpg", title: "Last-Minute Goals" },
  { src: "/videos/video6.mp4", thumbnail: "/images/thumb6.jpg", title: "Celebrations Gone Wild" },
];

export default function VideoCarousel() {
  const carouselRef = useRef(null);

  return (
    <div className="relative w-full overflow-hidden py-12 bg-black">
      <h2 className="text-3xl font-bold text-yellow-400 text-center mb-6">
        Highlights & Replays
      </h2>

      <motion.div
        ref={carouselRef}
        className="flex space-x-6 cursor-grab overflow-hidden no-scrollbar p-4"
        drag="x"
        dragConstraints={{ right: 0, left: -600 }}
        whileTap={{ cursor: "grabbing" }}
      >
        {videos.map((video, index) => (
          <motion.div
            key={index}
            className="relative w-[300px] h-[200px] md:w-[400px] md:h-[250px] flex-shrink-0 rounded-xl overflow-hidden bg-gray-900"
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
              
              {/* Overlay with Text */}
              <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-blue-700 via-transparent to-transparent text-white text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {video.title}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
