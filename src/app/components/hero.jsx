"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Feel the Passion of Football",
      text: "Experience the thrill of every match, every goal, every moment.",
      buttonText: "Join the Game",
      bgImage:
        "https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Football field
    },
    {
      title: "Legends Are Made Here",
      text: "Follow the journey of football icons and rising stars.",
      buttonText: "Discover More",
      bgImage:
        "https://images.pexels.com/photos/262524/pexels-photo-262524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Football stadium
    },
    {
      title: "Every Kick Counts",
      text: "From local pitches to world championships, football unites us all.",
      buttonText: "Be Part of It",
      bgImage:
        "https://images.pexels.com/photos/50713/football-ball-sport-soccer-50713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Football in motion
    },
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative flex justify-center items-center min-h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${slides[currentSlide].bgImage})` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>

          {/* Sliding Text */}
          <motion.div
            className="absolute bottom-10 left-10 max-w-md p-6 bg-black bg-opacity-80 rounded-lg text-white"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <h1 className="text-3xl md:text-4xl font-bold text-yellow-400">{slides[currentSlide].title}</h1>
            <p className="mt-3 text-lg">{slides[currentSlide].text}</p>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default Hero;
