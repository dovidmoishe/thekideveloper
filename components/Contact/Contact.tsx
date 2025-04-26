"use client";
import axios from "axios";
import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { FaTiktok, FaYoutube } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { SiX } from "react-icons/si";

export const Contact = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  // Loading and success states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");
    
    try {
      // This is where you would send the data to your server
      console.log("Form data to send:", formData);
      
      await axios.post('/api/mail', {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        body: formData.message
      })
      setFormData({ name: "", email: "", subject: "", message: "" });
      setSubmitSuccess(true);
    } catch (error) {
      console.error("Error submitting form:", error);
      setErrorMessage("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="contact">
      <div className="w-full bg-black">
      <div className="w-full max-w-4xl mx-auto shadow-lg p-8">
        <h2 className="text-4xl sm:text-7xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-b from-gray-400 to-gray-200">
          Let&lsquo;s Connect!
        </h2>
        <p className="text-gray-700 dark:text-gray-300 text-center mt-2">
          Feel free to reach out via email, WhatsApp, follow me on my socials, or send a message using the form below.
        </p>
        
        {/* Contact Form */}
        <div className="mt-12 mb-12">
          <h3 className="text-2xl font-semibold text-gray-200 mb-6">Send me a message</h3>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-1">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                placeholder="What's this about?"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                placeholder="Your message here..."
              ></textarea>
            </div>
            
            <div className="flex items-center justify-between">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`px-6 py-3 bg-gradient-to-r bg-neon text-white font-medium rounded-lg transition-all duration-200 ${
                  isSubmitting ? "opacity-70 cursor-not-allowed" : "hover:from-blue-700 hover:to-blue-900"
                }`}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
              
              {submitSuccess && (
                <span className="text-green-500 text-sm font-medium">
                  Message sent successfully!
                </span>
              )}
              
              {errorMessage && (
                <span className="text-red-500 text-sm font-medium">
                  {errorMessage}
                </span>
              )}
            </div>
          </form>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Email */}
          <div className="flex items-center space-x-4">
            <SiGmail className="text-gray-500 dark:text-gray-300 w-10 h-10"  />
            <a
              href="mailto:ozerlihashem@gmail.com"
              className="text-lg text-gray-900 dark:text-white hover:underline"
            >
              ozerlihashem@gmail.com
            </a>
          </div>
          
          {/* WhatsApp */}
          <div className="flex items-center space-x-4">
            <FaWhatsapp className="text-green-500 w-8 h-8" />
            <a
              href="https://wa.link/jngzmy"
              className="text-lg text-gray-900 dark:text-white hover:underline"
            >
              Reach me on WA
            </a>
          </div>


          
          {/* X (formerly Twitter) */}
          <div className="flex items-center space-x-4">
            <SiX className="text-blue-500 dark:text-blue-400 w-8 h-8" />
            <a
              href="https://x.com/itsdavetech"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-gray-900 dark:text-white hover:underline"
            >
              @itsdavetech
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <FaYoutube className="text-red-500 w-8 h-8" />
            <a
              href="https://www.youtube.com/@itsdavetech"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-gray-900 dark:text-white hover:underline"
            >
              @itsdavetech
              </a>
              </div>
          
          {/* GitHub */}
          <div className="flex items-center space-x-4">
            <FaGithub className="text-gray-900 dark:text-white w-8 h-8" />
            <a
              href="https://github.com/dovidmoishe"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-gray-900 dark:text-white hover:underline"
            >
              David Baiye
            </a>
          </div>
          
          <div className="flex items-center space-x-4">
            <FaTiktok className="text-gray-900 dark:text-white w-8 h-8" />
            <a
              href="https://www.tiktok.com/@thewonderdev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-gray-900 dark:text-white hover:underline"
            >
              @thewonderdev
            </a>
          </div>
        </div>
        
        <div className="mt-10 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Made with ❤️
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};