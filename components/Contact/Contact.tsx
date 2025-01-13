"use client";
import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { SiX } from "react-icons/si";

export const Contact = () => {
  return (
    <div className="w-full bg-black">
      <div className="w-full max-w-4xl mx-auto   shadow-lg  p-8">
      <h2 className="text-4xl sm:text-7xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-b from-gray-400 to-gray-200">
        Let&lsquo;s Connect!
      </h2>
      <p className="text-gray-700 dark:text-gray-300 text-center mt-2">
        Feel free to reach out via email, WhatsApp, or follow me on my socials.
      </p>

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
            href="https://wa.link/jngzmy" // Replace with your WhatsApp link
            className="text-lg text-gray-900 dark:text-white hover:underline"
          >
            Reach me on WA
          </a>
        </div>

        {/* X (formerly Twitter) */}
        <div className="flex items-center space-x-4">
          <SiX className="text-blue-500 dark:text-blue-400 w-8 h-8" />
          <a
            href="https://x.com/thekideveloper" // Replace with your X profile
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg text-gray-900 dark:text-white hover:underline"
          >
            @thekideveloper
          </a>
        </div>

        {/* GitHub */}
        <div className="flex items-center space-x-4">
          <FaGithub className="text-gray-900 dark:text-white w-8 h-8" />
          <a
            href="https://github.com/dovidmoishe" // Replace with your GitHub
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
            href="https://www.tiktok.com/@thekideveloper" // Replace with your GitHub
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg text-gray-900 dark:text-white hover:underline"
          >
           @thekideveloper
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
  );
};
