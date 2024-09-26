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
import climbingIcon from "../assets/hobbyIcons/carrabiner.png";
import cookingIcon from "../assets/hobbyIcons/chef.png";
import readingIcon from "../assets/hobbyIcons/book.png";

export const resumeData = {
  education: [
    {
      years: "2023 - 2024",
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
    title: "Ability to Learn and Adapt",
    description:
      "I am quick to learn new technologies, as I find them both inspiring and motivating.",
  },
  {
    title: "Problem-Solving Skills",
    description:
      "I quickly identify and resolve issues to optimize performance and keep things running smoothly.",
  },
  {
    title: "Project Management",
    description:
      "I am organized and ensure projects stay on track, delivering quality code on time.",
  },
  {
    title: "Attention to Detail",
    description:
      "Writing clean, well-structured code is a priority for me, ensuring maintainability and easy collaboration.",
  },
  {
    title: "Data-Driven Approach",
    description:
      "I leverage data insights to optimize performance and elevate the overall user experience",
  },
  {
    title: "Client-Focused Approach",
    description:
      "I prioritize user-friendly design, designing interfaces that align technical requirements with user needs.",
  },
  {
    title: "Strong Collaboration",
    description:
      "I thrive in team environments, encouraging clear communication and effective collaboration.",
  },
  {
    title: "Big Picture and Detail Orientation",
    description:
      "Balancing the overall project vision with finer details, I address challenges effectively to keep things on track.",
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
    title: "Recipe keeper",
    description:
      "When building this React app, I ventured into developing a Node.js backend as an experimental project to support the frontend. This project enhanced my skills in full-stack development, including React Router for navigation, API integration, state management, and asynchronous programming. The app enables users to discover, create, and manage recipes, providing a seamless user experience through the integration of both server-stored and internet-sourced data.",
    techStack: [
      "React",
      "React Router",
      "HTML",
      "CSS3",
      "JavaScript",
      "API Integration",
      "Node.js",
      "Express",
    ],
    keyFeatures: [
      {
        name: "Component-Based Architecture",
        description: "Creates modular and maintainable code.",
      },
      {
        name: "React Router for Routing",
        description: "Implements nested and dynamic routes.",
      },
      {
        name: "Dynamic Data Loading",
        description:
          "Implements loaders and actions to fetch and manage data dynamically.",
      },
      {
        name: "Error Handling with React Router",
        description:
          "Provides custom error pages based on different HTTP statuses.",
      },
      {
        name: "Server Communication",
        description:
          "Utilizes the fetch API for server communication, including CRUD operations for recipes.",
      },
      {
        name: "Styling with CSS Modules",
        description: "Ensures scoped and maintainable styles.",
      },
      {
        name: "API Integration",
        description: "Connects to external APIs for recipe data.",
      },
      {
        name: "Form Validation",
        description:
          "Prevents invalid data submission and provides real-time feedback to users.",
      },
      {
        name: "Node.js Backend",
        description:
          "Manages HTTP requests and recipe data with RESTful APIs built using Express.js.",
      },
      {
        name: "Backend File-Based Data Storage",
        description:
          "Manages recipe data on the server side using a JSON file and Node.js' fs module.",
      },
      {
        name: "Express Routing",
        description:
          "Manages CRUD operations and routes for fetching random recipes and titles.",
      },
    ],
    git: "https://github.com/AnetaFalkowska/Recipe-keeper",
    link: "https://recipe-keeper-af.onrender.com",
    imgDesktop: "/projects/Recipe_desktop.PNG",
    imgTablet: "/projects/Recipe_tablet.PNG",
    imgMobile: "/projects/Recipe_mobile.PNG",
  },
  {
    id: "p2",
    title: "Interval Timer",
    description: `I built this app as an experiment to dive into asynchronous programming and state management using pure JavaScript. This project helped me refine skills in DOM manipulation, local data management, and integrating libraries and frameworks. The app allows users manage and customize interval-based workouts with automated phase timing and transitions.`,
    techStack: ["JavaScript", "HTML", "CSS3", "Bootstrap"],
    keyFeatures: [
      {
        name: "Modular Code Structure",
        description:
          "Divides functionality (validation, time conversion, data handling) into reusable modules.",
      },
      {
        name: "Local Storage",
        description: "Used to save user-generated exercises.",
      },
      {
        name: "Asynchronous Control with Promise Chaining",
        description:
          "Uses promise chaining to manage the sequential flow of exercise phases, simplifying asynchronous control flow.",
      },
      {
        name: "Dynamic DOM Management",
        description:
          "Creates and updates the DOM dynamically, managing forms and UI elements based on user interactions.",
      },
      {
        name: "Countdown Feature",
        description:
          "Includes audio cues for phase transitions using the HTML5 Audio API.",
      },
      {
        name: "Form Validation",
        description:
          "Prevents invalid data from being saved and provides feedback to the user.",
      },
      {
        name: "Bootstrap UI Components",
        description:
          "Ensures a responsive, consistent UI for user interactions.",
      },
      {
        name: "Modal Dialogs",
        description:
          "Utilizes Bootstrap modal dialogs for operations such as saving exercises and confirming deletions.",
      },
    ],
    git: "https://github.com/AnetaFalkowska/Interval-Timer-App",
    link: "https://interval-timer-app.onrender.com",
    imgDesktop: "/projects/Interval_desktop.PNG",
    imgTablet: "/projects/Interval_tablet.PNG",
    imgMobile: "/projects/Interval_mobile.PNG",
  },
  {
    id: "p3",
    title: "Portfolio Web Application",
    description:
      "This project allowed me to refine my knowledge of React, component-based architecture, and responsive design. It features up-to-date frontend methods, employing TypeScript for type safety and Tailwind CSS for efficient styling.",
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
        name: "React Router for Navigation",
        description:
          "Creates a single-page experience with separate routes for different sections",
      },
      {
        name: "TypeScript Integration",
        description:
          "Components built with TypeScript for enhanced type safety and reduced runtime errors.",
      },
      {
        name: "Modular Components",
        description:
          "Follows DRY principles by using reusable components, making the codebase easier to maintain.",
      },
      {
        name: "Tailwind CSS with tailwind-merge and buttonStyles Utility",
        description:
          "Ensures streamlined class management and consistent styling, with reusable button variants for a cohesive UI.",
      },
      {
        name: "Dynamic Data Rendering",
        description:
          "Update content easily via external data files without changing core components.",
      },
      {
        name: "Responsive Carousel",
        description: "Displays key skills using react-slick carousel.",
      },
    ],
    git: "https://github.com/AnetaFalkowska/personal-website",
    link: "https://falkowska-portfolio.onrender.com",
    imgDesktop: "/projects/Portfolio_desktop.PNG",
    imgTablet: "/projects/Portfolio_tablet.PNG",
    imgMobile: "/projects/Portfolio_mobile.PNG",
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
