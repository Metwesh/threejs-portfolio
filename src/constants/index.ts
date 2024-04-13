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
  threejs,
  act,
  sideupWhite,
  sideup,
  bookRentalProject,
  clinicWebsite,
  budgetApp,
  faceDetectApp,
  taskHandlerApp,
  sideupDashboardV2,
  sideupDashboardV3,
  linkedIn,
  githubSquare,
  resumeIcon,
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

// TODO: Look for new webp pictures
const services = [
  {
    title: "Fullstack Developer",
    icon: web,
  },
  {
    title: "Webapp Developer",
    icon: mobile,
  },
  {
    title: "Frontend Developer",
    icon: creator,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

// TODO: Finish
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
    title: "Senior Frontend Engineer",
    company_name: "SIDEUP",
    icon: sideupWhite,
    iconBg: "#383E56",
    date: "Dec 2023 - Present",
    points: [
      "Led and mentored a team of junior frontend engineers, providing guidance, delegating tasks, and fostering a collaborative work environment conducive to skill development and productivity.",
      "Implemented and facilitated code reviews to ensure adherence to coding standards, enhance code quality, and promote best practices within the team.",
      "Actively participated in technical recruitment processes, including conducting technical assessments and reviews, to evaluate candidates' skills and suitability for the team.",
      "Played a vital role with the product team in the decision-making process regarding the direction of the dashboard, providing valuable insights and recommendations to ensure alignment with user needs, market trends, and business objectives.",
      "Collaborated with Quality Control (QC) team to write comprehensive unit tests for the dashboard application, ensuring robust code quality and reliability.",
      "Demonstrated a hands-on approach to coding, tackling complex features and challenges while prioritizing efficient distribution of tasks within the team.",
      "Played a key role in maintaining and enhancing the overall codebase by emphasizing the importance of code quality, scalability, and maintainability in all development efforts.",
      "Acted as a subject matter expert within the team, providing technical guidance, resolving technical roadblocks, and fostering a culture of continuous learning and improvement.",
      "Engaged in regular communication with stakeholders to gather requirements, provide updates on project progress, and address any concerns or feedback related my team’s tasks.",
      "Proactively identified areas for process improvement and implemented initiatives to streamline development workflows, enhance productivity, and optimize code efficiency.",
    ],
  },
  {
    title: "Frontend Engineer",
    company_name: "SIDEUP",
    icon: sideup,
    iconBg: "#E6DEDD",
    date: "Feb 2023 - Dec 2023",
    points: [
      "Developed and maintained the company's newest B2C shipping dashboard, taking full responsibility for its development, and ensuring its efficient and reliable operation.",
      "Spearheaded the development of the shipping dashboard from the ground up using React, TypeScript, and Bootstrap for styling.",
      "Utilized Vite as the build tool and Tanstack query as the query state manager for the project.",
      "Worked alongside UX designers to ensure that the dashboard's design was not only visually appealing but also optimized for user experience, promoting ease of use and improving overall user satisfaction.",
      "Collaborated with the backend team to ensure that the frontend and backend systems were integrated seamlessly, resulting in a cohesive and efficient system that met all requirements and specifications.",
      "Partnered with the QA team to conduct extensive testing and debugging, identifying and resolving bugs and inconsistencies to improve overall system stability and reliability.",
      "Followed the agile development methodology and worked in sprints to ensure timely delivery of high-quality code.",
      "Developed the dashboard as the sole frontend engineer on the team, successfully delivering the project on time and within budget without any external assistance.",
      "Implemented responsive design techniques to ensure that the dashboard was accessible and usable across different devices and screen sizes.",
      "Worked with the product team to gather and analyze user feedback, contributing to the development of new features and improvements to the dashboard.",
      "Demonstrated the ability to quickly learn and become proficient in new technologies such as Next.js and Material UI, which were utilized to maintain the previous version of the dashboard while developing the current version.",
    ],
  },
  {
    title: "Interface Specialist",
    company_name: "Advanced Computer Technologies (ACT)",
    icon: act,
    iconBg: "#383E56",
    date: "Feb 2022 - Feb 2023",
    points: [
      "Worked as a system integrator for established hotel chains such as InterContinental Hotels Group (IHG), Marriott hotels group, and Wyndham Hotels & Resorts, installing and integrating various digital subsystems such as Door Lock Systems, Internet Protocol Television systems, and Point Of Sale systems.",
      "Integrated these subsystems with the main hotel Property Management System, ensuring seamless communication and efficient operations.",
      "Worked in an agile environment with a customer-facing team, collaborating closely with stakeholders to identify and prioritize requirements.",
      "Troubleshot issues remotely by analyzing logs and error codes, ensuring prompt resolution of issues and minimizing downtime.",
      "Successfully integrated Oracle's Opera Web Services for over 480 IHG hotels worldwide within a span of 4 months, demonstrating the ability to effectively manage large-scale projects with complex requirements.",
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

    source_code_link: "https://github.com/",
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
    name: "SIDEUP Dashboard v3",
    description:
      "For my seventh project, I spearheaded SIDEUP's third iteration of the shipping dashboard, featuring similar functionalities as its predecessor but with additional features. Despite its visual overhaul, it had to be seamlessly integrated into the existing system, necessitating innovative solutions.",
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
];

// TODO: Finish
const certificateDescription = `
`;

// TODO: Finish
const certificates = [
  {
    title: "WIP",
    icon: web,
  },
  {
    title: "WIP",
    icon: mobile,
  },
  {
    title: "WIP",
    icon: creator,
  },
  {
    title: "WIP",
    icon: backend,
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
    link: "/documents/Mohamed H. Aly.pdf",
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
