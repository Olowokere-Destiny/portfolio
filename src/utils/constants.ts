import fashionFusion from "../assets/images/fashion_fusion_screenshot.png";
import paradiseView from "../assets/images/paradise_view_screenshot.png";
import routify from "../assets/images/routify-screenshot.png";
import evVoltedge from "../assets/images/voltedge_screenshot.png";
import htmlIcon from "../assets/images/html-icon.svg";
import cssIcon from "../assets/images/css-icon.svg";
import bootstrapIcon from "../assets/images/bootstrap-icon.svg";
import tailwindIcon from "../assets/images/tailwind-icon.svg";
import jsIcon from "../assets/images/js-icon.svg";
import gitIcon from "../assets/images/git-icon.svg";
import tsIcon from "../assets/images/typescript-icon.svg";
import reactIcon from "../assets/images/react-icon.svg";
import nextjsIcon from "../assets/images/nextjs-icon.png";
import nodejsIcon from "../assets/images/node-icon.svg";
import expressIcon from "../assets/images/express-icon.svg";
import mongodbIcon from "../assets/images/mongodb-icon.svg";
import socketIcon from "../assets/images/socket-icon.svg";
import jestIcon from "../assets/images/jest.png";
import rtlIcon from "../assets/images/rtl.jpeg";
import framerMotionIcon from "../assets/images/framer-motion-icon.png";
import gsapIcon from "../assets/images/gsap-icon.png";
import teemCover from "../assets/images/teem-cover-image.png";
import { SingleProjectProps } from "./types";
export const navLinks = [
  {
    href: "#skills",
    text: "skills",
  },
  {
    href: "#projects",
    text: "projects",
  },
  {
    href: "#contact",
    text: "contact me",
  },
];

export const projects: SingleProjectProps[] = [
  {
    title: "Teem",
    description:
      "Teem is a collaboration platform I built to help remote teams work together more efficiently! Features include real-time messaging, task management, built-in meetings and more!",
    liveUrl: "https://teem-work.onrender.com",
    codeUrl: "https://github.com/Olowokere-Destiny/teem",
    hasDemoVideo: true,
    demoVideoUrl: "/teem_demo.mp4",
    demoPlaceholder: teemCover,
  },
  {
    title: "EV Voltedge - Animated Landing Page",
    image: evVoltedge,
    description:
      "EV Voltedge is a concept landing page for an EV company with sleek animations and transitions using GSAP. It is optimized for performance, fast loading times and SEO. Animations are conceptualized by me.",
    liveUrl: "https://voltedge-ev.vercel.app",
    codeUrl: "https://github.com/Olowokere-Destiny/ev-voltedge",
  },
  {
    title: "Fashion Fusion",
    description:
      "This is a clothing and fashion website where you can search and buy your favourite clothing apparels. Just type into the search bar and discover millions of clothing and brands!",
    image: fashionFusion,
    liveUrl: "https://fashion-fushion.vercel.app",
    codeUrl: "https://github.com/Olowokere-Destiny/fashion-fushion",
  },
  {
    title: "Paradise View",
    description:
      "This is a property booking website (similar to BOOKING.com) where you can search for hotels, apartments, hostels and more around the globe.",
    image: paradiseView,
    liveUrl: "https://paradise-view-green.vercel.app",
    codeUrl: "https://github.com/Olowokere-Destiny/paradise-view",
  },
  {
    title: "Routify",
    description:
      "A modern, real-time GPS route tracking and mapping application. Create, save, and manage routes with secure cloud sync and cross-device access.",
    image: routify,
    liveUrl: "https://routifygps.vercel.app",
    codeUrl: "https://github.com/Olowokere-Destiny/routify",
  },
];

export const icons = [
  { icon: htmlIcon, name: "HTML5" },
  { icon: cssIcon, name: "CSS3" },
  { icon: bootstrapIcon, name: "Bootstrap" },
  { icon: tailwindIcon, name: "TailwindCSS" },
  { icon: jsIcon, name: "JavaScript" },
  { icon: tsIcon, name: "TypeScript" },
  { icon: gitIcon, name: "Git" },
  { icon: reactIcon, name: "ReactJS" },
  { icon: nextjsIcon, name: "Next JS" },
  { icon: nodejsIcon, name: "Node.js" },
  { icon: expressIcon, name: "ExpressJS" },
  { icon: mongodbIcon, name: "MongoDB" },
  { icon: socketIcon, name: "Socket.io" },
  { icon: jestIcon, name: "Jest" },
  { icon: rtlIcon, name: "React Testing Library" },
  { icon: framerMotionIcon, name: "Framer Motion" },
  { icon: gsapIcon, name: "GSAP" },
];
