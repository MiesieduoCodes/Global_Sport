"use client";
import { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import gsap from 'gsap';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import the news data
import newsData from '@/app/components/constants/news.json' assert { type: "json" };


// Install modules
SwiperCore.use([Navigation, Pagination]);

export default function News() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    // GSAP animation for the entire news section
    gsap.from(sectionRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power3.out'
    });
  }, []);

  return (
    <section ref={sectionRef} className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between gap-8">
          {/* Left Side – Section Header and Navigation Buttons */}
          <div className="w-full flex flex-col justify-between lg:w-2/5">
            <div className="text-center lg:text-left">
              <h2 className="text-4xl font-bold text-black leading-[3.25rem] mb-5">
                Latest <span className="text-blue-600">Football News</span>
              </h2>
              <p className="text-black mb-10 max-lg:max-w-xl max-lg:mx-auto">
                Stay updated with the most exciting news from the world of football.
                From match highlights to transfer buzz – we’ve got you covered.
              </p>
              <a
                href="#"
                className="cursor-pointer border border-black shadow-sm rounded-full py-3.5 px-7 w-52 lg:mx-0 mx-auto flex justify-center text-black font-semibold transition-all duration-300 hover:bg-white"
              >
                View All
              </a>
            </div>
            {/* Slider Navigation Controls */}
            <div className="flex items-center justify-center lg:justify-start mt-8 gap-8 mb-4">
              <button
                ref={prevRef}
                className="swiper-button-prev group flex justify-center items-center border border-solid border-blue-600 w-11 h-11 transition-all duration-500 rounded-full hover:bg-blue-600"
              >
                <svg
                  className="h-6 w-6 text-blue-600 group-hover:text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 12H5M10 6l-5 6 5 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                ref={nextRef}
                className="swiper-button-next group flex justify-center items-center border border-solid border-blue-600 w-11 h-11 transition-all duration-500 rounded-full hover:bg-blue-600"
              >
                <svg
                  className="h-6 w-6 text-blue-600 group-hover:text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 12h16M14 18l5-6-5-6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Side – Swiper Slider */}
          <div className="w-full lg:w-3/5">
            <Swiper
              slidesPerView={2}
              spaceBetween={28}
              loop={true}
              pagination={{ clickable: true }}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              onBeforeInit={(swiper) => {
                // Assign refs to navigation before initialization.
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }}
              breakpoints={{
                0: { slidesPerView: 1, spaceBetween: 20 },
                568: { slidesPerView: 2, spaceBetween: 28 },
                768: { slidesPerView: 2, spaceBetween: 28 },
                1024: { slidesPerView: 2, spaceBetween: 32 }
              }}
              className="mySwiper"
            >
              {newsData.news.map((item, index) => (
                <SwiperSlide key={index} className="w-full max-lg:max-w-xl lg:w-1/2 group">
                  <div className="flex items-center mb-9">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="rounded-2xl w-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl text-black font-medium leading-8 mb-4 group-hover:text-blue-600">
                    {item.title}
                  </h3>
                  <p className="text-black leading-6 transition-all duration-500 mb-8">
                    {item.description}
                  </p>
                  <a
                    href={item.link}
                    className="cursor-pointer flex items-center gap-2 text-lg text-blue-700 font-semibold"
                  >
                    Read more
                    <svg
                      width="15"
                      height="12"
                      viewBox="0 0 15 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.25 6L13.25 6M9.5 10.5L13.4697 6.53033C13.7197 6.28033 13.8447 6.15533 13.8447 6C13.8447 5.84467 13.7197 5.71967 13.4697 5.46967L9.5 1.5"
                        stroke="#0000FF"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
