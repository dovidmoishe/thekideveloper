import React, { useState } from "react";
import { StaticImageData } from "next/image";
import Image from "next/image";
import { projects } from "@/data";
import { useRouter } from "next/navigation";
import { Card, CardDescription, CardTitle, Container } from "../cards-demo-3";
import Link from "next/link";
import { FaLink } from "react-icons/fa";
interface CardProps {
  image: StaticImageData;
  name: string;
  description: string;
  icons: StaticImageData[];
  url: string;
}
const Projects = () => {
  return (
    <div id="projects">
      <div className="p-8 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl sm:text-7xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r text-white">
          My Projects
        </h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card>
                  <Image
          src={project.img}
          alt={project.title}
          className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
          priority
        />

                  <CardTitle>
                    <div className="flex items-center justify-between"> 
                    {project.title}
                    <Link href={project.url}><FaLink /></Link>
                    </div>
                  </CardTitle>
                  <CardDescription>
                    {project.des}
                  </CardDescription>
                  
                </Card>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Projects;