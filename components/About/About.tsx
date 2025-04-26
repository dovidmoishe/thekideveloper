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

      <div className="flex flex-col lg:flex-row justify-between items-center m-5 gap-10 mt-7">
        <div className="w-full lg:w-1/2 space-y-6">
          <p className="text-lg font-normal leading-relaxed">
          I&apos;m David Baiye, a driven web3 developer, AI engineer and startup founder passionate about building innovative solutions that make a real impact. Inspired by Steve Jobs&apos; vision, I aim to create technologies that transform industries and improve lives.
          </p>
          <p className="text-lg font-normal leading-relaxed">
          With 5+ years of hands-on experience, I specialize in web development, building scalable and real-time applications that push the boundaries of what&apos;s possible. I have a deep focus on emerging technologies, particularly in Web3, where I explore decentralized systems and blockchain integration. Additionally, I&apos;m actively exploring the powerful potential of AI and Machine Learning, further enriching my skills as a Computer Science student at the Federal University of Lafia.
          </p>
          <p className="text-lg font-normal leading-relaxed">
          Beyond coding, I stay ahead of the curve by keeping up with the latest industry trends, including innovations in Google Gemini, which I leverage to bring cutting-edge solutions to the table. I&apos;m always eager to collaborate on projects that challenge the status quo and drive meaningful change.
          </p>
       <p className="text-lg font-normal leading-relaxed text">
  Whether you&apos;re building the next big thing in Web3, launching a bold startup, or just need a skilled engineer to bring your vision to life — I&apos;m ready to help turn ideas into reality.
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
