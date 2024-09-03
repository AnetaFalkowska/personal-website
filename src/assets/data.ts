import reactIcon from "../assets/techIcons/atom.png";
import jsIcon from "../assets/techIcons/javascript-logo.png";
import htmlIcon from "../assets/techIcons/html.png";
import cssIcon from "../assets/techIcons/css.png";
import cIcon from "../assets/techIcons/c.png";
import gitIcon from "../assets/techIcons/git.png";
import twIcon from "../assets/techIcons/tailwind.png";
import tsIcon from "..//assets/techIcons/typescript.png";

export const education = [
  {
    time: "2022 - 2024",
    description: "Self study - web development",
  },
  {
    time: "2004 - 2009",
    description: "Uniwersytet Ekonomiczny w Krakowie - Handel Zagraniczny",
  },
  {
    time: "2007 - 2008",
    description: "Universidad Pablo de la Olavide - Erasmus",
  },
  {
    time: "2000 - 2004",
    description: "II Liceum Ogólnokształcące profil matematyczno-informatyczny",
  },
];

export const experience = [
  { time: "Oct. 2008 - Oct. 2022", description: "Customer Service Manager" },
  {
    time: "Oct. 2008 - Oct. 2009",
    description: "Project Leader for Key Clients",
  },
  { time: "Oct. 2008 - Oct. 2009", description: "Customer Service Specialist" },
  {
    time: "Oct. 2008 - Oct. 2008",
    description: "Junior Customer Service Specialist",
  },
];

export const skills = [
  { title: "JavaScript", value: 80 },
  { title: "TypeScript", value: 50 },
  { title: "HTML", value: 80 },
  { title: "CSS", value: 80 },
  { title: "React", value: 80 },
];

export const skillData = [
  {
    title: "Project Management",
    description:
      "Extensive experience in coordinating multi-phase projects, including new product implementation.",
  },
  {
    title: "Cross-Team Collaboration",
    description:
      "Effective communication and collaboration with teams from different countries and cultures, enabling successful work in remote and multicultural environments.",
  },
  {
    title: "Problem-Solving and Analysis",
    description:
      "Strong ability to identify issues and implement effective solutions, including in the context of ERP system enhancements.",
  },
  {
    title: "Key Account Management",
    description:
      "Extensive experience in handling major clients, including negotiation, relationship maintenance, and adapting services to meet their needs.",
  },
  {
    title: "Technology Adaptation",
    description:
      "Quick learner, currently gaining proficiency in frontend development, including HTML, CSS, JavaScript, and React.",
  },
  {
    title: "Holistic Problem-Solving",
    description:
      "Ability to approach challenges from both detailed and big-picture perspectives, leading to comprehensive and effective solutions.",
  },
  {
    title: "Task Optimization",
    description:
      "Applying skills in workflow optimization to enhance code efficiency and application performance.",
  },
  {
    title: "Systems Thinking",
    description:
      "Understanding how different components of a system interact, which is crucial in developing scalable and maintainable frontend architectures.",
  },
];

