import {
  // blockService,
  // gearService,
  cubeService,
  icosahedronService,
  origamiFlowerService,
  ringService,
  act,
  sideupWhite,
  sideup,
  tah,
  bookRentalProject,
  clinicWebsite,
  budgetApp,
  faceDetectApp,
  taskHandlerApp,
  sideupDashboardV2,
  amanDashboard,
  sideupDashboardV3,
  linkedIn,
  githubSquare,
  resumeIcon,
  bachelorsDegree,
  completeWebDev,
  seniorWebDev,
  cLanguage,
  algorithms,
  ossa,
  cisa,
  jsCert,
  HTML5,
  CSS3,
  JavaScript,
  TypeScript,
  SASS,
  BootStrap,
  React,
  Angular,
  NextJS,
  Ionic,
  Jira,
  Firebase,
  NodeJS,
  Express,
  PHP,
  C,
  Python,
  Serverless,
  RESTfulAPIs,
  MachineLearning,
  ArtificialIntelligence,
  DataStructures,
  Algorithms,
  MySQL,
  PostgreSQL,
  MongoDB,
  Redis,
  Docker,
  Git,
  Github,
  AWS,
  Azure,
  GoogleCloud,
  Heroku,
  Bash,
  CICD,
  Figma,
  Threejs,
  pythonDev,
  beltoneHolding,
  dartSpace,
} from "../assets";

