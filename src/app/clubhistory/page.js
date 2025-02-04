"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from "@heroicons/react/20/solid";

// Content JSON
const contentData = {
    title: "The Legacy of United FC",
    subtitle: "A Journey Through Time and Triumph",
    description:
      "From humble beginnings to global dominance, United FC has carved its name in football history. Explore the milestones, legendary players, and unforgettable moments that define this iconic club.",
    features: [
      {
        icon: CloudArrowUpIcon,
        title: "Founding Years",
        description:
          "Established in 1892, United FC started as a local club with a passionate following. The early years saw struggles, but determination and a unique playing style set the foundation for future success.",
      },
      {
        icon: LockClosedIcon,
        title: "Era of Dominance",
        description:
          "The mid-20th century marked the club's rise to prominence. With back-to-back league titles and a signature attacking style, United FC became a powerhouse in domestic and international competitions.",
      },
      {
        icon: ServerIcon,
        title: "European Glory",
        description:
          "United FC's historic triumphs in continental tournaments solidified its reputation as one of the greatest clubs. Memorable finals, legendary goals, and unwavering fan support shaped its global identity.",
      },
      {
        icon: ServerIcon,
        title: "European Glory",
        description:
          "United FC's historic triumphs in continental tournaments solidified its reputation as one of the greatest clubs. Memorable finals, legendary goals, and unwavering fan support shaped its global identity.",
      },
    ],
    additionalContent: [
      {
        title: "A Club Built on Passion",
        text: "From the roaring terraces of the home stadium to the countless fans across the world, United FC is more than a football club—it’s a family. The unity between players and supporters has fueled decades of success.",
      },
      {
        title: "Legendary Players",
        text: "Icons like John Doe, Alex Striker, and David Maestro have graced the club with their talent. Their contributions on the pitch and dedication off it continue to inspire generations.",
      },
      {
        title: "A Future of Excellence",
        text: "With a state-of-the-art training facility, a thriving youth academy, and a vision for sustainable success, United FC is committed to writing new chapters in football history.",
      },
      {
        title: "A Future of Excellence",
        text: "With a state-of-the-art training facility, a thriving youth academy, and a vision for sustainable success, United FC is committed to writing new chapters in football history.",
      },
      {
        title: "A Future of Excellence",
        text: "With a state-of-the-art training facility, a thriving youth academy, and a vision for sustainable success, United FC is committed to writing new chapters in football history.",
      },
    ],
    images: [
      {
        src: "https://images.pexels.com/photos/29185445/pexels-photo-29185445/free-photo-of-children-playing-soccer-in-urban-alleyway.jpeg?auto=compress&cs=tinysrgb&w=600",
        alt: "United FC celebrating a championship victory",
      },
      {
        src: "https://images.pexels.com/photos/17258095/pexels-photo-17258095/free-photo-of-exterior-of-the-san-siro-football-stadium-in-milan-italy.jpeg?auto=compress&cs=tinysrgb&w=600",
        alt: "Legendary players of United FC",
      },
    ],
  };
  
export default function Example() {
  const sectionRef = useRef(null);
  const imageRefs = useRef([]);
  const textRefs = useRef([]);

  useEffect(() => {
    // GSAP Animation
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );

    gsap.fromTo(
      imageRefs.current,
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 1, ease: "power3.out", stagger: 0.3 }
    );

    gsap.fromTo(
      textRefs.current,
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1, ease: "power3.out", stagger: 0.2 }
    );
  }, []);

  return (
    <div ref={sectionRef} className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      {/* Header Section */}
      <div className="mx-auto max-w-7xl text-center px-4 sm:px-6 lg:px-8">
        <p className="text-base font-semibold text-indigo-600">{contentData.subtitle}</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          {contentData.title}
        </h1>
        <p className="mt-6 text-lg text-gray-700">{contentData.description}</p>
      </div>

      {/* Images and Features */}
      <div className="mt-12 grid grid-cols-1 gap-10 p-6 lg:grid-cols-2 lg:gap-x-8">
        {/* Image 1 */}
        <div className="flex justify-center">
          <img
            ref={(el) => imageRefs.current.push(el)}
            src={contentData.images[0].src}
            alt={contentData.images[0].alt}
            className="w-[48rem] max-w-full rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10"
          />
        </div>

        {/* Features List */}
        <div className="max-w-lg text-gray-700">
          {contentData.features.map((feature, index) => (
            <div key={index} className="flex gap-x-3 mt-6" ref={(el) => textRefs.current.push(el)}>
              <feature.icon className="mt-1 h-6 w-6 text-indigo-600" />
              <div>
                <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Image */}
        <div className="flex justify-center">
          <img
            ref={(el) => imageRefs.current.push(el)}
            src={contentData.images[1].src}
            alt={contentData.images[1].alt}
            className="w-[48rem] max-w-full rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10"
          />
        </div>

        {/* Additional Content */}
        <div className="max-w-lg text-gray-700">
          {contentData.additionalContent.map((section, index) => (
            <div key={index} ref={(el) => textRefs.current.push(el)}>
              <h2 className="mt-10 text-2xl font-bold tracking-tight text-gray-900">{section.title}</h2>
              <p className="mt-4">{section.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