export const projectData = [
  {
    id: "p1",
    title: "Interval Timer",
    description:
      "Interval Timer is a functional app for managing workout intervals. It allows users to create and customize workout sessions, set times for preparation, work, rest, and cool-down, as well as the number of sets. The app provides options to save, edit, and delete predefined sessions.",
    techStack: ["JavaScript", "HTML", "CSS3", "Bootstrap"],
    keyFeatures: [
      {
        name: "Responsive Design",
        description: "Optimized for both mobile and desktop devices.",
      },
      {
        name: "Interval Customization",
        description: "Set and adjust interval times.",
      },
      {
        name: "Session Management",
        description: "Add, edit, and delete workout sessions.",
      },
      {
        name: "Easy Workout Start",
        description: "Option to start a workout immediately.",
      },
      {
        name: "Sound Alerts",
        description:
          " Notifies users with sound at the start and end of intervals.",
      },
      {
        name: "Countdown Animation",
        description: "Displays a visual countdown for each interval.",
      },
      {
        name: "Pause & Resume",
        description: "Lets users pause and resume the timer as needed.",
      },
      {
        name: "Reset Timer",
        description:
          "A reset button to restart the session from the beginning.",
      },
      {
        name: "Keyboard Shortcuts",
        description: "Enables timer control via keyboard commands.",
      },
      {
        name: "Local Storage",
        description: "Saves user settings and preferences for future sessions.",
      },
    ],
    link: "",
    image: "/IntervalTimer.PNG",
  },
  {
    id: "p2",
    title: "Recipe keeper",
    description:
      "Recipe Keeper is a comprehensive web application for managing and discovering recipes. It allows users to create, edit, and delete their own recipes, as well as search for recipes both locally and online. The application uses React Router for seamless navigation and dynamic content loading.",
    techStack: [
      "React",
      "React Router",
      "HTML",
      "CSS3",
      "JavaScript",
      "API Integration",
    ],
    keyFeatures: [
      {
        name: "Responsive Design",
        description: "Optimized for both mobile and desktop views.",
      },
      {
        name: "Asynchronous Data Fetching",
        description: "Utilizes React hooks for asynchronous data fetching.",
      },
      {
        name: "Recipe Management",
        description: "Users can create, modify, and remove recipes.",
      },
      {
        name: "Local Recipe Search",
        description: "Search personal recipes by title or ingredients.",
      },
      {
        name: "Online Recipe Search",
        description: "Search external recipe databases online.",
      },
      {
        name: "Random Recipe",
        description: "Display a random recipe for users to try.",
      },

      {
        name: "Search Interface",
        description: "Intuitive search bar for local and online recipes.",
      },
      {
        name: "Recipe Form Validation",
        description:
          "Ensure recipe titles are unique and meet length requirements; validate form data.",
      },
      {
        name: "Confirmation Modal",
        description: "Confirm actions like canceling recipe edits.",
      },
      {
        name: "Random Recipe",
        description: "Display a random recipe for users to try.",
      },

      {
        name: "Error Handling",
        description: "Custom error pages to handle different types of errors.",
      },
    ],
    link: "https://recipe-keeper-frontend.onrender.com",
    image: "/RecipeKeeper.PNG",
  },
  {
    id: "p3",
    title: "Portfolio Web Application",
    description:
      "The Portfolio Web Application is a modern website designed to showcase my skills, professional experiences, and projects. The application uses React Router for seamless navigation between different sections, such as Home, Projects, Resume, and Contact. The homepage features my profile, technical skills, and an overview of my projects.",
    techStack: [
      "React",
      "React Router",
      "HTML",
      "CSS3",
      "Tailwind CSS",
      "JavaScript",
      "TypeScript",
    ],
    keyFeatures: [
      {
        name: "Responsive Design",
        description: "Optimized for both mobile and desktop views.",
      },
      {
        name: "Router Navigation",
        description:
          "Seamless navigation between pages enabled by React Router.",
      },
      {
        name: "Custom Skill Slider",
        description:
          "Interactive skill slider built with react-slick, featuring custom navigation arrows.",
      },
      {
        name: "Button Styling with Tailwind Merge",
        description:
          "Button styled using twMerge and buttonStyles, allowing centralized style management and consistency across the application.",
      },
      {
        name: "Tailwind CSS Styling",
        description:
          "Utilizes Tailwind CSS for clean, responsive design and easy maintenance.",
      },
    ],
    link: "https://recipe-keeper-frontend.onrender.com",
    image: "/Portfolio-desktop.PNG",
  },
];

export const technologies = [
  {
    name: "React JS",
    icon: reactIcon,
    description:
      "Developing interactive single-page applications (SPAs) with efficient state management.",
  },
  {
    name: "JavaScript",
    icon: jsIcon,
    description:
      "Implementing asynchronous operations using Promises and async/await.",
  },
  {
    name: "TypeScript",
    icon: tsIcon,
    description:
      "Developing scalable applications with TypeScript, ensuring type safety and code quality.",
  },
  {
    name: "HTML5",
    icon: htmlIcon,
    description: "Crafting structured and semantic web pages.",
  },
  {
    name: "CSS3",
    icon: cssIcon,
    description: "Creating advanced layouts with Flexbox and CSS Grid.",
  },
  {
    name: "Git",
    icon: gitIcon,
    description:
      "Maintaining project integrity with version control and branching strategies.",
  },
  {
    name: "C Programming",
    icon: cIcon,
    description:
      "Building a foundation in low-level programming, memory management and data structures.",
  },
  {
    name: "Tailwind CSS",
    icon: twIcon,
    description: "Rapidly building responsive designs with Tailwind CSS.",
  },
];
