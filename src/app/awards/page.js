"use client";

import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import awardsData from "@/app/components/constants/awards.json";

export default function Awards() {
  const [awards, setAwards] = useState([]);
  const awardRefs = useRef([]);

  useEffect(() => {
    setAwards(awardsData); // Directly set the imported JSON data

    // GSAP animation for each award card when the component mounts
    gsap.from(awardRefs.current, {
      opacity: 0,
      y: 50,
      stagger: 0.1,
      duration: 0.5,
      ease: "power2.out",
    });
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Football Awards and Achievements
        </h2>
        <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
          Here is a collection of prestigious awards and accolades won throughout my football career. These achievements reflect my dedication, skill, and contribution to the sport. Each award represents a significant milestone that motivates me to strive for excellence.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {awards.map((award, index) => (
            <div
              key={award.id}
              ref={(el) => (awardRefs.current[index] = el)} // Store reference to each award card
              className="group relative bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
            >
              <img
                alt={award.imageAlt}
                src={award.imageSrc}
                className="aspect-video w-full rounded-md object-cover group-hover:opacity-75"
              />
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{award.name}</h3>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{award.year}</p>
                <p className="mt-1 text-sm font-medium text-gray-800 dark:text-gray-300">
                  <strong>Match:</strong> {award.match}
                </p>
                <p className="mt-2 text-sm text-gray-700 dark:text-gray-400">{award.description}</p>
                <p className="mt-2 text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                  How it was won: {award.howItWasWon}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}