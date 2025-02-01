"use client";
import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Install modules
SwiperCore.use([Navigation, Pagination]);

export default function News() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between gap-8">
          {/* Left Side – Section Header and Navigation Buttons */}
          <div className="w-full flex flex-col justify-between lg:w-2/5">
            <div className="text-center lg:text-left">
              <h2 className="text-4xl font-bold text-gray-900 leading-[3.25rem] mb-5">
                Latest <span className="text-indigo-600">Football News</span>
              </h2>
              <p className="text-gray-500 mb-10 max-lg:max-w-xl max-lg:mx-auto">
                Stay updated with the most exciting news from the world of football. From match highlights to transfer buzz – we’ve got you covered.
              </p>
              <a
                href="#"
                className="cursor-pointer border border-gray-300 shadow-sm rounded-full py-3.5 px-7 w-52 lg:mx-0 mx-auto flex justify-center text-gray-900 font-semibold transition-all duration-300 hover:bg-gray-100"
              >
                View All
              </a>
            </div>
            {/* Slider Navigation Controls */}
            <div className="flex items-center justify-center lg:justify-start mt-8 gap-8 mb-4">
              <button
                ref={prevRef}
                className="swiper-button-prev group flex justify-center items-center border border-solid border-indigo-600 w-11 h-11 transition-all duration-500 rounded-full hover:bg-indigo-600"
              >
                <svg
                  className="h-6 w-6 text-indigo-600 group-hover:text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.9999 12L4.99992 12M9.99992 6L4.70703 11.2929C4.3737 11.6262 4.20703 11.7929 4.20703 12C4.20703 12.2071 4.3737 12.3738 4.70703 12.7071L9.99992 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                ref={nextRef}
                className="swiper-button-next group flex justify-center items-center border border-solid border-indigo-600 w-11 h-11 transition-all duration-500 rounded-full hover:bg-indigo-600"
              >
                <svg
                  className="h-6 w-6 text-indigo-600 group-hover:text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 12L19 12M14 18L19.2929 12.7071C19.6262 12.3738 19.7929 12.2071 19.7929 12C19.7929 11.7929 19.6262 11.6262 19.2929 11.2929L14 6"
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
                // When using refs in Navigation, assign them before initialization.
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                568: {
                  slidesPerView: 2,
                  spaceBetween: 28,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 28,
                },
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 32,
                },
              }}
              className="mySwiper"
            >
              {/* Slide 1 */}
              <SwiperSlide className="w-full max-lg:max-w-xl lg:w-1/2 group">
                <div className="flex items-center mb-9">
                  <img
                    src="https://source.unsplash.com/featured/?football,match"
                    alt="Football Match"
                    className="rounded-2xl w-full object-cover"
                  />
                </div>
                <h3 className="text-xl text-gray-900 font-medium leading-8 mb-4 group-hover:text-indigo-600">
                  Barcelona Triumphs in a Classic El Clásico
                </h3>
                <p className="text-gray-500 leading-6 transition-all duration-500 mb-8">
                  In an exhilarating clash, Barcelona showcased top-notch skill and teamwork to defeat their fierce rivals.
                </p>
                <a
                  href="#"
                  className="cursor-pointer flex items-center gap-2 text-lg text-indigo-700 font-semibold"
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
                      stroke="#4338CA"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </SwiperSlide>

              {/* Slide 2 */}
              <SwiperSlide className="w-full max-lg:max-w-xl lg:w-1/2 group">
                <div className="flex items-center mb-9">
                  <img
                    src="https://source.unsplash.com/featured/?football,stadium"
                    alt="Football Stadium"
                    className="rounded-2xl w-full object-cover"
                  />
                </div>
                <h3 className="text-xl text-gray-900 font-medium leading-8 mb-4 group-hover:text-indigo-600">
                  Manchester United's New Signing Shakes Up the Squad
                </h3>
                <p className="text-gray-500 leading-6 transition-all duration-500 mb-8">
                  The Red Devils welcome a dynamic new talent as they prepare for a challenging season ahead.
                </p>
                <a
                  href="#"
                  className="cursor-pointer flex items-center gap-2 text-lg text-indigo-700 font-semibold"
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
                      stroke="#4338CA"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </SwiperSlide>

              {/* Slide 3 */}
              <SwiperSlide className="w-full max-lg:max-w-xl lg:w-1/2 group">
                <div className="flex items-center mb-9">
                  <img
                    src="https://source.unsplash.com/featured/?football,championsleague"
                    alt="Champions League"
                    className="rounded-2xl w-full object-cover"
                  />
                </div>
                <h3 className="text-xl text-gray-900 font-medium leading-8 mb-4 group-hover:text-indigo-600">
                  Champions League Finals: Clash of the Titans
                </h3>
                <p className="text-gray-500 leading-6 transition-all duration-500 mb-8">
                  Anticipation is building as two European giants prepare to face off in one of the most eagerly awaited matches of the season.
                </p>
                <a
                  href="#"
                  className="cursor-pointer flex items-center gap-2 text-lg text-indigo-700 font-semibold"
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
                      stroke="#4338CA"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </SwiperSlide>

              {/* Slide 4 */}
              <SwiperSlide className="w-full max-lg:max-w-xl lg:w-1/2 group">
                <div className="flex items-center mb-9">
                  <img
                    src="https://source.unsplash.com/featured/?football,premierleague"
                    alt="Premier League Highlights"
                    className="rounded-2xl w-full object-cover"
                  />
                </div>
                <h3 className="text-xl text-gray-900 font-medium leading-8 mb-4 group-hover:text-indigo-600">
                  Premier League Highlights: Week in Review
                </h3>
                <p className="text-gray-500 leading-6 transition-all duration-500 mb-8">
                  Catch up on the most dramatic moments, stunning goals, and key plays from this week’s Premier League action.
                </p>
                <a
                  href="#"
                  className="cursor-pointer flex items-center gap-2 text-lg text-indigo-700 font-semibold"
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
                      stroke="#4338CA"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
