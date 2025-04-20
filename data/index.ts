
import rentals from "@/public/rentals.png"
import lamecon from "@/public/lamecon.png"
import nftcollection from "@/public/nft-collection.png"
import noimage from "@/public/noimage.png"
import studentHubX from "@/public/studenthubx.vercel.app_.png"
import lalita from '@/public/lalita.png'
import EduLearn from '@/public/EduLearn.png'
import promptlybuilt from "@/public/promptlybuilt.png"
const titleWords = [
  "Software Engineer",
  "Founder",
  "AI engineer",
  "Web3 developer",
  "Content Creator ✝",
];

const imagesForHero = ["/david .jpg", "/DavidBaiye.jpg", "/DavidBaiye2.jpg"];

const navItems = [
  { name: "Home", link: "/" },
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

const projects = [
  {
    title: "EduLearn",
    des: "An AI-powered learning platform that guides students through interactive problem-solving, rewarding progress with XP, tokens, and NFTs.",
    img: EduLearn,
    url: "https://www.youtube.com/watch?v=gufnVLfPKw0&t=2s"
  },
  {
    title: "PromptlyBuilt",
    des: "Build a stunning portfolio website with the power of prompts. One prompt, one beautiful portfolio. Supercharge your online presence with the power of prompts.",
    url: "https://promptlybuilt.vercel.app",
    img: promptlybuilt
  },
  {
    title: "Lalita",
    des: "Lalita is a modern, student-focused financial platform designed to help users save, learn, and access essential financial services with ease.",
    img: lalita,
    url: "https://lalita-fhg.vercel.app/",
  },
  {
    title: "StudentHubX",
    des: "StudentHubX is a platform designed to empower university students worldwide by creating a space that enhances academic performance, fosters connections, and promotes skill development. ",
    img: studentHubX,
    url: "https://studenthubx.vercel.app/",
  },
  {
    title: "GloryousDecor Rentals website",
    des: "A website for a events decor rental business in Chicago, USA, built based on requirements by client.",
    img: rentals,
    url: "https://gloryousdecorentals.vercel.app",
  
  },
  {
    title: "Lamecon website",
    des: "A website for the organization I volunteer at here in Lafia, built by Myself and another developer of the Lamcon TechHub team.",
    url: "https://lamecon.vercel.app",
    img: lamecon,

  },
  {
    title: "NFT Collection",
    des: "A simple react web app for minting of NFTs, I built this project while learning solidity in 2022. Not one of my proudest projects tho😅",
    url: "https://nft-collection-react.netlify.app/",
    img: nftcollection,

  },
  {
    title: "A Full-stack todo app",
    des: "This was a project I built in the early stages of my JavaScript Journey, but as soon as I learned to write server-side development with JavaScript I took it as the first project to add backend functionality to back then in 2022.",
    url: "https://github.com/dovidmoishe/Fullstack-todo-app",
    img: noimage,
  },
  {
    title: "Challenge App", 
    des: "An app(I only coded the backend tho) where you could share your journey on a specific challenge, for you could join the #100daysofcode challenge and post your progress everyday. Although today I admit that my knowledge of building effiecient applications was very limited back then.",
    url: "https://github.com/dovidmoishe/challenge-app-backend",
    img: noimage,
  }
];

const workExperience = [
  {
    id: 0,
    title: "Founder & Tech lead at StudentHubX",
    desc: "Building a platform that empowers university students worldwide.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 1,
    title: "Junior Frontend Engineer at isitsafe.io",
    desc: "Assisted in the development of the web-based platform using Next.JS, TypeScript, AntD, This has by-far been the best work experience I've ever had.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Freelance Software Engineer",
    desc: "I have built web apps for 4+ clients based on their proposed needs assessment.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 3,
    title: "Software Engineer at LAMECON",
    desc: "Building solutions for the ambitions of the organisation.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  
]

export { titleWords, imagesForHero, navItems, projects, workExperience };
