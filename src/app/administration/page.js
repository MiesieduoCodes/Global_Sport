"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import gsap from "gsap";
import { useTheme } from "next-themes";

const teamImages = [
  "/images/player1.jpg",
  "/images/player2.jpg",
  "/images/player3.jpg",
  "/images/player4.jpg",
  "/images/player5.jpg",
  "/images/player6.jpg",
];

const people = [
  {
    name: "Alex Johnson",
    role: "Head Coach",
    imageUrl: "/images/coach.jpg",
  },
  {
    name: "David Smith",
    role: "Assistant Coach",
    imageUrl: "/images/assistant_coach.jpg",
  },
  {
    name: "Michael Brown",
    role: "Team Captain",
    imageUrl: "/images/captain.jpg",
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
    <div className={theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"}>
      {/* Team Section */}
      <section ref={sectionRef} className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center flex-col lg:flex-row md:mt-20">
            {/* Text Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/2"
            >
              <h2 className="text-5xl font-bold leading-[4rem] mb-7 text-center lg:text-left">
                Meet Our Football Stars
              </h2>
              <p className="text-lg mb-16 text-center lg:text-left">
                These talented players bring passion and skill to every match, representing our club with pride.
              </p>
              <button className="cursor-pointer py-3 px-8 w-60 bg-indigo-600 text-white font-semibold rounded-full hover:bg-indigo-700 transition mx-auto lg:mx-0">
                Join the Squad
              </button>
            </motion.div>

            {/* Image Grid */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/2 lg:mt-0 md:mt-40 mt-16 max-lg:max-w-2xl"
            >
              <div className="grid grid-cols-1 min-[450px]:grid-cols-2 md:grid-cols-3 gap-8">
                {teamImages.map((src, index) => (
                  <div key={index} className={`mx-auto ${index % 2 === 0 ? "md:mt-20" : ""}`}>
                    <Image
                      src={src}
                      alt={`Player ${index + 1}`}
                      width={176}
                      height={224}
                      className="w-44 h-56 rounded-2xl object-cover"
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="max-w-xl"
          >
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Coaching & Leadership
            </h2>
            <p className="mt-6 text-lg">
              Our experienced coaching staff and leadership team ensure the success and growth of our football club.
            </p>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            role="list"
            className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
          >
            {people.map((person) => (
              <li key={person.name}>
                <div className="flex items-center gap-x-6">
                  <Image
                    src={person.imageUrl}
                    alt={person.name}
                    width={64}
                    height={64}
                    className="size-16 rounded-full"
                  />
                  <div>
                    <h3 className="text-base font-semibold">{person.name}</h3>
                    <p className="text-sm font-semibold text-indigo-600">{person.role}</p>
                  </div>
                </div>
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </div>
  );
}
