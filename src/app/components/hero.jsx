"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/app/context/LanguageContext";

const translations = {
  en: [
    {
      title: "Feel the Passion of Football",
      text: "Experience the thrill of every match, every goal, every moment.",
      buttonText: "Join the Game",
    },
    {
      title: "Legends Are Made Here",
      text: "Follow the journey of football icons and rising stars.",
      buttonText: "Discover More",
    },
    {
      title: "Every Kick Counts",
      text: "From local pitches to world championships, football unites us all.",
      buttonText: "Be Part of It",
    },
  ],
  ru: [
    {
      title: "Почувствуйте страсть футбола",
      text: "Ощутите азарт каждого матча, каждого гола, каждого момента.",
      buttonText: "Присоединяйтесь к игре",
    },
    {
      title: "Легенды рождаются здесь",
      text: "Следите за путешествием футбольных икон и восходящих звезд.",
      buttonText: "Узнать больше",
    },
    {
      title: "Каждый удар имеет значение",
      text: "От местных полей до мировых чемпионатов, футбол объединяет нас всех.",
      buttonText: "Будьте частью",
    },
  ],
  fr: [
    {
      title: "Ressentez la passion du football",
      text: "Vivez l'excitation de chaque match, chaque but, chaque moment.",
      buttonText: "Rejoignez le jeu",
    },
    {
      title: "Les légendes naissent ici",
      text: "Suivez le parcours des icônes du football et des étoiles montantes.",
      buttonText: "Découvrir plus",
    },
    {
      title: "Chaque coup compte",
      text: "Des terrains locaux aux championnats du monde, le football nous unit tous.",
      buttonText: "Faites-en partie",
    },
  ],
  es: [
    {
      title: "Siente la pasión del fútbol",
      text: "Vive la emoción de cada partido, cada gol, cada momento.",
      buttonText: "Únete al juego",
    },
    {
      title: "Las leyendas nacen aquí",
      text: "Sigue el viaje de los íconos del fútbol y las estrellas emergentes.",
      buttonText: "Descubre más",
    },
    {
      title: "Cada golpe cuenta",
      text: "Desde los campos locales hasta los campeonatos mundiales, el fútbol nos une a todos.",
      buttonText: "Sé parte de ello",
    },
  ],
};

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { language } = useLanguage();
  const slides = translations[language];
  
  // Dynamic images from your storage
  const images = [
    "/images/IMG-20250219-WA0077.jpg",
    "/images/IMG-20250219-WA0099.jpg",
    "/images/IMG-20250219-WA0069.jpg",
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
          style={{
            backgroundImage: `url(${images[currentSlide]})`,
          }}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />

          {/* Content Container */}
          <div className="relative h-full flex flex-col justify-center items-center text-center px-4">
            <motion.div
              className="max-w-4xl w-full px-4 lg:px-8"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-xl">
                {slides[currentSlide].title}
              </h1>

              <motion.p
                className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto drop-shadow-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {slides[currentSlide].text}
              </motion.p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-yellow-400 text-black px-8 py-3 rounded-full text-lg md:text-xl font-semibold hover:bg-yellow-300 transition-colors shadow-lg"
              >
                {slides[currentSlide].buttonText}
              </motion.button>
            </motion.div>

            {/* Slide Indicators */}
            <div className="absolute bottom-8 flex space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    currentSlide === index ? "bg-yellow-400" : "bg-white/50"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default Hero;