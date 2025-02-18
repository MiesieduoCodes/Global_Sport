"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import gsap from "gsap";
import { useTheme } from "next-themes";

const teamImages = [
  "/images/PlayerOne.jpg",
  "/images/FREEIMAGE.jpg",
  "/images/kneelingimage.jpg",
  "/images/Immages.jpg",
  "/images/Handsake.jpg",
  "/images/player6.jpg",
];

const people = [
  {
    name: "Lawrence Veria",
    role: "Head Coach",
    imageUrl: "/images/IMG-20250211-WA0166.jpg",
    bio: "With over 20 years of experience in international football, Lawrence has led teams to victory and inspired a new generation of talent.",
  },
  {
    name: "David Smith",
    role: "Assistant Coach",
    imageUrl: "/images/assistant_coach.jpg",
    bio: "David's innovative training methods and strategic mindset have been pivotal in fostering a culture of excellence and continuous improvement.",
  },
  {
    name: "Michael Brown",
    role: "Team Captain",
    imageUrl: "/images/captain.jpg",
    bio: "Michael leads by example both on and off the field, embodying the spirit and determination that drive our club's success.",
  },
];

export default function TeamPage() {
  const { theme } = useTheme();
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );
  }, []);

  return (
    <div
      className={theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}
    >
      {/* Team Section */}
      <section ref={sectionRef} className="py-16 md:py-24">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col lg:flex-row items-center justify-between gap-8 md:mt-16">
      {/* Text Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full lg:w-1/2 text-center lg:text-left"
      >
        <h2 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
          Meet Our Football Stars
        </h2>
        <p className="text-base sm:text-lg mb-8">
          Our players embody passion, skill, and determination on the pitch. With every match, they push the boundaries of excellence and inspire fans around the world.
        </p>
        <button className="cursor-pointer py-3 px-6 sm:px-8 bg-indigo-600 text-white font-semibold rounded-full hover:bg-indigo-700 transition duration-300 mx-auto lg:mx-0">
          <a href="/contact">Join the Squad</a>
        </button>
      </motion.div>

      {/* Image Grid */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-full lg:w-1/2 mt-16 md:mt-12 max-w-lg mx-auto"
      >
        <div className="grid grid-cols-2 gap-4 sm:gap-6 sm:grid-cols-3">
          {teamImages.map((src, index) => (
            <div key={index} className={`mx-auto ${index % 2 === 0 ? "sm:mt-10" : ""}`}>
              <Image
                src={src}
                alt={`Player ${index + 1}`}
                width={224}
                height={224}
                className="w-32 sm:w-44 h-40 sm:h-56 rounded-2xl object-cover"
              />
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </div>
      </section>


      {/* Leadership & Coaching Section */}
      <section className="py-24 sm:py-32 bg-white dark:bg-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Coaching & Leadership
            </h2>
            <p className="mt-6 text-lg">
              Our experienced coaching staff and leadership team ensure the success and growth of our football club.
            </p>
          </div>
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            role="list"
            className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          >
            {people.map((person) => (
              <li key={person.name} className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow-md">
                <div className="flex items-center gap-x-4 mb-4">
                  <Image
                    src={person.imageUrl}
                    alt={person.name}
                    width={64}
                    height={64}
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="text-base font-semibold">{person.name}</h3>
                    <p className="text-sm font-semibold text-indigo-600">{person.role}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">{person.bio}</p>
              </li>
            ))}
          </motion.ul>
        </div>
      </section>

      {/* History / Legacy Section */}
      <section className="py-24 bg-gray-100 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-4">Our Legacy</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Founded over 50 years ago, Global Sports FC began as a humble community initiative. Over the decades, the club evolved into a powerhouse of passion and performance, inspiring generations of football enthusiasts.
            </p>
            <p className="mt-6 text-lg text-gray-700 dark:text-gray-300">
              With unforgettable victories, legendary players, and a commitment to nurturing new talent, our history is not just about the past—it&apos;s a promise of excellence for the future.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
