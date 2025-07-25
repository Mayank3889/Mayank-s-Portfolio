// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';


// Education Section Logo's
import glaLogo from './assets/education_logo/gla_logo.png';
import svmLogo from './assets/education_logo/svm_logo.png';

// Project Section Logo's
import portfolioLogo from './assets/work_logo/portfolio.png';
import bookLogo from './assets/work_logo/book.png';
import tourLogo from './assets/work_logo/tour.png';
import notesLogo from './assets/work_logo/notes.png';
import taskremLogo from './assets/work_logo/task_rem.png';
import npmLogo from './assets/work_logo/npm.png';
import webverLogo from './assets/work_logo/web_dig.png';
import cmLogo from './assets/work_logo/cm.png';
import imagesearchLogo from './assets/work_logo/image_search.png';
import removebgLogo from './assets/work_logo/remove_bg.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo }
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo }
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo }
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];
  
  export const education = [
    {
      id: 0,
      img: glaLogo,
      school: "GLA University, Mathura",
      date: "Aug 2023 - May 2026",
      grade: "8.62 CGPA",
      desc: "I am pursuing my Bachelor's degree (BCA) in Computer Applications from GLA University, Mathura. During my time at GLA, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at GLA University has been instrumental in shaping my technical abilities and professional growth.",
      degree: "Bachelor of Computer Applications - BCA",
    },
    {
      id: 1,
      img: svmLogo,
      school: "Saraswati Vidhya Mandir, Mathura",
      date: "Apr 2022 - March 2023",
      grade: "73%",
      desc: "I completed my class 12 education from Saraswati Vidhya Mandir, Kosi Kalan, under the CBSE board, where I studied Physics, Chemistry, and Biology (PCB) with Computer Science.",
      degree: "CBSE(XII) - PCB with Computer Science",
    },
    {
      id: 2,
      img: svmLogo,
      school: "Saraswati Vidhya Mandir, Mathura",
      date: "Apr 2020 - March 2021",
      grade: "72.8%",
      desc: "I completed my class 10 education from Saraswati Vidhya Mandir, Kosi Kalan, under the CBSE board, where I studied Science with Computer.",
      degree: "CBSE(X), Science with Computer Application",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Personal Portfolio",
      description:
        "A fully responsive personal portfolio website built using React.js, designed to showcase my projects, skills, resume, and contact information. The site includes modern UI/UX elements, smooth navigation, and dynamic components to enhance user experience. It highlights my web development journey and serves as a central platform to present my professional profile.",
      image: portfolioLogo,
      tags: ["HTML", "CSS", "JavaScript", "React JS"],
    },
    {
      id: 1,
      title: "Tourist Guide Finder",
      description:
        "A full-stack web application that connects tourists with local guides. The platform offers a user-friendly interface where tourists can browse available tours, view guide profiles, and book trustworthy, verified guides to enhance their travel experience. This project aims to support local guides financially while providing tourists with a seamless and secure booking process.",
      image: tourLogo,
      tags: ["React JS", "Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript"],
    },
    {
      id: 2,
      title: "Notes Manager App",
      description:
        "A simple and efficient notes management application built to help users create, edit, delete, categorize, and mark notes as important. Designed with a clean user interface for ease of use, it ensures quick note-taking and effective organization. The app also includes user authentication to keep notes private and accessible only to the logged-in user.",
      image: notesLogo,
      tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
    },
        {
      id: 3,
      title: "Book Library",
      description:
        "A web-based book library built using HTML and JavaScript that fetches book data from an external API and displays it dynamically. The app retrieves and shows book details like title, author, and cover image in a clean interface, providing users with an easy way to browse available books.",
      image: bookLogo,
      tags: [ "API", "HTML", "BOOTSTRAP CSS", "JavaScript"],
    },
    
  ];  