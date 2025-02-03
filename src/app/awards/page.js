"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";

const awards = [
  {
    title: "Best Innovation Award",
    description: "Recognizing groundbreaking achievements in technology.",
    image: "/images/award1.jpg",
  },
  {
    title: "Excellence in Design",
    description: "Honoring outstanding creativity and design prowess.",
    image: "/images/award2.jpg",
  },
  {
    title: "Community Impact Award",
    description: "Celebrating contributions that make a difference in society.",
    image: "/images/award3.jpg",
  },
];

export default function AwardsPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    const elements = containerRef.current.children;
    gsap.fromTo(
      elements,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, stagger: 0.3, duration: 1, ease: "power2.out" }
    );
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center py-12">
      <h2 className="text-4xl font-bold text-yellow-400 mb-8 text-center">
        Our Achievements
      </h2>
      <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {awards.map((award, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-xl shadow-lg text-center transform hover:scale-105 transition-transform duration-300">
            <div className="relative w-full h-48 mb-4">
              <Image src={award.image} alt={award.title} layout="fill" objectFit="cover" className="rounded-lg" />
            </div>
            <h3 className="text-2xl font-semibold text-yellow-400 mb-2">{award.title}</h3>
            <p className="text-gray-300">{award.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
