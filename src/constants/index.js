import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
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
  {
    id: "cv",
    title: "CV",
    href: "/cv.pdf",
    external: true,
  },
];

const services = [
  {
    title: "Web Development",
    icon: web,
  },
  {
    title: "Freelance",
    icon: mobile,
  },
  {
    title: "Video Editor",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
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
    name: "Redux Toolkit",
    icon: redux,
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
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "BSc. (Hons) Information Technology Specialized in Software Engineering",
    company_name: "Sri Lanka Institute of Information Technology (SLIIT) ",
    icon: starbucks,
    iconBg: "#383E56",
    date: "October 2022 - Present",
    points: [
      "Currently reading for my Bachelors' Degree in Software Engineering (Bsc.(Hons) Information Technology Specialization in Software Engineering) at SriLanka Institute of Information Technology (SLIIT)",

    ],
  },
  {
    title: "Advanced Level",
    company_name: "Maris Stella College",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "2016 - 2019",
    points: [
      "Passed General Certificate Advanced Level Exam in Technology stream with  B (Science for Technology) and 2 C (Engineering Technology, Higher Maths) Passes",
    
    ],
  },
  {
    title: "Ordinary Level",
    company_name: "Maris Stella College",
    icon: tesla,
    iconBg: "#383E56",
    date: "2006-2016",
    points: [
      "Passed General Certificate Ordinary Level Exam with 5 A and 4 B passes",
      
    ],
  },

];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Country Explorer",
    description:
      "A modern, interactive web application for exploring and comparing countries around the world. Built with React, Vite, and the REST Countries API, this application provides a rich user experience for discovering country information, comparing statistics, and visualizing data.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/SE1020-IT2070-OOP-DSA-25/af-2-LasMinruk.git",
  },
  {
    name: "Personal Finance Tracker - A MERN Stack Api",
    description:
      "This is a full-stack Personal Finance Tracker application built with the MERN stack (MongoDB, Express, React, Node.js). It allows users to securely manage their income, expenses, budgets, and financial goals, providing insights into their spending habits and helping them achieve their financial objectives.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/SE1020-IT2070-OOP-DSA-25/project-LasMinruk",
  },
  {
    name: "Minruk Vehicle Care",
    description:
      "Minruk Vehicle Care – A real-world, tech-driven solution for effortless vehicle cleaning!  Key Features: Seamless Online Booking – Schedule a car wash in seconds.Automated Invoice System – Customers receive instant invoices for transparency. Secure Admin Dashboard – Manage bookings, customer details, and analytics.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://www.linkedin.com/feed/update/urn:li:activity:7291209485925171201/",
  },

  





  
];

export { services, technologies, experiences, testimonials, projects };
