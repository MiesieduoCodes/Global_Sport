"use client";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  useEffect(() => {
    // Entrance animation for each section
    gsap.fromTo(
      ".footer-section",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.3,
        scrollTrigger: {
          trigger: ".footer-section",
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, []);

  return (
    <div>
      <footer className="bg-black foot w-full upside animate-fade-in font-montserrat">
        <div className="mx-auto w-full max-w-screen-xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6 py-10 lg:py-12">
            {/* About Section */}
            <div className="footer-section">
              <h2 className="mb-6 text-sm font-semibold text-yellow-400 uppercase tracking-wide">
                About Global Sport International
              </h2>
              <ul className="text-white font-medium space-y-3">
                <li>
                  <a href="#" className="hover:text-yellow-400 transition">
                    Our Mission
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-400 transition">
                    Football News
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-400 transition">
                    Player Highlights
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-400 transition">
                    Upcoming Matches
                  </a>
                </li>
              </ul>
            </div>

            {/* Connect Section */}
            <div className="footer-section">
              <h2 className="mb-6 text-sm font-semibold text-yellow-400 uppercase tracking-wide">
                Follow Us
              </h2>
              <ul className="text-white font-medium space-y-3">
                <li>
                  <a href="#" className="hover:text-yellow-400 transition">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-400 transition">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-400 transition">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-yellow-400 transition">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal Section */}
            <div className="footer-section">
              <h2 className="mb-6 text-sm font-semibold text-yellow-400 uppercase tracking-wide">
                Legal
              </h2>
              <ul className="text-white font-medium space-y-3">
                <li>
                  <a href="#" className="hover:text-yellow-400 transition">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-400 transition">
                    Licensing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-400 transition">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>

            {/* Newsletter Section */}
            <div className="footer-section">
              <h2 className="mb-6 text-sm font-semibold text-yellow-400 uppercase tracking-wide">
                Stay Updated
              </h2>
              <p className="text-white font-medium mb-4">
                Subscribe for the latest football news, match updates, and exclusive content.
              </p>
              <form>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full p-3 rounded-lg bg-white text-black placeholder-gray-500 mb-4 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <button
                  type="submit"
                  className="w-full py-3 bg-yellow-400 text-black rounded-lg hover:bg-white hover:text-black transition-all duration-300"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="py-6 text-center text-white text-sm">
            <p>&copy; 2025 Global Sport International. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
