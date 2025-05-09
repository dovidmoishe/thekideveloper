import noimage from "@/public/noimage.png"
import lalita from '@/public/lalita.png'
import EduLearn from '@/public/EduLearn.png'
import promptlybuilt from "@/public/promptlybuilt.png"
import GracedCouture from "@/public/GracedCouture.png"

const navItems = [
  { name: "Home", link: "/" },
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

const services = [
  {
    id: "1",
    title: "Smart contract dev",
    description: "I build secure and scalable smart contracts on Ethereum and Solana, tailored for your project's needs.",
    link: `https://wa.me/2349014891014?text=Hi%2C%20I'm%20interested%20in%20your%20smart%20contract%20development%20service%20on%20Ethereum%20and%20Solana.
`
  },
  {
    id: "2",
    title: "dApp UI development",
    description: "I build stunning and modern dApp UI's that projects your idea in a visually appealing manner",
    link:  `https://wa.me/2349014891014?text=Hi%2C%20I'm%20interested%20in%20your%20service%20for%20building%20a%20stunning%20and%20modern%20dApp%20UI%20for%20my%20project.`

  },
  {
    id: "3",
    title: "Full-stack web app",
    description: "I build professional, modern, scalable, and fast web apps tailored to your needs.",
    link: `https://wa.me/2349014891014?text=Hi%2C%20I'm%20interested%20in%20your%20full-stack%20web%20app%20development%20service.`
  },
  {
    id: "4",
    title: "Web development tutor",
    description: "I offer personalized web development tutoring sessions, based on your learning pace and goals.",
    link: `https://wa.me/2349014891014?text=Hi%2C%20I'm%20interested%20in%20your%20web%20development%20tutoring%20sessions.`
  },
  {
    id: "5",
    title: "AI-powered app development",
    description: "I build AI-powered applications that leverage the latest advancements in machine learning and natural language processing.",
    link: `https://wa.me/2349014891014?text=Hi%2C%20I'm%20interested%20in%20your%20AI-powered%20app%20development%20service.`
  }
]

const projects = [
  {
    title: "EduLearn",
    des: "Fostering critical-thinking and gamified learning through AI and rewards.",
    img: EduLearn,
    url: "https://edulearnsol.vercel.app"
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
    title: "Graced Couture",
    des: "An e-commerce website for a christian clothing brand",
   img: GracedCouture,
   url: ""
   },
  {
    title: "PakDropify",
    des: "PakDropify is a dashboard for pakistani dropshippers",
    img: noimage,
    url: "https://github.com/dovidmoishe/pakdropify"
  }
  // {
  //   title: "StudentHubX",
  //   des: "StudentHubX is a platform designed to empower university students worldwide by creating a space that enhances academic performance, fosters connections, and promotes skill development. ",
  //   img: studentHubX,
  //   url: "https://studenthubx.vercel.app/",
  // },
  // {
  //   title: "GloryousDecor Rentals website",
  //   des: "A website for a events decor rental business in Chicago, USA, built based on requirements by client.",
  //   img: rentals,
  //   url: "https://gloryousdecorentals.vercel.app",
  
  // },
  // {
  //   title: "Lamecon website",
  //   des: "A website for the organization I volunteer at here in Lafia, built by Myself and another developer of the Lamcon TechHub team.",
  //   url: "https://lamecon.vercel.app",
  //   img: lamecon,
  // },
  // {
  //   title: "NFT Collection",
  //   des: "A simple react web app for minting of NFTs, I built this project while learning solidity in 2022. Not one of my proudest projects tho😅",
  //   url: "https://nft-collection-react.netlify.app/",
  //   img: nftcollection,

  // },
  // {
  //   title: "A Full-stack todo app",
  //   des: "This was a project I built in the early stages of my JavaScript Journey, but as soon as I learned to write server-side development with JavaScript I took it as the first project to add backend functionality to back then in 2022.",
  //   url: "https://github.com/dovidmoishe/Fullstack-todo-app",
  //   img: noimage,
  // },
  // {
  //   title: "Challenge App", 
  //   des: "An app(I only coded the backend tho) where you could share your journey on a specific challenge, for you could join the #100daysofcode challenge and post your progress everyday. Although today I admit that my knowledge of building effiecient applications was very limited back then.",
  //   url: "https://github.com/dovidmoishe/challenge-app-backend",
  //   img: noimage,
  // }
];

const workExperience = [
  {
    id: 0,
    title: "Founder & Tech lead at EduLearn",
    desc: "Building a groundbreaking platform that fosters critical-thinking and gamified learning through AI and on-chain rewards.",
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

export { services, navItems, projects, workExperience };
