import React from "react";
import { workExperience } from "@/data";
import { Button } from "@/components/ui/moving-border";

const Experience = () => {
  return (
    <div className="py-20 w-full bg-white dark:bg-black transition-colors duration-300">
      <p className="text-4xl sm:text-7xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-b from-gray-400 to-gray-200">
        My Work Experience
      </p>

      <div className="w-full mt-12 px-8 sm:px-12 lg:px-20 max-w-7xl mx-auto grid lg:grid-cols-4 grid-cols-1 gap-10">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              background:
                "linear-gradient(90deg, rgba(245,245,245,1) 0%, rgba(235,235,235,1) 100%)",
              borderRadius: `calc(1.75rem * 0.96)`,
            }}
            className="flex-1 bg-white dark:bg-neutral-900 dark:border-neutral-800 shadow-md transition-colors duration-300"
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <img
                src={card.thumbnail}
                alt={card.title}
                className="lg:w-32 md:w-20 w-16 rounded-full"
              />
              <div className="lg:ms-5">
           
                {card.timeline && (
                  <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                    {card.timeline}
                  </div>
                )}
                <h1 className="text-start text-xl md:text-xl font-bold text-neutral-900 dark:text-white">
                  {card.website ? (
                    <a
                      href={card.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      {card.title}
                    </a>
                  ) : (
                    card.title
                  )}
                </h1>
                <p className="text-start mt-3 font-semibold text-neutral-700 dark:text-neutral-300">{card.desc}</p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;
