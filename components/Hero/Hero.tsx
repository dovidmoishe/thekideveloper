import React, { useState } from "react";
import { FaTiktok, FaXTwitter, FaWhatsapp, FaInstagram, FaGithub, FaYoutube } from "react-icons/fa6";
import { motion } from "framer-motion";
type Props = {};

const socialLinks = [
  { icon: FaXTwitter, url: "https://x.com/itsdavetech", name: "Twitter" },
  { icon: FaWhatsapp, url: "https://wa.link/jngzmy", name: "WhatsApp" },
  { icon: FaInstagram, url: "https://www.instagram.com/itsdavetech_/", name: "Instagram" },
  { icon: FaGithub, url: "https://github.com/dovidmoishe", name: "GitHub" },
  { icon: FaTiktok, url: "https://www.tiktok.com/@thewonderdev", name: "TikTok" },
  {icon:FaYoutube, url:"https://www.youtube.com/@itsdavetech", name:"youtube"}
];

const Hero = (props: Props) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <motion.div 
      className="h-screen w-full dark:bg-black bg-gray-50 dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-gray-50 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      
      {/* Animated background glow */}
      <motion.div 
        className="absolute w-96 h-96 rounded-full bg-neon opacity-20 blur-3xl"
        animate={{ 
          x: ["-50%", "50%", "-50%"],
          y: ["-50%", "50%", "-50%"],
        }}
        transition={{ 
          duration: 15, 
          ease: "easeInOut", 
          repeat: Infinity,
          repeatType: "reverse" 
        }}
      />

      <motion.div 
        className="flex flex-col items-center justify-center text-center max-w-4xl px-4 z-10"
        initial={{ y: 50 }}
        animate={{ y: 0 }}
        transition={{ 
          duration: 0.8, 
          type: "spring", 
          stiffness: 100 
        }}
      >
        {/* Name with animated glow effect */}
        <motion.div 
          className="mb-4 relative"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          {/* <div className="hidden sm:block">
            <TypewriterEffectSmooth words={nameText} />
          </div> */}
          <div className=" text-5xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
            David Baiye
          </div>
          
          {/* Subtle glow effect behind name */}
          <motion.div 
            className="absolute inset-0 bg-neon rounded-full blur-xl opacity-20 -z-10"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        </motion.div>

        {/* Title with flip effect */}
        <motion.div 
          className="text-2xl md:text-3xl font-normal text-neutral-600 dark:text-neutral-400 my-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          I&apos;m a AI and web3 developer
        </motion.div>

        {/* Social links with hover effects */}
        <motion.div 
          className="mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <p className="text-md mb-4">Find me on</p>
          <div className="flex items-center justify-center gap-6 flex-wrap">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="relative"
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon 
                  size={28} 
                  className="cursor-pointer hover:text-neon transition-colors" 
                />
                
                {/* Tooltip on hover */}
                {hoveredIndex === index && (
                  <motion.div
                    className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs py-1 px-2 rounded"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                  >
                    {social.name}
                  </motion.div>
                )}
                
                {/* Glow effect on hover */}
                {hoveredIndex === index && (
                  <motion.div 
                    className="absolute inset-0 bg-neon rounded-full blur-md -z-10"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 0.6, scale: 1.5 }}
                    exit={{ opacity: 0, scale: 0 }}
                  />
                )}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.a
          href="#contact"
          className="mt-12 px-8 py-3 bg-gradient-to-r from-neon/80 to-neon/50 text-white font-medium rounded-full hover:shadow-lg hover:shadow-neon/30 transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          Get In Touch
        </motion.a>
      </motion.div>
    </motion.div>
  );
};

export default Hero;