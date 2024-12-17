import React from "react";
import { StaticImageData } from "next/image";
import Image from "next/image";
import { projects } from "@/data";
import { useRouter } from "next/navigation";

interface CardProps {
  image: StaticImageData;
  name: string;
  description: string;
  icons: StaticImageData[];
  url: string;
}

const Card: React.FC<CardProps> = ({ image, name, description, icons, url }) => {
  const router = useRouter();

  return (
    <div
      className="w-full sm:w-auto max-w-sm rounded-lg shadow-lg overflow-hidden border border-gray-700 bg-gray-800 transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
      onClick={() => router.push(url)}
      aria-label={`Project: ${name}`}
    >
      <div className="relative">
        <Image
          src={image}
          alt={name}
          className="w-full h-48 object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100">
          <button
            className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              router.push(url);
            }}
          >
            Check Live Site
          </button>
        </div>
      </div>
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2 text-white">{name}</h2>
        <p className="text-gray-300 mb-4">{description}</p>
        <div className="flex justify-start items-center gap-3 mt-4">
          {icons.map((icon, i) => (
            <div
              key={i}
              className="rounded-full border-2 bg-white border-gray-600 p-2 transition-transform duration-300 hover:scale-110"
            >
              <Image
                src={icon}
                width={30}
                height={30}
                alt={`icon ${i}`}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div className="p-8 bg-black min-h-screen">
      <h1 className="text-4xl sm:text-7xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-b from-gray-400 to-gray-200">
        My Projects
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Card
            key={project.title}
            name={project.title}
            description={project.des}
            image={project.img}
            icons={project.iconLists}
            url={project.url}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
