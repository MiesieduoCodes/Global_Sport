"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

export default function NextMatch() {
  // Refs for each section
  const headerRef = useRef(null);
  const teamsRef = useRef(null);
  const detailsRef = useRef(null);

  useEffect(() => {
    // Create a GSAP timeline for a staggered entrance effect.
    const tl = gsap.timeline({ defaults: { duration: 0.8, ease: "power3.out" } });
    tl.from(headerRef.current, { opacity: 0, y: -30 })
      .from(teamsRef.current, { opacity: 0, x: -30 }, "-=0.5")
      .from(detailsRef.current, { opacity: 0, x: 30 }, "-=0.5");
  }, []);

  return (
    <section className="bg-white py-4 text-center text-black">
      <div className="container mx-auto px-4">
        {/* Main container with 3 sections in a straight line */}
        <div className="flex md:flex-row justify-around items-center gap-8">
          {/* Section 1: Next Match Text */}
          <div ref={headerRef} className="flex-1">
            <h2 className="text-3xl font-bold text-blue-600">Next Match</h2>
          </div>

          {/* Section 2: Teams */}
          <div ref={teamsRef} className="flex-1 flex flex-row justify-center items-center gap-6">
            {/* Team 1 */}
            <div className="flex items-center">
              <Image
                src="/path-to-team1-logo.png"
                alt="Team 1 Logo"
                width={100}
                height={100}
                className="rounded-full border-4 border-green-500"
              />
              <p className="font-semibold text-lg mt-2">Team 1</p>
            </div>

            {/* VS Text */}
            <div className="text-2xl font-bold text-black">VS</div>

            {/* Team 2 */}
            <div className="flex items-center">
              <Image
                src="/path-to-team2-logo.png"
                alt="Team 2 Logo"
                width={100}
                height={100}
                className="rounded-full border-4 border-green-500"
              />
              <p className="font-semibold text-lg mt-2">Team 2</p>
            </div>
          </div>

          {/* Section 3: Match Details */}
          <div ref={detailsRef} className="flex-1">
            <div className="flex flex-col items-center">
              <p className="text-lg font-medium text-black">
                <span className="font-bold text-blue-600">Time:</span> 18:00
              </p>
              <p className="text-lg font-medium text-black">
                <span className="font-bold text-green-600">Venue:</span> Stadium Name
              </p>
            </div>
          </div>
        </div>

        {/* Call-to-action button below the row */}
        <div className="mt-6">
          <a href="/contact">
            <button className="bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700 transition duration-300">
              Get Tickets
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
