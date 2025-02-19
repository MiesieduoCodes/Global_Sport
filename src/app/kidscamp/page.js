// "use client";
// import Image from "next/image";
// import { useState, useEffect } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import Quote from "@/components/quote"; // Adjust the path if needed
// import { useLanguage } from "@/app/context/LanguageContext";


// const translations = {
//   en: {
//     title: "Global Sports Junior Academy",
//     subtitle: "Where Future Champions Are Made!",
//     agePrograms: "Age-Specific Programs",
//     juniorChampions: "Our Junior Champions",
//     testimonials: "Parent & Player Testimonials",
//     faq: "Frequently Asked Questions",
//     joinAcademy: "Join Our Junior Academy",
//     parentName: "Parent/Guardian Name",
//     childName: "Child's Name",
//     childAge: "Child's Age",
//     medicalInfo: "Medical Information",
//     registerNow: "Register Now",
//     submitting: "Submitting...",
//     successMessage: "Registration successful! We'll be in touch soon.",
//     errorMessage: "Error submitting form. Please try again.",
//     faqItems: [
//       {
//         question: "What age groups do you accept?",
//         answer: "We accept children aged 5-12 years old, divided into three age-specific groups."
//       },
//       {
//         question: "What should my child bring to training?",
//         answer: "Comfortable sports clothes, football boots, shin guards, and a water bottle."
//       },
//       {
//         question: "Are your coaches certified?",
//         answer: "All our coaches hold FA Level 2 certifications and have passed DBS checks."
//       }
//     ]
//   },
//   ru: {
//     title: "Юниорская академия Global Sports",
//     subtitle: "Где рождаются будущие чемпионы!",
//     agePrograms: "Программы по возрастным группам",
//     juniorChampions: "Наши юные чемпионы",
//     testimonials: "Отзывы родителей и игроков",
//     faq: "Часто задаваемые вопросы",
//     joinAcademy: "Присоединяйтесь к нашей юниорской академии",
//     parentName: "Имя родителя/опекуна",
//     childName: "Имя ребенка",
//     childAge: "Возраст ребенка",
//     medicalInfo: "Медицинская информация",
//     registerNow: "Зарегистрироваться сейчас",
//     submitting: "Отправка...",
//     successMessage: "Регистрация успешна! Мы свяжемся с вами в ближайшее время.",
//     errorMessage: "Ошибка при отправке формы. Пожалуйста, попробуйте снова.",
//     faqItems: [
//       {
//         question: "Какие возрастные группы вы принимаете?",
//         answer: "Мы принимаем детей в возрасте от 5 до 12 лет, разделенных на три возрастные группы."
//       },
//       {
//         question: "Что должен принести мой ребенок на тренировки?",
//         answer: "Удобная спортивная одежда, футбольные бутсы, щитки и бутылка с водой."
//       },
//       {
//         question: "Ваши тренеры сертифицированы?",
//         answer: "Все наши тренеры имеют сертификаты FA уровня 2 и прошли проверки DBS."
//       }
//     ]
//   },
//   fr: {
//     title: "Académie Junior de Global Sports",
//     subtitle: "Où les futurs champions sont formés !",
//     agePrograms: "Programmes par tranche d'âge",
//     juniorChampions: "Nos Jeunes Champions",
//     testimonials: "Témoignages des Parents et des Joueurs",
//     faq: "Questions Fréquemment Posées",
//     joinAcademy: "Rejoignez notre Académie Junior",
//     parentName: "Nom du Parent/Guardian",
//     childName: "Nom de l'Enfant",
//     childAge: "Âge de l'Enfant",
//     medicalInfo: "Informations Médicales",
//     registerNow: "Inscrivez-vous Maintenant",
//     submitting: "Soumission...",
//     successMessage: "Inscription réussie ! Nous vous contacterons bientôt.",
//     errorMessage: "Erreur lors de l'envoi du formulaire. Veuillez réessayer.",
//     faqItems: [
//       {
//         question: "Quels groupes d'âge acceptez-vous ?",
//         answer: "Nous acceptons les enfants âgés de 5 à 12 ans, répartis en trois groupes d'âge spécifiques."
//       },
//       {
//         question: "Que doit apporter mon enfant à l'entraînement ?",
//         answer: "Vêtements de sport confortables, chaussures de football, protège-tibias et une bouteille d'eau."
//       },
//       {
//         question: "Vos entraîneurs sont-ils certifiés ?",
//         answer: "Tous nos entraîneurs détiennent des certifications FA de niveau 2 et ont passé des vérifications DBS."
//       }
//     ]
//   },
//   es: {
//     title: "Academia Junior de Global Sports",
//     subtitle: "¡Donde se forman los futuros campeones!",
//     agePrograms: "Programas por Edad",
//     juniorChampions: "Nuestros Campeones Junior",
//     testimonials: "Testimonios de Padres y Jugadores",
//     faq: "Preguntas Frecuentes",
//     joinAcademy: "Únete a Nuestra Academia Junior",
//     parentName: "Nombre del Padre/Responsable",
//     childName: "Nombre del Niño",
//     childAge: "Edad del Niño",
//     medicalInfo: "Información Médica",
//     registerNow: "Regístrate Ahora",
//     submitting: "Enviando...",
//     successMessage: "¡Registro exitoso! Nos pondremos en contacto pronto.",
//     errorMessage: "Error al enviar el formulario. Por favor, inténtalo de nuevo.",
//     faqItems: [
//       {
//         question: "¿Qué grupos de edad aceptan?",
//         answer: "Aceptamos niños de 5 a 12 años, divididos en tres grupos específicos por edad."
//       },
//       {
//         question: "¿Qué debe traer mi hijo a la práctica?",
//         answer: "Ropa deportiva cómoda, botas de fútbol, espinilleras y una botella de agua."
//       },
//       {
//         question: "¿Sus entrenadores están certificados?",
//         answer: "Todos nuestros entrenadores tienen certificaciones FA de nivel 2 y han pasado verificaciones DBS."
//       }
//     ]
//   },
// };

