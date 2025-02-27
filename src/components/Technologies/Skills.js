import { DiAndroid, DiTerminal, DiJava, DiHtml5, DiAngularSimple, DiReact, DiDotnet } from "react-icons/di";
import { SiFirebase, SiGit, SiDart, SiCss3, SiMysql, SiAmazonaws, SiMongodb, SiGooglecloud, SiExpress, SiNodedotjs, SiPython, SiMaterialdesign, SiTailwindcss, SiMui, SiPostgresql, SiHeroku, SiMicrosoftazure, SiLinux, SiDocker, SiVercel, SiRailway, SiNetlify } from "react-icons/si";
import { RiFlutterFill } from "react-icons/ri";
import { TbBrandKotlin } from "react-icons/tb";

export const Skills = [
 /*  {
    slug: "android",
    Component: DiAndroid,
    title: "Android",
    Description: () => <>Android Apps, ROMs, & Kernels</>,
  }, */
  {
    slug: "flutter",
    Component: RiFlutterFill,
    title: "Flutter",
    Description: () => <>Cross-platform app development</>,
  },
/*   {
    slug: "kotlin",
    Component: TbBrandKotlin,
    title: "Kotlin",
    Description: () => <>Android apps</>,
  }, */
  /* {
    slug: "dart",
    Component: SiDart,
    title: "Dart",
    Description: () => <>Flutter apps only</>,
  }, */
  {
    slug: "angular",
    Component: DiAngularSimple,
    title: "Angular",
    Description: () => <>Frontend framework for web apps</>,
  },
  {
    slug: "react",
    Component: DiReact,
    title: "ReactJS",
    Description: () => <>Framework for frontend development</>,
  },
  {
    slug: "material",
    Component: SiMaterialdesign,
    title: "Material Design",
    Description: () => <>UI Design</>,
  },
  {
    slug: "tailwind",
    Component: SiTailwindcss,
    title: "Tailwind CSS",
    Description: () => <>Utility-first CSS framework.</>,
  },
  {
    slug: "MUI",
    Component: SiMui,
    title: "MUI",
    Description: () => <>React UI library based on Material Design</>,
  },

  {
    slug: "express",
    Component: SiExpress,
    title: "ExpressJS",
    Description: () => <>Minimalist Backend framework</>,
  },
  {
    slug: "node",
    Component: SiNodedotjs,
    title: "NodeJS",
    Description: () => <>Builds scalable server-side apps</>,
  },
  {
    slug: "dotnet",
    Component: DiDotnet,
    title: ".NET",
    Description: () => <>Scalable and high-performance backend services</>,
  },

  {
    slug: "mongodb",
    Component: SiMongodb,
    title: "MongoDB",
    Description: () => <>NoSQL Storing client and user data</>,
  },

  {
    slug: "postgresql",
    Component: SiPostgresql,
    title: "PostgreSQL",
    Description: () => <>SQL Storing client and user data</>,
  },
  {
    slug: "gcp",
    Component: SiGooglecloud,
    title: "Google Cloud Platform",
    Description: () => <>Google Cloud Platform</>,
  },
  {
    slug: "heroku",
    Component: SiHeroku,
    title: "Heroku",
    Description: () => <>BaaS</>,
  },
  {
    slug: "firebase",
    Component: SiFirebase,
    title: "Firebase",
    Description: () => <>Backend-as-a-Service for web and mobile apps.</>,
  },
  {
    slug: "azure",
    Component: SiMicrosoftazure,
    title: "Azure",
    Description: () => <>Cloud computing platform</>,
  },
  {
    slug: "vercel",
    Component: SiVercel,
    title: "Vercel",
    Description: () => <>Frontend application deployment</>,
  },
  {
    slug: "Railway",
    Component: SiRailway,
    title: "Railway",
    Description: () => <>Web apps deployment</>,
  },
  {
    slug: "Netlify",
    Component: SiNetlify,
    title: "Netlify",
    Description: () => <>Web apps deployment</>,
  },
  {
    slug: "python",
    Component: SiPython,
    title: "Python",
    Description: () => <>Fast development and scalability</>,
  },
  {
    slug: "git",
    Component: SiGit,
    title: "Git",
    Description: () => <>Code management and contributions</>,
  },
  {
    slug: "linux",
    Component: SiLinux,
    title: "Linux",
    Description: () => <>Servers and development environments</>,
  },
  {
    slug: "docker",
    Component: SiDocker,
    title: "Docker",
    Description: () => <>Containers for application deployment.</>,
  },
];