const navLinks = [
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

const personalDescription = `
As a seasoned Fullstack Engineer based in Cairo, I bring extensive
experience in leading frontend and backend development projects,
prioritizing user-centric design and seamless integration. Throughout my
journey at SideUp, advancing from Frontend Engineer to Senior Frontend
Engineer, I've demonstrated leadership by mentoring peers, conducting
thorough code reviews, and driving projects to success. Notably, my
pivotal role in developing a B2C shipping dashboard underscored my
proficiency in React, TypeScript, and Bootstrap, aligning closely with
user needs and market trends. My passion for software development shines
through my proactive pursuit of new technologies, evidenced by my
completion of various courses and certifications. I excel in quickly
learning and adapting to new environments, ensuring I remain at the
forefront of innovation and deliver excellence in every project.`;

const services = [
  {
    title: "Fullstack Developer",
    icon: ringService,
  },
  {
    title: "Webapp Developer",
    icon: origamiFlowerService,
  },
  {
    title: "Frontend Developer",
    icon: icosahedronService,
  },
  {
    title: "Backend Developer",
    icon: cubeService,
  },
];

const technologies = [
  {
    icon: HTML5,
    name: "HTML5",
  },
  {
    icon: CSS3,
    name: "CSS3",
  },
  {
    icon: JavaScript,
    name: "JavaScript",
  },
  {
    icon: TypeScript,
    name: "TypeScript",
  },
  {
    icon: SASS,
    name: "SASS",
  },
  {
    icon: BootStrap,
    name: "BootStrap",
  },
  {
    icon: React,
    name: "React",
  },
  {
    icon: Angular,
    name: "Angular",
  },
  {
    icon: NextJS,
    name: "NEXTJS",
  },
  {
    icon: Jira,
    name: "Jira",
  },
  {
    icon: Ionic,
    name: "Ionic",
  },
  {
    icon: Figma,
    name: "Figma",
  },
  {
    icon: Threejs,
    name: "Threejs",
  },
  {
    icon: NodeJS,
    name: "NodeJS",
  },
  {
    icon: Express,
    name: "Express",
  },
  {
    icon: PHP,
    name: "PHP",
  },
  {
    icon: C,
    name: "C",
  },
  {
    icon: Python,
    name: "Python",
    wip: true,
  },
  {
    icon: Serverless,
    name: "Serverless",
  },
  {
    icon: RESTfulAPIs,
    name: "RESTfulAPIs",
  },
  {
    icon: MachineLearning,
    name: "Machine Learning",
    wip: true,
  },
  {
    icon: ArtificialIntelligence,
    name: "Artificial Intelligence",
    wip: true,
  },
  {
    icon: DataStructures,
    name: "Data Structures",
  },
  {
    icon: Algorithms,
    name: "Algorithms",
  },
  {
    icon: MySQL,
    name: "MySQL",
  },
  {
    icon: PostgreSQL,
    name: "PostgreSQL",
  },
  {
    icon: MongoDB,
    name: "MongoDB",
  },
  {
    icon: Redis,
    name: "Redis",
  },
  {
    icon: Docker,
    name: "Docker",
  },
  {
    icon: Git,
    name: "Git",
  },
  {
    icon: Github,
    name: "GitHub",
  },
  {
    icon: Firebase,
    name: "Firebase",
  },
  {
    icon: AWS,
    name: "AWS",
    wip: true,
  },
  {
    icon: Azure,
    name: "Azure",
    wip: true,
  },
  {
    icon: GoogleCloud,
    name: "Google Cloud",
    wip: true,
  },
  {
    icon: Heroku,
    name: "Heroku",
  },
  {
    icon: Bash,
    name: "Bash",
  },
  {
    icon: CICD,
    name: "CI/CD",
  },
];

const experiences = [
  {
    title: "Frontend Engineer",
    company_name: "The Address Holding",
    link: "https://theaddressholding.com/",
    icon: tah,
    iconBg: "#383E56",
    date: "Nov 2024 - Present",
    points: [
      {
        title: "Internal system development",
        subtitle:
          "Built and maintained CRMs and HRMs using Next.js, focusing on performance, scalability, and maintainability.",
      },
      {
        title: "Project ownership",
        subtitle:
          "Spearheaded development of a property listing e-commerce website, authoring 85%+ of the production code.",
      },
      {
        title: "SEO optimization",
        subtitle:
          "Implemented server-side rendering and dynamic routing to maximize organic visibility and meet SEO best practices.",
      },
      {
        title: "Cross-functional collaboration",
        subtitle:
          "Worked closely with designers and backend teams to ensure seamless UI/UX and reliable system integration.",
      },
    ],
  },
  {
    title: "Senior Frontend Engineer",
    company_name: "SIDEUP",
    link: "https://eg.sideup.co/",
    icon: sideup,
    iconBg: "#E6DEDD",
    date: "Dec 2023 - Nov 2024",
    points: [
      {
        title: "Led and mentored junior engineers",
        subtitle:
          "Cultivated a collaborative environment, fostering skill development and productivity.",
      },
      {
        title: "Hands-on coding leadership",
        subtitle:
          "Prioritized efficient task distribution, tackled complex features, ensuring robust code quality.",
      },
      {
        title: "Stakeholder collaboration",
        subtitle:
          "Provided valuable insights, aligning dashboard direction with user needs and business objectives.",
      },
      {
        title: "Process optimization",
        subtitle:
          "Implemented initiatives to streamline workflows, enhance productivity, and ensure code efficiency and reliability.",
      },
    ],
  },
  {
    title: "Frontend Engineer",
    company_name: "SIDEUP",
    link: "https://eg.sideup.co/",
    icon: sideupWhite,
    iconBg: "#383E56",
    date: "Feb 2023 - Dec 2023",
    points: [
      {
        title: "Led frontend development",
        subtitle:
          "Spearheaded the creation of a cutting-edge B2C shipping dashboard using React, TypeScript, and Bootstrap, ensuring seamless integration with backend systems.",
      },
      {
        title: "Ensured optimal UX/UI",
        subtitle:
          "Collaborated with UX designers to create an intuitive design, enhancing user satisfaction and usability.",
      },
      {
        title: "Maintained system stability",
        subtitle:
          "Partnered with QA to conduct rigorous testing and debugging, ensuring high reliability and performance.",
      },
      {
        title: "Adapted to new tech",
        subtitle:
          "Quickly mastered Next.js and Material UI to maintain and improve previous versions, demonstrating adeptness in learning new technologies.",
      },
    ],
  },
  {
    title: "Interface Specialist",
    company_name: "Advanced Computer Technologies (ACT)",
    link: "https://www.act.eg/",
    icon: act,
    iconBg: "#E6DEDD",
    date: "Feb 2022 - Feb 2023",
    points: [
      {
        title: "System Integration Expertise",
        subtitle:
          "Integrated digital subsystems like Door Lock Systems, IPTV, and POS with Property Management Systems for renowned hotel chains, facilitating seamless operations.",
      },
      {
        title: "Agile Collaboration",
        subtitle:
          "Collaborated in agile settings, prioritizing and addressing stakeholder requirements, ensuring effective communication and alignment.",
      },
      {
        title: "Remote Troubleshooting",
        subtitle:
          "Analyzed logs and error codes to troubleshoot issues remotely, minimizing downtime and ensuring prompt issue resolution.",
      },
      {
        title: "Project Coordination Expertise",
        subtitle:
          "Orchestrated the integration of Oracle's Opera Web Services for 480+ Intercontinental Holiday Inn Group (IHG) hotels globally within four months, demonstrating adeptness in coordinating complex projects with multiple stakeholders and ensuring timely execution.",
      },
    ],
  },
];

const projectsDescription = `
The following projects demonstrate my skills and experience through
practical examples of my work. Each project includes a brief
description, along with links to code repositories and live demos
(where available). These projects highlight my ability to solve
complex problems, work with various technologies, and manage projects
with precision and efficiency.`;

const projects = [
  {
    name: "Book Rental Dashboard",
    description:
      "As part of my graduation project, I developed a functional online bookstore with complete frontend, backend, and database components. Unfortunately, due to hard drive failures, all project files were lost as they were not stored in any repositories.",
    tags: [
      {
        name: "HTML",
        color: "orange",
      },
      {
        name: "CSS",
        color: "blue",
      },
      {
        name: "JS",
        color: "yellow",
      },
      {
        name: "PHP",
        color: "purple",
      },
      {
        name: "PHPMyAdmin",
        color: "green",
      },
      {
        name: "SQL",
        color: "pink",
      },
    ],
    image: bookRentalProject,
  },
  {
    name: "Clinic Landing Page",
    description:
      "The second project I created was a clinic landing page. It was purely frontend focused as I wanted to create a catchy design with fluid & responsive User Interface (UI). I built it for a challenge I did on frontendMentor.com but I modified it to be a clinic instead of a banking website.",
    tags: [
      {
        name: "React",
        color: "light-blue",
      },
      {
        name: "Bootstrap",
        color: "purple",
      },
      {
        name: "SASS",
        color: "pink",
      },
    ],
    image: clinicWebsite,
    source_code_link: "https://github.com/Metwesh/health-clinics/",
    demo_link: "https://metwesh.github.io/health-clinics/",
  },
  {
    name: "Budget calculator",
    description:
      "My third project was a Create, Read, Update & Delete (CRUD) budget tracking calculator. It was a budget tracking calculator I built using React. I used react-bootstrap for styling the components. I implemented the use of local storage to not lose previously entered data if the user ever leaves the site.",
    tags: [
      {
        name: "React",
        color: "light-blue",
      },
      {
        name: "Bootstrap",
        color: "purple",
      },
      {
        name: "CSS",
        color: "blue",
      },
    ],
    image: budgetApp,
    source_code_link: "https://github.com/Metwesh/budget-app/",
    demo_link: "https://metwesh.github.io/budget-app/",
  },
  {
    name: "Face detection Web-App",
    description:
      'My fourth project was a face detection app with its respective backend & database. I used React to handle states & react-bootstrap to handle styling. The app is powered with the "Clarifai" machine learning API.',
    tags: [
      {
        name: "React",
        color: "light-blue",
      },
      {
        name: "Bootstrap",
        color: "purple",
      },
      {
        name: "KnexJs",
        color: "pink",
      },
      {
        name: "SHA-Hashing",
        color: "blue",
      },
      {
        name: "NodeJs",
        color: "green",
      },
      {
        name: "Express",
        color: "light-green",
      },
      {
        name: "PostgreSQL",
        color: "dull-blue",
      },
    ],
    image: faceDetectApp,
    source_code_link: "https://github.com/Metwesh/face-recognition/",
  },
  {
    name: "Task Handler Web-App",
    description:
      "My fifth project was also a CRUD project. It was a task handler web app. On the backend, I integrated Helmet for securing headers & enforced a strict Cross-Origin Resource Sharing (CORS) policy to prevent Cross Site Scripting attacks (XSS).",
    tags: [
      {
        name: "React",
        color: "light-blue",
      },
      {
        name: "Typescript",
        color: "blue",
      },
      {
        name: "Bootstrap",
        color: "purple",
      },
      {
        name: "NodeJs",
        color: "green",
      },
      {
        name: "Express",
        color: "light-green",
      },
      {
        name: "MongoDB",
        color: "dark-green",
      },
      {
        name: "SHA-Hashing",
        color: "pink",
      },
      {
        name: "JWT",
        color: "dull-blue",
      },
    ],
    image: taskHandlerApp,
    source_code_link: "https://github.com/Metwesh/task-handler",
  },
  {
    name: "SIDEUP Dashboard v2",
    description:
      "For my sixth project, I led the creation of 2nd iteration of SIDEUP's comprehensive shipping dashboard from scratch. I ensured the app was a Progressive Web App (PWA), managed authentication, authorization, web requests, caching, and devised cache-invalidation strategies, requiring meticulous planning.",
    tags: [
      {
        name: "React",
        color: "light-blue",
      },
      {
        name: "Bootstrap",
        color: "purple",
      },
      {
        name: "Axios",
        color: "light-purple",
      },
      {
        name: "React-Query",
        color: "pink",
      },
      {
        name: "PWA",
        color: "yellow",
      },
      {
        name: "Redux",
        color: "dark-purple",
      },
      {
        name: "Pusher",
        color: "red",
      },
      {
        name: "React-Router",
        color: "light-pink",
      },
      {
        name: "Mixpanel",
        color: "cyan",
      },
      {
        name: "Recharts",
        color: "orange",
      },
      {
        name: "i18n",
        color: "blue",
      },
      {
        name: "Vitest",
        color: "light-green",
      },
      {
        name: "React-Testing-Library",
        color: "green",
      },
    ],
    image: sideupDashboardV2,
  },
  {
    name: "Aman Accept Dashboard",
    description:
      "For my seventh project, a client, Aman, approached me to develop their improved payment dashboard. This dashboard provides real-time transaction data, enables easy tracking of payments, and offers analytics to help businesses understand revenue.",
    tags: [
      {
        name: "React",
        color: "light-blue",
      },
      {
        name: "Bootstrap",
        color: "purple",
      },
      {
        name: "Axios",
        color: "light-purple",
      },
      {
        name: "React-Query",
        color: "pink",
      },
      {
        name: "Redux",
        color: "dark-purple",
      },
      {
        name: "React-Router",
        color: "light-pink",
      },
      {
        name: "Recharts",
        color: "orange",
      },
      {
        name: "i18n",
        color: "blue",
      },
    ],
    image: amanDashboard,
    demo_link: "https://www.amanaccept.com/",
  },
  {
    name: "SIDEUP Dashboard v3",
    description:
      "For my eighth project, I spearheaded SIDEUP's third iteration of the shipping dashboard, featuring similar functionalities as its predecessor but with additional features. Despite its visual overhaul, it had to be seamlessly integrated into the existing system, necessitating innovative solutions.",
    tags: [
      {
        name: "React",
        color: "light-blue",
      },
      {
        name: "Bootstrap",
        color: "purple",
      },
      {
        name: "Axios",
        color: "light-purple",
      },
      {
        name: "React-Query",
        color: "pink",
      },
      {
        name: "PWA",
        color: "yellow",
      },
      {
        name: "Redux",
        color: "dark-purple",
      },
      {
        name: "Pusher",
        color: "red",
      },
      {
        name: "React-Router",
        color: "light-pink",
      },
      {
        name: "Mixpanel",
        color: "cyan",
      },
      {
        name: "Recharts",
        color: "orange",
      },
      {
        name: "i18n",
        color: "blue",
      },
      {
        name: "Vitest",
        color: "light-green",
      },
      {
        name: "React-Testing-Library",
        color: "green",
      },
    ],
    image: sideupDashboardV3,
  },
  {
    name: "BELTONE Holding Company Site",
    description:
      "For my ninth project, a client, Beltone Holding, approached me to spearhead the development of their display website. Unlike a traditional dashboard, this website interfaced with their existing dashboard to streamline data entry and ensure dynamic content. Built with Next.js, it featured localization to cater to a diverse user base and had no static data.",
    tags: [
      {
        name: "NextJS",
        color: "gray-white",
      },
      {
        name: "Bootstrap",
        color: "purple",
      },
      {
        name: "Axios",
        color: "light-purple",
      },
      {
        name: "SEO",
        color: "light-orange",
      },
      {
        name: "React-Router",
        color: "light-pink",
      },
      {
        name: "i18n",
        color: "blue",
      },
    ],
    image: beltoneHolding,
    demo_link: "https://www.beltoneholding.com/",
  },
  {
    name: "D'Art Space Art Store",
    description:
      "For my tenth project, a client, D'Art Space, approached me to build their physical art store's e-commerce portal. It had to be cross-platform compatible, so I utilized Ionic's cross-platform functionality to cater to Web, iOS, and Android.",
    tags: [
      {
        name: "Angular",
        color: "pink",
      },
      {
        name: "Ionic",
        color: "light-blue",
      },
      {
        name: "SASS",
        color: "red",
      },
      {
        name: "PWA",
        color: "yellow",
      },
      {
        name: "ChartJs",
        color: "green",
      },
    ],
    image: dartSpace,
  },
];

const certificateDescription = `
In my professional journey, I've acquired several key certifications,
enhancing my skills and knowledge in software development. These
credentials, from foundational to specialized courses, underscore my
commitment to continuous learning and growth. They equip me to deliver
high-quality solutions in diverse software projects.`;

const getBasePath = () => (import.meta.env.DEV ? "" : "/threejs-portfolio");

const certificates = [
  {
    title: "Bachelor's degree",
    icon: bachelorsDegree,
    link: `${getBasePath()}/documents/English certificate.pdf`,
  },
  {
    title: "Complete Web Dev",
    icon: completeWebDev,
    link: `${getBasePath()}/documents/Certificate-of-completion-for-complete-web-developer-in-2020-zero-to-mastery.pdf`,
  },
  {
    title: "Junior To Senior Web Dev",
    icon: seniorWebDev,
    link: "https://www.udemy.com/certificate/UC-ebbe19f2-8c53-4d44-9098-b7662a4954b3/",
  },
  {
    title: "C Language Course",
    icon: cLanguage,
    link: "https://www.udemy.com/certificate/UC-e3bbec7e-1d48-42f4-99ec-9cc0357d5575/",
  },
  {
    title: "Algorithms & Data Structures",
    icon: algorithms,
    link: "https://www.udemy.com/certificate/UC-1ecabe2a-7108-4462-8ae5-09085e501c2d/",
  },
  {
    title: "Python Developer",
    icon: pythonDev,
    link: "https://www.udemy.com/certificate/UC-2cb10543-7b97-40aa-bd2e-6341de1b1970/",
  },
  {
    title: "OSSA",
    icon: ossa,
    link: `${getBasePath()}/documents/OSSA.pdf`,
  },
  {
    title: "CISA",
    icon: cisa,
    link: `${getBasePath()}/documents/CISA.pdf`,
  },
  {
    title: "JS Cert",
    icon: jsCert,
    link: "https://www.codingame.com/certification/_qSkPD6K1GYUn4FIDBnGFg",
  },
];

const footerLinks = [
  {
    title: "LinkedIn Profile",
    link: "https://www.linkedin.com/in/mohamed-h-aly/",
    icon: linkedIn,
  },
  {
    title: "GitHub Profile",
    link: "https://github.com/Metwesh",
    icon: githubSquare,
  },
  {
    title: "Download Resume",
    link: `${getBasePath()}/documents/Mohamed%20H.%20Aly.pdf`,
    icon: resumeIcon,
  },
];

export {
  services,
  technologies,
  experiences,
  navLinks,
  personalDescription,
  projects,
  projectsDescription,
  certificateDescription,
  certificates,
  footerLinks,
};