// const KidsClubPage = () => {
//   const [formData, setFormData] = useState({
//     parentName: "",
//     childName: "",
//     childAge: "",
//     medicalInfo: ""
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [openFaqIndex, setOpenFaqIndex] = useState(null);
//   const [isMounted, setIsMounted] = useState(false);
//   const { language } = useLanguage();
//   const content = translations[language] || translations.en;

//   useEffect(() => {
//     setIsMounted(true);
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
    
//     try {
//       const response = await fetch('/api/register', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });
      
//       if (response.ok) {
//         toast.success(content.successMessage, {
//           position: "top-center",
//           autoClose: 5000,
//           theme: "colored",
//         });
//         setFormData({
//           parentName: "",
//           childName: "",
//           childAge: "",
//           medicalInfo: ""
//         });
//       } else {
//         toast.error(content.errorMessage, {
//           position: "top-center",
//           autoClose: 5000,
//           theme: "colored",
//         });
//       }
//     } catch (error) {
//       toast.error("Network error. Please check your connection.", {
//         position: "top-center",
//         autoClose: 5000,
//         theme: "colored",
//       });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   if (!isMounted) {
//     return null;
//   }

//   return (
//     <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
//       <ToastContainer />
      
//       {/* Hero Section */}
//       <header className="relative h-96 pt-24 bg-blue-700 dark:bg-blue-900 text-white">
//         <div className="container mx-auto px-4 h-full flex items-center justify-center">
//           <div className="text-center z-10">
//             <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-yellow-500 dark:bg-yellow-600 px-6 py-2 rounded-lg">
//               {content.title}
//             </h1>
//             <p className="text-xl md:text-2xl text-yellow-300 dark:text-yellow-400">
//               {content.subtitle}
//             </p>
//           </div>
//           <div className="absolute inset-0 opacity-20 dark:opacity-10">
//             <Image
//               src="/images/kids-club-bg.jpg"
//               alt="Kids playing football"
//               fill
//               className="object-cover"
//             />
//           </div>
//         </div>
//       </header>


//       {/* Main Content */}
//       <main className="container mx-auto px-4 py-12">
//         {/* Age Groups Section */}
//         <section className="mb-16">
//           <h2 className="text-3xl font-bold text-center mb-8 text-blue-700 dark:text-blue-400">
//             {content.agePrograms}
//           </h2>
//           <div className="grid md:grid-cols-3 gap-8">
//             {/* Age Group Cards */}
//             <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border-t-4 border-yellow-500 transition-colors duration-300">
//               <h3 className="text-xl font-semibold mb-4 text-blue-700 dark:text-blue-300">5-7 Years</h3>
//               <ul className="space-y-2 text-gray-600 dark:text-gray-300">
//                 <li>• Basic motor skills development</li>
//                 <li>• Introduction to football rules</li>
//                 <li>• Fun team activities</li>
//               </ul>
//             </div>
//             <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border-t-4 border-yellow-500 transition-colors duration-300">
//               <h3 className="text-xl font-semibold mb-4 text-blue-700 dark:text-blue-300">8-10 Years</h3>
//               <ul className="space-y-2 text-gray-600 dark:text-gray-300">
//                 <li>• Technical skill development</li>
//                 <li>• Small-sided matches</li>
//                 <li>• Position-specific training</li>
//               </ul>
//             </div>
//             <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border-t-4 border-yellow-500 transition-colors duration-300">
//               <h3 className="text-xl font-semibold mb-4 text-blue-700 dark:text-blue-300">11-12 Years</h3>
//               <ul className="space-y-2 text-gray-600 dark:text-gray-300">
//                 <li>• Advanced tactics</li>
//                 <li>• Competitive matches</li>
//                 <li>• Fitness conditioning</li>
//               </ul>
//             </div>
//           </div>
//         </section>

//         {/* Gallery Section */}
//         <section className="mb-16">
//           <h2 className="text-3xl font-bold text-center mb-8 text-blue-700 dark:text-blue-400">
//             {content.juniorChampions}
//           </h2>
//           <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
//             {[1,2,3,4,5,6].map((item) => (
//               <div key={item} className="relative aspect-square">
//                 <Image
//                   src={`/images/gallery/${item}.jpg`}
//                   alt="Training session"
//                   fill
//                   className="object-cover rounded-lg"
//                 />
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Testimonials Section */}
//         <section className="mb-16">
//           <h2 className="text-3xl font-bold text-center mb-8 text-blue-700 dark:text-blue-400">
//             {content.testimonials}
//           </h2>
//           <div className="grid md:grid-cols-2 gap-8">
//             <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition-colors duration-300">
//               <Quote className="w-8 h-8 text-yellow-500 dark:text-yellow-400 mb-4" />
//               <p className="text-gray-600 dark:text-gray-300 mb-4">
//                 &quot;My son&apos;s confidence has grown tremendously since joining. The coaches
//                 are amazing at nurturing young talent!&quot;
//               </p>
//               <div className="flex items-center">
//                 <div className="w-12 h-12 relative rounded-full overflow-hidden mr-3">
//                   <Image
//                     src="/images/testimonials/parent1.jpg"
//                     alt="Sarah Johnson"
//                     fill
//                     className="object-cover"
//                   />
//                 </div>
//                 <div>
//                   <p className="font-semibold dark:text-gray-100">Sarah Johnson</p>
//                   <p className="text-sm text-gray-500 dark:text-gray-400">Parent of Liam, 8</p>
//                 </div>
//               </div>
//             </div>
//             <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition-colors duration-300">
//               <Quote className="w-8 h-8 text-yellow-500 dark:text-yellow-400 mb-4" />
//               <p className="text-gray-600 dark:text-gray-300 mb-4">
//                 &quot;The best football academy in the region! My daughter looks forward
//                 to every training session.&quot;
//               </p>
//               <div className="flex items-center">
//                 <div className="w-12 h-12 relative rounded-full overflow-hidden mr-3">
//                   <Image
//                     src="/images/testimonials/parent2.jpg"
//                     alt="Michael Chen"
//                     fill
//                     className="object-cover"
//                   />
//                 </div>
//                 <div>
//                   <p className="font-semibold dark:text-gray-100">Michael Chen</p>
//                   <p className="text-sm text-gray-500 dark:text-gray-400">Parent of Emma, 10</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* FAQ Section */}
//         <section className="mb-16">
//           <h2 className="text-3xl font-bold text-center mb-8 text-blue-700 dark:text-blue-400">
//             {content.faq}
//           </h2>
//           <div className="max-w-3xl mx-auto">
//             {content.faqItems.map((item, index) => (
//               <div key={index} className="border-b border-gray-200 dark:border-gray-700 last:border-0 transition-colors duration-300">
//                 <button
//                   onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
//                   className="w-full text-left py-4 flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300"
//                 >
//                   <span className="text-lg font-medium text-blue-700 dark:text-blue-300">{item.question}</span>
//                   <span className={`transform transition-transform ${openFaqIndex === index ? 'rotate-180' : ''} text-blue-700 dark:text-blue-300`}>
//                     ▼
//                   </span>
//                 </button>
//                 {openFaqIndex === index && (
//                   <div className="pb-4 text-gray-600 dark:text-gray-300 px-4">{item.answer}</div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Registration Section */}
//         <section className="max-w-2xl mx-auto">
//           <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md border-2 border-blue-700 dark:border-blue-600 transition-colors duration-300">
//             <h2 className="text-2xl font-bold mb-6 text-blue-700 dark:text-blue-300">
//               {content.joinAcademy}
//             </h2>
//             <form onSubmit={handleSubmit} className="space-y-4">
//               <div>
//                 <label className="block text-gray-700 dark:text-gray-300 mb-2">
//                   {content.parentName}
//                 </label>
//                 <input
//                   type="text"
//                   value={formData.parentName}
//                   onChange={(e) => setFormData({...formData, parentName: e.target.value})}
//                   className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white transition-colors duration-300"
//                   required
//                   disabled={isSubmitting}
//                 />
//               </div>
//               <div>
//                 <label className="block text-gray-700 dark:text-gray-300 mb-2">
//                   {content.childName}
//                 </label>
//                 <input
//                   type="text"
//                   value={formData.childName}
//                   onChange={(e) => setFormData({...formData, childName: e.target.value})}
//                   className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white transition-colors duration-300"
//                   required
//                   disabled={isSubmitting}
//                 />
//               </div>
//               <div>
//                 <label className="block text-gray-700 dark:text-gray-300 mb-2">
//                   {content.childAge}
//                 </label>
//                 <input
//                   type="number"
//                   value={formData.childAge}
//                   onChange={(e) => setFormData({...formData, childAge: e.target.value})}
//                   className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white transition-colors duration-300"
//                   required
//                   disabled={isSubmitting}
//                 />
//               </div>
//               <div>
//                 <label className="block text-gray-700 dark:text-gray-300 mb-2">
//                   {content.medicalInfo}
//                 </label>
//                 <textarea
//                   value={formData.medicalInfo}
//                   onChange={(e) => setFormData({...formData, medicalInfo: e.target.value})}
//                   className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white transition-colors duration-300"
//                   rows="3"
//                   disabled={isSubmitting}
//                 ></textarea>
//               </div>
//               <button
//                 type="submit"
//                 disabled={isSubmitting}
//                 className="w-full bg-yellow-500 dark:bg-yellow-600 text-blue-900 dark:text-blue-100 py-3 rounded-md hover:bg-yellow-600 dark:hover:bg-yellow-700 transition-colors duration-300 font-bold disabled:opacity-70 disabled:cursor-not-allowed"
//               >
//                 {isSubmitting ? content.submitting : content.registerNow}
//               </button>
//             </form>
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// };

// export default KidsClubPage;