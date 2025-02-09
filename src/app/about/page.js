"use client";
import { useEffect } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { Swiper as SwiperType } from "swiper";
import "swiper/css";

const SwiperReact = dynamic(() => import("swiper/react"), { ssr: false });

const links = [
  { name: "Academy Trials", href: "#" },
  { name: "Season Tickets", href: "#" },
  { name: "Our Club History", href: "/clubhistory" },
  { name: "Meet Our Management", href: "/administration" },
];

const stats = [
  { name: "League Titles", value: "15" },
  { name: "First Team Players", value: "25" },
  { name: "Training Hours Per Week", value: "30+" },
  { name: "Global Fanbase", value: "10M+" },
];

const testimonials = [
  {
    text: "City FC has transformed my career. The team's professionalism and support are unmatched in the league.",
    name: "Lionel Torres",
    role: "Striker",
    img: "https://placehold.co/100x100?text=LT",
  },
  {
    text: "The atmosphere at our home stadium is electric. Our fans are truly the 12th player on the pitch!",
    name: "Marcus Kane",
    role: "Midfielder",
    img: "https://placehold.co/100x100?text=MK",
  },
  {
    text: "Training with world-class facilities and coaches has taken my game to the next level. Glory to City FC!",
    name: "Andre Silva",
    role: "Defender",
    img: "https://placehold.co/100x100?text=AS",
  },
  {
    text: "Wearing the City FC badge is an honor. The club's history and values inspire us to push harder every match.",
    name: "Coach Eriksson",
    role: "Manager",
    img: "https://placehold.co/100x100?text=CE",
  },
];

const legends = [
  { name: "David Hunter", role: "Legendary Captain", img: "https://placehold.co/100x100?text=DH" },
  { name: "Michael Rios", role: "All-Time Top Scorer", img: "https://placehold.co/100x100?text=MR" },
  { name: "Carlos Mendes", role: "Iconic Goalkeeper", img: "https://placehold.co/100x100?text=CM" },
];

export default function JoinOurTeam() {
  useEffect(() => {
    const initializeSwiper = async () => {
      const Swiper = (await import("swiper")).default;
      new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 28,
        centeredSlides: true,
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
          0: { slidesPerView: 1, centeredSlides: false },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        },
      });
    };
    initializeSwiper();
  }, []);

  return (
    <div className="relative isolate overflow-hidden bg-white text-black dark:bg-black dark:text-white transition-colors duration-300 py-24 sm:py-32">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-blue-200 dark:bg-blue-900 opacity-70 transition-colors duration-300"></div>
        <Image
          alt="Football stadium background"
          src="/stadium.jpg"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-5xl font-bold tracking-tight sm:text-7xl">
            Join Our Team
          </h2>
          <p className="mt-8 text-lg text-gray-600 dark:text-gray-300 sm:text-xl">
            Football is more than just a game—it&apos;s a passion, a legacy, and a way of life. Join us and become part of something great!
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-6">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-semibold text-white dark:text-black bg-blue-600 dark:bg-yellow-400 px-6 py-3 rounded-lg hover:bg-blue-500 dark:hover:bg-yellow-300 transition-all"
            >
              {link.name} →
            </a>
          ))}
        </div>

        {/* Stats Section */}
        <dl className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.name} className="text-center">
              <dd className="text-4xl font-bold text-black dark:text-white">{stat.value}</dd>
              <dt className="text-gray-600 dark:text-gray-300">{stat.name}</dt>
            </div>
          ))}
        </dl>
      </div>

      {/* Legends Section */}
      <section className="mt-20 text-center">
        <h2 className="text-4xl font-bold">Meet Our Legends</h2>
        <div className="flex justify-center gap-10 mt-10">
          {legends.map((legend) => (
            <div key={legend.name} className="text-center">
              <img className="w-24 h-24 rounded-full" src={legend.img} alt={legend.name} />
              <h4 className="mt-4 font-semibold">{legend.name}</h4>
              <p className="text-gray-600 dark:text-gray-400">{legend.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="mt-20">
        <h2 className="text-center text-4xl font-bold">Fan & Player Testimonials</h2>
        <div className="swiper mySwiper mx-auto mt-10 max-w-7xl">
          <div className="swiper-wrapper">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="swiper-slide bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-lg transition-colors duration-300">
                <p className="mb-6 text-lg">&quot;{testimonial.text}&quot;</p>
                <div className="flex items-center gap-4">
                  <img className="w-14 h-14 rounded-full" src={testimonial.img} alt={testimonial.name} />
                  <div>
                    <h5 className="font-semibold">{testimonial.name}</h5>
                    <span className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
