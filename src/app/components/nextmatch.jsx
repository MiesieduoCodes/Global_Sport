"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

export default function NextMatch() {
  const headerRef = useRef(null);
  const teamsRef = useRef(null);
  const detailsRef = useRef(null);

  useEffect(() => {
    gsap.from(headerRef.current, { opacity: 0, y: -30 });
    gsap.from(teamsRef.current, { opacity: 0, x: -30 }, "-=0.5");
    gsap.from(detailsRef.current, { opacity: 0, x: 30 }, "-=0.5");
  }, []);

  return (
    <section className="bg-white text-black dark:bg-gray-900 dark:text-white py-4 text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-blue-600 dark:text-yellow-400">
          Next Match
        </h2>
        <div className="flex md:flex-row justify-around items-center gap-8">
          <div ref={teamsRef} className="flex-1 flex flex-row justify-center items-center gap-6">
            <Image src="/path-to-team1-logo.png" width={100} height={100} className="rounded-full" />
            <p className="font-semibold text-lg">Team 1</p>
            <div className="text-2xl font-bold">VS</div>
            <Image src="/path-to-team2-logo.png" alt="teampic" width={100} height={100} className="rounded-full" />
            <p className="font-semibold text-lg">Team 2</p>
          </div>
        </div>
      </div>
    </section>
  );
}
