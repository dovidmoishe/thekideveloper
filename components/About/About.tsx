import React from "react";
import IconCloud from "@/components/magicui/icon-cloud";
import { FaGithub } from "react-icons/fa6";
import SkillsGrid from "./SkillsGrid";
import { Badge } from "../ui/badge";

type Props = {};

const About = (props: Props) => {
  return (
    <div className="dark:bg-black bg-gray-50" id="about">
      <div className="max-w-7xl mx-auto p-8">
      <p className="text-4xl sm:text-7xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-b from-gray-400 to-gray-200">
        About Me
      </p>

      <div className="flex flex-col lg:flex-row justify-between items-center md:items-start m-5 gap-10 mt-7">
        <div className="w-full lg:w-1/2 space-y-6">
          <p className="text-base font-normal leading-relaxed">
          I&apos;m David Baiye — a Web3 developer, AI engineer, and startup founder passionate about building technologies that drive real impact.
          </p>
          <p className="text-base font-normal leading-relaxed">
          With 5+ years of experience, I specialize in web development, decentralized systems, and AI solutions.
          </p>
          <p className="text-base font-normal leading-relaxed">
          Currently studying Computer Science at the Federal University of Lafia, I stay ahead by exploring innovations like Google Gemini and pushing the boundaries of what&apos;s possible.
          </p>
       <p className="text-base font-normal leading-relaxed text">
       I&apos;m driven by a love for building, learning, and creating the future.
</p>

          
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/dovidmoishe"
              className="p-[3px] relative inline-block"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg blur-md transition duration-200 transform hover:scale-105" />
              <div className="px-4 py-2 bg-black rounded-lg relative group transition duration-200 text-white hover:bg-transparent hover:border hover:border-indigo-500">
                <div className="flex items-center gap-2">
                  <FaGithub size={35} />
                  <span>GitHub</span>
                </div>
              </div>
            </a>
          </div>
        </div>

        <div className="w-full lg:w-1/2 ">
         
          <SkillsGrid />

          <div className="mt-10">
                <h3 className="text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                  Areas of Focus
                </h3>
                <div className="flex flex-wrap gap-3">
                  {[
                    "Web Development",
                    "Web3",
                    "AI & ML",
                    "Scalable Applications",
                    "Real-time Systems",
                    "Blockchain",
                  ].map((area) => (
                    <Badge
                      key={area}
                      className="bg-gradient-to-r bg-white text-black border border-indigo-500/30 hover:from-indigo-500/30 hover:to-purple-500/30"
                    >
                      {area}
                    </Badge>
                  ))}
                </div>
              </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default About;
