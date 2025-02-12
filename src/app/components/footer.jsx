"use client";

import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import emailjs from "emailjs-com";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
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
    }
  }, []);

  const handleSubscribe = async (e) => {
    e.preventDefault();

    if (!email) {
      setStatus({ type: "error", message: "Please enter an email address." });
      return;
    }

    try {
      const response = await emailjs.send(
        "service_mofzwum",
        "template_ormpbz2",
        { user_email: email },
        "a1NybmXRcYdkYXTu6"
      );

      if (response.status === 200) {
        setStatus({ type: "success", message: "Subscription successful!" });
        setEmail(""); // Clear the input field
      }
    } catch (error) {
      setStatus({ type: "error", message: "Subscription failed. Try again later." });
    }
  };

  return (
    <div>
      <footer className="w-full bg-blue-900 text-white dark:bg-black dark:text-gray-200 transition-colors duration-300 font-montserrat">
        <div className="mx-auto w-full max-w-screen-xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6 py-10 lg:py-12">
            {/* About Section */}
            <div className="footer-section">
              <h2 className="mb-6 text-sm font-semibold text-yellow-400 uppercase tracking-wide">
                About Global Sport International
              </h2>
              <ul className="space-y-3">
                <li><a href="/clubhistory" className="hover:text-yellow-400 transition">Our Story</a></li>
                <li><a href="/news" className="hover:text-yellow-400 transition">Football News</a></li>
                <li><a href="/players" className="hover:text-yellow-400 transition">Player Highlights</a></li>
                <li><a href="/matches" className="hover:text-yellow-400 transition">Upcoming Matches</a></li>
              </ul>
            </div>

            {/* Connect Section */}
            <div className="footer-section">
              <h2 className="mb-6 text-sm font-semibold text-yellow-400 uppercase tracking-wide">
                Follow Us
              </h2>
              <ul className="space-y-3">
                <li><a href="https://www.instagram.com/globalsport247_/" className="hover:text-yellow-400 transition">Instagram</a></li>
                <li><a href="https://facebook.com/globalsport247" className="hover:text-yellow-400 transition">Facebook</a></li>
                <li><a href="/contact" className="hover:text-yellow-400 transition">Contact Us</a></li>
              </ul>
            </div>

            {/* Legal Section */}
            <div className="footer-section">
              <h2 className="mb-6 text-sm font-semibold text-yellow-400 uppercase tracking-wide">
                Legal
              </h2>
              <ul className="space-y-3">
                <li><a href="/privacy" className="hover:text-yellow-400 transition">Privacy Policy</a></li>
                <li><a href="/license" className="hover:text-yellow-400 transition">Licensing</a></li>
                <li><a href="/terms" className="hover:text-yellow-400 transition">Terms & Conditions</a></li>
              </ul>
            </div>

            {/* Newsletter Section */}
            <div className="footer-section">
              <h2 className="mb-6 text-sm font-semibold text-yellow-400 uppercase tracking-wide">
                Stay Updated
              </h2>
              <p className="mb-4">Subscribe for the latest football news, match updates, and exclusive content.</p>
              <form onSubmit={handleSubscribe}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-800 text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 mb-4 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-colors"
                />
                <button
                  type="submit"
                  className="w-full py-3 bg-yellow-400 text-black rounded-lg hover:bg-yellow-500 transition-all duration-300"
                >
                  Subscribe
                </button>
              </form>
              {status && (
                <p className={`mt-3 text-sm ${status.type === "success" ? "text-green-400" : "text-red-400"}`}>
                  {status.message}
                </p>
              )}
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="py-6 text-center text-sm text-gray-300 dark:text-gray-500">
            <p suppressHydrationWarning={true}>
              &copy; {new Date().getFullYear()} Global Sport Football Club. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
