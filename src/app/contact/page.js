"use client";
import { useState } from "react";
import emailjs from "emailjs-com";

// Hardcoded EmailJS Credentials
const SERVICE_ID = "service_mofzwum";
const TEMPLATE_ID = "template_ormpbz2";
const USER_ID = "a1NybmXRcYdkYXTu6";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    contactMethod: "email",
  });
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  // Handle Input Changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatusMessage("");

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
      .then(
        () => {
          setIsSending(false);
          setStatusMessage("✅ Your message has been sent successfully!");
          setFormData({ name: "", email: "", phone: "", message: "", contactMethod: "email" });
        },
        (error) => {
          console.error("EmailJS Error:", error);
          setIsSending(false);
          setStatusMessage("❌ Something went wrong. Please try again.");
        }
      );
  };

  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10">
        
        {/* Contact Info Section */}
        <div className="relative">
          <img
            src="https://images.pexels.com/photos/30393828/pexels-photo-30393828/free-photo-of-competitive-soccer-match-on-a-sunny-day.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Contact Us"
            className="w-full h-full rounded-2xl object-cover"
          />
          <h1 className="absolute top-10 left-10 text-white text-4xl font-bold">Contact Us</h1>
          <div className="absolute bottom-0 p-6 w-full bg-white rounded-lg shadow-lg">
            <ContactInfo icon="📞" text="+77273274755, +77025895922" />
            <ContactInfo icon="📧" text="globalsportint2017@gmail.com" />
            <ContactInfo icon="📍" text="Kazakhstan" />
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-50 p-8 rounded-2xl shadow-lg">
          <h2 className="text-yellow-500 text-3xl font-semibold mb-6">Send Us A Message</h2>

          <form onSubmit={handleSubmit}>
            <FormInput name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
            <FormInput name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
            <FormInput name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} />
            
            {/* Contact Method Selection */}
            <div className="mb-6">
              <h4 className="text-gray-500 mb-2">Preferred method of communication</h4>
              <div className="flex space-x-6">
                <RadioInput id="email" label="Email" name="contactMethod" value="email" checked={formData.contactMethod === "email"} onChange={handleChange} />
                <RadioInput id="phone" label="Phone" name="contactMethod" value="phone" checked={formData.contactMethod === "phone"} onChange={handleChange} />
              </div>
            </div>
            
            <FormInput name="message" placeholder="Message" value={formData.message} onChange={handleChange} textarea />
            
            {/* Status Message */}
            {statusMessage && (
              <p className={`text-center p-2 mb-4 ${statusMessage.includes("successfully") ? "text-green-600" : "text-red-600"}`}>
                {statusMessage}
              </p>
            )}
            
            {/* Submit Button */}
            <button type="submit" className="w-full bg-yellow-500 text-white py-3 rounded-lg shadow-lg hover:bg-yellow-600 transition" disabled={isSending}>
              {isSending ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

// Contact Info Component
const ContactInfo = ({ icon, text }) => (
  <div className="flex items-center space-x-3 mb-4">
    <span className="text-lg">{icon}</span>
    <p className="text-black">{text}</p>
  </div>
);

// Input Field Component
const FormInput = ({ name, placeholder, value, onChange, textarea }) => (
  textarea ? (
    <textarea name={name} value={value} onChange={onChange} placeholder={placeholder} className="w-full p-3 border rounded-lg mb-4" rows="4"></textarea>
  ) : (
    <input name={name} type="text" value={value} onChange={onChange} placeholder={placeholder} className="w-full p-3 border rounded-lg mb-4" />
  )
);

// Radio Button Component
const RadioInput = ({ id, label, name, value, checked, onChange }) => (
  <label className="flex items-center cursor-pointer text-gray-500">
    <input id={id} type="radio" name={name} value={value} checked={checked} onChange={onChange} className="hidden" />
    <span className="w-5 h-5 border rounded-full flex items-center justify-center mr-2">
      {checked && <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>}
    </span>
    {label}
  </label>
);

export default ContactPage;
