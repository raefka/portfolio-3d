import {
    backend,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    Aftercodelogo,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Frontend Developer",
      icon: web,
    },
    
    {
      title: "Backend Developer",
      icon: backend,
    },
    
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    
   
  ];
  
  const experiences = [
    {
      title: "Next.js Developer",
      company_name: "Aftercode",
      icon: Aftercodelogo,
      iconBg: "#383E56",
      date: "July 2024 - August 2024",
      points: [
        "Developing interactive front-end components with React.js and Next.js.",
        "Integrating modern interfaces with Tailwind CSS and Shadcn UI.",
        "Enhancing the user experience with smooth animations using Framer Motion",
      ],
    }, {
      title: "Fullstack Developer",
      company_name: "Aftercode",
      icon: Aftercodelogo,
      iconBg: "#383E56",
      date: "April 2025 - May 2025",
      points: [
        "Developing B2B/B2C application for animal services.",
        "Integrating modern interfaces with Tailwind CSS and Shadcn UI.",
        "Enhancing the user experience with smooth animations using Framer Motion",
        "Converting Figma prototypes into functional, pixel-perfect, and responsive pages."
      ],
    }
    
  ];
  
  
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Nextjs",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/raefka/car-showcase",
    },
    {
      name: "Travel page",
      description:
        "Web application that enables users to search for places that you can visit , and enjoy the breathtaking sights.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "TypeScript",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind css",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/raefka/travel-app",
    },
    {
      name: "Event App",
      description:
        "A comprehensive event booking platform that allows users to book events , create  and enjoy learning  for popular courses.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/raefka/event-app",
    },
  ];
  
  export { services, technologies, experiences, projects };