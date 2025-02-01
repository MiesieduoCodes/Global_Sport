// "use client";
// import { useState, useEffect, useRef, useContext } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { LanguageContext } from "@/context/LanguageContext";

// // Using relative imports for translations (adjust paths as needed)
// import en from "@/locales/en.json";
// import es from "@/locales/es.json";
// import fr from "@/locales/fr.json";

// const translations = { en, es, fr };

// export default function Navbar() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [theme, setTheme] = useState("light");
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const { locale, changeLanguage } = useContext(LanguageContext);
//   const t = translations[locale];

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     document.body.classList.toggle("dark", theme === "dark");
//   }, [theme]);

//   const toggleTheme = () => {
//     setTheme((prev) => (prev === "light" ? "dark" : "light"));
//   };

//   const handleLanguageChange = (e) => {
//     changeLanguage(e.target.value);
//   };

//   return (
//     <div className={`navbar ${isScrolled ? "bg-blue-600 shadow-lg" : "bg-base-100"}`}>
//       <div className="navbar-start">
//         <a className="btn btn-ghost text-xl">Football Hub</a>
//       </div>

//       <div className="navbar-center hidden lg:flex">
//         <ul className="menu menu-horizontal px-1">
//           <li>
//             <Link href="/">{t.home}</Link>
//           </li>
//           <li>
//             <details>
//               <summary>{t.sports}</summary>
//               <ul className="p-2">
//                 <li>
//                   <Link href="/join-team">Join Team</Link>
//                 </li>
//                 <li>
//                   <Link href="/join-academy">Join Academy</Link>
//                 </li>
//                 <li>
//                   <Link href="/training-sessions">Training Sessions</Link>
//                 </li>
//                 <li>
//                   <Link href="/merchandise">Merchandise</Link>
//                 </li>
//               </ul>
//             </details>
//           </li>
//         </ul>
//       </div>

//       <div className="navbar-end flex items-center space-x-4">
//         <select
//           className="bg-transparent text-black border border-black rounded px-2 py-1"
//           onChange={handleLanguageChange}
//           aria-label="Language selector"
//           value={locale}
//         >
//           <option value="en">EN</option>
//           <option value="es">ES</option>
//           <option value="fr">FR</option>
//         </select>

//         <button
//           onClick={toggleTheme}
//           className="text-black p-2 bg-transparent border border-black rounded transition-all duration-200"
//         >
//           {theme === "light" ? "🌙" : "☀️"}
//         </button>

//         <button
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//           className="btn btn-ghost lg:hidden"
//         >
//           {isMenuOpen ? "✖" : "☰"}
//         </button>
//       </div>

//       {isMenuOpen && (
//         <div className="absolute top-16 right-0 w-52 bg-base-100 shadow-lg rounded-box p-4">
//           <ul className="menu menu-vertical">
//             <li>
//               <Link href="/">{t.home}</Link>
//             </li>
//             <li>
//               <details>
//                 <summary>{t.sports}</summary>
//                 <ul className="p-2">
//                   <li>
//                     <Link href="/join-team">Join Team</Link>
//                   </li>
//                   <li>
//                     <Link href="/join-academy">Join Academy</Link>
//                   </li>
//                   <li>
//                     <Link href="/training-sessions">Training Sessions</Link>
//                   </li>
//                   <li>
//                     <Link href="/merchandise">Merchandise</Link>
//                   </li>
//                 </ul>
//               </details>
//             </li>
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// }
