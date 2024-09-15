import reactIcon from "../assets/techIcons/atom.png";
import jsIcon from "../assets/techIcons/js.png";
import htmlIcon from "../assets/techIcons/html.png";
import cssIcon from "../assets/techIcons/css.png";
import cIcon from "../assets/techIcons/c.png";
import gitIcon from "../assets/techIcons/git.png";
import twIcon from "../assets/techIcons/tailwind.png";
import tsIcon from "../assets/techIcons/typescript.png";
import reduxIcon from "../assets/techIcons/redux.png";
import routerIcon from "../assets/techIcons/router.png";
import bootstrapIcon from "../assets/techIcons/bootstrap.png";
import cyclingIcon from "../assets/hobbyIcons/exercise.png";
import climbingIcon from "../assets/hobbyIcons/clipart553145.png";
import cookingIcon from "../assets/hobbyIcons/chef.png";
import readingIcon from "../assets/hobbyIcons/book1.png";

export const resumeData = {
  education: [
    {
      years: "2022 - 2024",
      entity: "Self-study - Web Development",
      details:
        "Focused on learning JavaScript, React and modern web technologies",
    },
    {
      years: "2004 - 2009",
      entity: "Cracow University of Economics",
      details:
        "Field of Study: International Relations, Specialization: Foreign Trade",
    },
    {
      years: "2007 - 2008",
      entity: "Pablo de Olavide University Sevilla",
      details: "Erasmus Exchange Program",
    },
    {
      years: "2000 - 2004",
      entity: "II General Secondary School in Jaworzno",
      details: "Mathematics and Computer Science profile",
    },
  ],
  experience: [
    {
      years: "2017-2022",
      title: "Team Leader, Key Account Management",
      entity: "RR Donnelley",
      description: [
        "Managed a dedicated team responsible for the comprehensive service of the Stryker account across Europe and beyond.",
        "Coordinated projects related to the implementation of new products, adhering to the high standards of the automotive industry (PPAP).",
        "Successfully led change management initiatives for Stryker, navigating strict client regulations.",
        "Collaborated with client units across different regions, requiring adaptation to local needs and standards.",
      ],
    },
    {
      years: "2014-2017",
      title: "Key Accounts Project Leader",
      entity: "RR Donnelley",
      description: [
        "Led the onboarding process for new clients, establishing collaboration frameworks and ensuring successful integration into the company’s services.",
        "Worked closely with internal departments and external partners to ensure seamless project execution.",
        "Worked on improving production and delivery processes, optimizing shipment routes, and reducing lead times.",
      ],
    },
    {
      years: "2008 - 2014",
      title: "Customer Service Specialist",
      entity: "RR Donnelley",
      description: [
        "Provided comprehensive order management for Nokia, ensuring compliance with high standards and coordinating with production facilities across Europe.",
        "Maintained regular communication with clients and production sites, ensuring clear understanding of client requirements and timely delivery of products.",
        "Gained deep expertise in the ERP system designed for Nokia, collaborated on system enhancements, leveraging insights from daily use to suggest and implement improvements.",
      ],
    },
  ],
};

export const skills = {
  technicalSkills: [
    { title: "JavaScript", level: "Advanced" },
    { title: "HTML", level: " Advanced" },
    { title: "CSS", level: "Advanced" },
    { title: "React", level: "Intermediate" },
    { title: "React Router", level: "Intermediate" },
    { title: "TypeScript", level: "Intermediate" },
    { title: "Tailwind", level: "Intermediate" },
    { title: "Redux", level: "Beginner" },
  ],
  softSkills: [
    "English - Advanced",
    "Client Relations",
    "Cross-functional Collaboration",
    "Process Optimization",
    "Data Analysis",
    "Problem-Solving",
    "Attention to Detail",
    "Project Management",
  ],
};

export const skillData = [
  {
    title: "Project Management Experience",
    description:
      "Efficiently organize tasks and deliver high-quality code on time.",
  },

  {
    title: "Client-Focused Approach",
    description:
      "Create user interfaces that meet both technical requirements and user expectations.",
  },
  {
    title: "Problem-Solving Skills",
    description:
      "Quickly identify and fix issues while optimizing application performance.",
  },
  {
    title: "Attention to Detail",
    description:
      "Write clean, maintainable code and thoroughly test applications.",
  },
  {
    title: "Ability to Learn and Adapt",
    description:
      "Stay current with the latest technologies and contribute innovative solutions.",
  },
  {
    title: "Communication and Collaboration Skills",
    description:
      "Facilitate effective teamwork and clear communication with different departments.",
  },
  {
    title: "Data-Driven Approach",
    description:
      "Optimize website performance and enhance user experiences based on real data.",
  },
  {
    title: "Big Picture and Detail Orientation",
    description:
      "Anticipate potential problems, connect facts, and resolve them effectively while keeping the overall vision in mind.",
  },
];

export const skillData1 = [
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
    name: "React Router",
    icon: routerIcon,
    description: "",
  },
  {
    name: "Redux",
    icon: reduxIcon,
    description: "",
  },
  {
    name: "Git",
    icon: gitIcon,
    description:
      "Maintaining project integrity with version control and branching strategies.",
  },
  {
    name: "C",
    icon: cIcon,
    description:
      "Building a foundation in low-level programming, memory management and data structures.",
  },
  {
    name: "Tailwind CSS",
    icon: twIcon,
    description: "Rapidly building responsive designs with Tailwind CSS.",
  },
  {
    name: "Bootstrap",
    icon: bootstrapIcon,
    description: "",
  },
];

export const hobbies = [
  {
    name: "Cycling",
    icon: cyclingIcon,
  },
  {
    name: "Climbing",
    icon: climbingIcon,
  },
  {
    name: "Cooking",
    icon: cookingIcon,
  },
  {
    name: "Reading",
    icon: readingIcon,
  },
];
