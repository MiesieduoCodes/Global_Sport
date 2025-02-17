"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

export default function NextMatch() {
  const headerRef = useRef(null);
  const teamsRef = useRef(null);
  const detailsRef = useRef(null);

  useEffect(() => {
    gsap.from(headerRef.current, { opacity: 0, y: -30, duration: 0.8 });
    gsap.from(teamsRef.current, {
      opacity: 0,
      scale: 0.9,
      duration: 0.8,
      delay: 0.3,
    });
  }, []);

  return (
    <section className="bg-white text-black dark:bg-gray-900 dark:text-white py-8">
      <div className="container mx-auto px-4 text-center">
        {/* Heading */}
        <h2
          ref={headerRef}
          className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-yellow-400 mb-6"
        >
          Next Match
        </h2>

        {/* Match Info */}
        <div
          ref={teamsRef}
          className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-12 p-4 sm:p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg"
        >
          {/* Team 1 */}
          <div className="flex flex-col items-center">
            <Image
              src="/path-to-team1-logo.png"
              width={60}
              height={60}
              className="rounded-full shadow-md"
              alt="Team 1 Logo"
            />
            <p className="font-semibold text-lg mt-2">Team 1</p>
          </div>

          {/* VS Text */}
          <div className="text-xl sm:text-2xl font-bold text-gray-700 dark:text-gray-300">
            VS
          </div>

          {/* Team 2 */}
          <div className="flex flex-col items-center">
            <Image
              src="/path-to-team2-logo.png"
              width={60}
              height={60}
              className="rounded-full shadow-md"
              alt="Team 2 Logo"
            />
            <p className="font-semibold text-lg mt-2">Team 2</p>
          </div>
        </div>
      </div>
    </section>
  );
}
