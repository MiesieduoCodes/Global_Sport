"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import { motion } from "framer-motion";

const HeroSlider = () => {
  const slides = [
    {
      image: "/images/football1.jpg",
      text: "Experience the thrill of the game with the latest football news and updates.",
      link: "/news",
    },
    {
      image: "/images/football2.jpg",
      text: "Get insights into player stats, transfers, and performance analysis.",
      link: "/players",
    },
    {
      image: "/images/football3.jpg",
      text: "Stay ahead with upcoming match schedules and exclusive content.",
      link: "/matches",
    },
  ];

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        effect="fade"
        speed={1000}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative w-full h-full flex items-center justify-center">
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center p-6">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="text-center max-w-md bg-black bg-opacity-70 p-6 rounded-lg"
              >
                <p className="text-white text-lg sm:text-xl md:text-2xl font-semibold mb-4">{slide.text}</p>
                <a
                  href={slide.link}
                  className="text-yellow-400 hover:underline text-sm sm:text-base"
                >
                  Learn More
                </a>
              </motion.div>
            </div>
            <motion.img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 2, ease: "easeOut" }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSlider;