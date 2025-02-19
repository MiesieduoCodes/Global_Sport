"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Footprints, Trophy, Ticket, Shirt, Quote, Sun } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const KidsClubPage = () => {
  const [formData, setFormData] = useState({
    parentName: "",
    childName: "",
    childAge: "",
    medicalInfo: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const faqItems = [
    {
      question: "What age groups do you accept?",
      answer: "We accept children aged 5-12 years old, divided into three age-specific groups."
    },
    {
      question: "What should my child bring to training?",
      answer: "Comfortable sports clothes, football boots, shin guards, and a water bottle."
    },
    {
      question: "Are your coaches certified?",
      answer: "All our coaches hold FA Level 2 certifications and have passed DBS checks."
    }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        toast.success("Registration successful! We'll be in touch soon.", {
          position: "top-center",
          autoClose: 5000,
          theme: "colored",
        });
        setFormData({
          parentName: "",
          childName: "",
          childAge: "",
          medicalInfo: ""
        });
      } else {
        toast.error("Error submitting form. Please try again.", {
          position: "top-center",
          autoClose: 5000,
          theme: "colored",
        });
      }
    } catch (error) {
      toast.error("Network error. Please check your connection.", {
        position: "top-center",
        autoClose: 5000,
        theme: "colored",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isMounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <ToastContainer />
      
      {/* Hero Section */}
      <header className="relative h-96 pt-24 bg-blue-700 dark:bg-blue-900 text-white">
        <div className="container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center z-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-yellow-500 dark:bg-yellow-600 px-6 py-2 rounded-lg">
              Global Sports FC Junior Academy
            </h1>
            <p className="text-xl md:text-2xl text-yellow-300 dark:text-yellow-400">
              Where Future Champions Are Made!
            </p>
          </div>
          <div className="absolute inset-0 opacity-20 dark:opacity-10">
            <Image
              src="/images/kids-club-bg.jpg"
              alt="Kids playing football"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Age Groups Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-blue-700 dark:text-blue-400">
            Age-Specific Programs
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border-t-4 border-yellow-500 transition-colors duration-300">
              <h3 className="text-xl font-semibold mb-4 text-blue-700 dark:text-blue-300">5-7 Years</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Basic motor skills development</li>
                <li>• Introduction to football rules</li>
                <li>• Fun team activities</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border-t-4 border-yellow-500 transition-colors duration-300">
              <h3 className="text-xl font-semibold mb-4 text-blue-700 dark:text-blue-300">8-10 Years</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Technical skill development</li>
                <li>• Small-sided matches</li>
                <li>• Position-specific training</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border-t-4 border-yellow-500 transition-colors duration-300">
              <h3 className="text-xl font-semibold mb-4 text-blue-700 dark:text-blue-300">11-12 Years</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Advanced tactics</li>
                <li>• Competitive matches</li>
                <li>• Fitness conditioning</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-blue-700 dark:text-blue-400">
            Our Junior Champions
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[1,2,3,4,5,6].map((item) => (
              <div key={item} className="relative aspect-square">
                <Image
                  src={`/images/gallery/${item}.jpg`}
                  alt="Training session"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-blue-700 dark:text-blue-400">
            Parent & Player Testimonials
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition-colors duration-300">
              <Quote className="w-8 h-8 text-yellow-500 dark:text-yellow-400 mb-4" />
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                &quot;My son&apos;s confidence has grown tremendously since joining. The coaches
                are amazing at nurturing young talent!&quot;
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 relative rounded-full overflow-hidden mr-3">
                  <Image
                    src="/images/testimonials/parent1.jpg"
                    alt="Sarah Johnson"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold dark:text-gray-100">Sarah Johnson</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Parent of Liam, 8</p>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition-colors duration-300">
              <Quote className="w-8 h-8 text-yellow-500 dark:text-yellow-400 mb-4" />
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                &quot;The best football academy in the region! My daughter looks forward
                to every training session.&quot;
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 relative rounded-full overflow-hidden mr-3">
                  <Image
                    src="/images/testimonials/parent2.jpg"
                    alt="Michael Chen"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold dark:text-gray-100">Michael Chen</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Parent of Emma, 10</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-blue-700 dark:text-blue-400">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto">
            {faqItems.map((item, index) => (
              <div key={index} className="border-b border-gray-200 dark:border-gray-700 last:border-0 transition-colors duration-300">
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  className="w-full text-left py-4 flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300"
                >
                  <span className="text-lg font-medium text-blue-700 dark:text-blue-300">{item.question}</span>
                  <span className={`transform transition-transform ${openFaqIndex === index ? 'rotate-180' : ''} text-blue-700 dark:text-blue-300`}>
                    ▼
                  </span>
                </button>
                {openFaqIndex === index && (
                  <div className="pb-4 text-gray-600 dark:text-gray-300 px-4">{item.answer}</div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Registration Section */}
        <section className="max-w-2xl mx-auto">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md border-2 border-blue-700 dark:border-blue-600 transition-colors duration-300">
            <h2 className="text-2xl font-bold mb-6 text-blue-700 dark:text-blue-300">
              Join Our Junior Academy
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 dark:text-gray-300 mb-2">
                  Parent/Guardian Name
                </label>
                <input
                  type="text"
                  value={formData.parentName}
                  onChange={(e) => setFormData({...formData, parentName: e.target.value})}
                  className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white transition-colors duration-300"
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <label className="block text-gray-700 dark:text-gray-300 mb-2">
                  Child's Name
                </label>
                <input
                  type="text"
                  value={formData.childName}
                  onChange={(e) => setFormData({...formData, childName: e.target.value})}
                  className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white transition-colors duration-300"
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <label className="block text-gray-700 dark:text-gray-300 mb-2">
                  Child's Age
                </label>
                <input
                  type="number"
                  value={formData.childAge}
                  onChange={(e) => setFormData({...formData, childAge: e.target.value})}
                  className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white transition-colors duration-300"
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <label className="block text-gray-700 dark:text-gray-300 mb-2">
                  Medical Information
                </label>
                <textarea
                  value={formData.medicalInfo}
                  onChange={(e) => setFormData({...formData, medicalInfo: e.target.value})}
                  className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white transition-colors duration-300"
                  rows="3"
                  disabled={isSubmitting}
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-yellow-500 dark:bg-yellow-600 text-blue-900 dark:text-blue-100 py-3 rounded-md hover:bg-yellow-600 dark:hover:bg-yellow-700 transition-colors duration-300 font-bold disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                    </svg>
                    Submitting...
                  </span>
                ) : (
                  "Register Now"
                )}
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
};

export default KidsClubPage;