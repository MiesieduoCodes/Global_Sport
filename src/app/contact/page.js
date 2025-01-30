"use client";
import { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    // Send Email via EmailJS
    emailjs.sendForm(
      'service_id', // Replace with your service ID
      'template_id', // Replace with your template ID
      e.target,
      'user_id' // Replace with your user ID from EmailJS
    )
    .then(
      (response) => {
        setIsSending(false);
        setStatusMessage('Your message has been sent successfully!');
      },
      (error) => {
        setIsSending(false);
        setStatusMessage('Something went wrong. Please try again.');
      }
    );
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8 text-blue-600">Contact Us</h1>

      <div className="flex justify-center">
        <form
          className="w-full max-w-lg p-6 bg-white shadow-lg rounded-lg"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              rows="6"
              required
            />
          </div>

          {statusMessage && (
            <p
              className={`text-center p-2 mb-4 ${
                statusMessage.includes('successfully') ? 'text-green-600' : 'text-red-600'
              }`}
            >
              {statusMessage}
            </p>
          )}

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 px-4 rounded-md disabled:bg-gray-400"
              disabled={isSending}
            >
              {isSending ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
