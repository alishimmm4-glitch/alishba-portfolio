export const profile = {
  name: "Alishba Shahid",
  title: "Full Stack Developer",
  subtitle: "BSCS Graduate",
  location: "Lahore, Pakistan",
  address: "Street # 6c, Lajpat Road, Shahdara, Lahore",
  email: "alishbashahid169@gmail.com",
  phone: "+92 336 7440852",
  linkedin: "https://www.linkedin.com/in/alishba-shahid-b134a140a",
  github: "https://github.com/alishimmm4-glitch",
  summary:
    "I'm a BSCS graduate with a strong interest in full stack web development. Skilled in React.js, Node.js, Express.js and MongoDB, with hands-on experience building web applications using the MERN stack.",
  careerObjective:
    "Motivated and enthusiastic BSCS graduate seeking an opportunity to begin my professional career in the software industry. Eager to apply my knowledge of full stack web development, problem-solving abilities, and technical skills in a challenging environment — learning new technologies, contributing to innovative projects, and growing into a valuable member of a professional team.",
  availability: "Open to internships & full-time roles",
};

export const languages = [
  { name: "Urdu", level: "Mother Tongue" },
  { name: "English", level: "Good Communication" },
];

export type Skill = {
  name: string;
  level: number; // 0-100
  label: string;
  category: "Frontend" | "Backend" | "Database" | "Tools" | "Deployment";
};

export const skills: Skill[] = [
  { name: "HTML", level: 95, label: "Expert", category: "Frontend" },
  { name: "CSS", level: 92, label: "Advanced", category: "Frontend" },
  { name: "JavaScript", level: 88, label: "Advanced", category: "Frontend" },
  { name: "React.js", level: 85, label: "Advanced", category: "Frontend" },
  { name: "Next.js", level: 80, label: "Proficient", category: "Frontend" },
  { name: "Tailwind CSS", level: 90, label: "Advanced", category: "Frontend" },

  { name: "Node.js", level: 82, label: "Advanced", category: "Backend" },
  { name: "Express.js", level: 80, label: "Proficient", category: "Backend" },
  { name: "REST API", level: 85, label: "Advanced", category: "Backend" },
  { name: "Authentication / JWT", level: 78, label: "Proficient", category: "Backend" },
  { name: "API Integration", level: 82, label: "Advanced", category: "Backend" },

  { name: "MongoDB", level: 78, label: "Proficient", category: "Database" },
  { name: "MySQL", level: 72, label: "Intermediate", category: "Database" },

  { name: "Git", level: 88, label: "Advanced", category: "Tools" },
  { name: "GitHub", level: 88, label: "Advanced", category: "Tools" },
  { name: "VS Code", level: 92, label: "Expert", category: "Tools" },
  { name: "Postman", level: 80, label: "Proficient", category: "Tools" },
  { name: "Figma", level: 65, label: "Intermediate", category: "Tools" },

  { name: "Vercel", level: 85, label: "Advanced", category: "Deployment" },
  { name: "Netlify", level: 75, label: "Proficient", category: "Deployment" },
];

export const skillGroups = [
  { label: "Programming", items: "C++, HTML, CSS, JavaScript" },
  { label: "Core Concepts", items: "PF, OOP, DSA, DBMS, Operating Systems, Software Engineering" },
  { label: "Web Development", items: "Front-end design, basic back-end integration" },
  { label: "Platforms", items: "VS Code" },
  { label: "IT Support", items: "Basic level course from Microsoft" },
];

export const softSkills = [
  "Strong communication & presentation skills",
  "Leadership and team coordination",
  "Project management & time management",
  "Problem-solving and adaptability",
];

export type Project = {
  slug: string;
  title: string;
  tag: string;
  description: string;
  longDescription: string;
  stack: string[];
  github: string;
  demo: string;
  featured: boolean;
  metric: string;
};

export const projects: Project[] = [
  {
    slug: "portfolio",
    title: "Alishba Shahid — Portfolio Website",
    tag: "Personal · Next.js",
    description:
      "This portfolio website itself — a fully responsive personal site built with Next.js, TypeScript, Tailwind CSS and Framer Motion.",
    longDescription:
      "The site you're looking at right now. Built from scratch with Next.js (App Router) and TypeScript, styled with Tailwind CSS, and animated with Framer Motion — including a dark/light theme toggle, an animated skills section, a projects grid, and a dedicated downloadable CV page.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "",
    demo: "",
    featured: true,
    metric: "Coming soon",
  },
  {
    slug: "lifeline",
    title: "LifeLine — Blood Donation Management System",
    tag: "Healthcare · MERN",
    description:
      "A complete blood donation platform with donor registration, live blood requests, an admin dashboard, authentication and role-based access.",
    longDescription:
      "This full-stack web application connects blood donors, hospitals and recipients using the MERN stack. Features secure JWT-based authentication and authorization with bcrypt password hashing for role-based access (donor, recipient, hospital, admin). Implemented RESTful APIs for donor search, blood request management, donation tracking, and blood bank inventory across multiple cities. Designed a donor eligibility system with automated 90-day donation cooldown tracking, and built an admin dashboard with real-time statistics, low-stock inventory alerts, and user management. The responsive, modern UI is built using React, React Router, and Tailwind CSS, utilizing MongoDB aggregation pipelines for detailed analytics and dashboard summaries.",
    stack: ["MongoDB", "Express.js", "React.js", "Node.js"],
    github: "https://github.com/alishimmm4-glitch/blood-donation-app",
    demo: "https://blood-donation-app-zeta.vercel.app",
    featured: true,
    metric: "Role-based access · Real-time requests",
  },
  {
    slug: "studyai",
    title: "StudyAI — AI-Powered Study Companion",
    tag: "EdTech · AI-assisted",
    description:
      "An AI-powered study companion that helps students learn more effectively, built and deployed as a full web app.",
    longDescription:
      "StudyAI is a web application designed to help students study smarter with the help of AI — turning study material into a more interactive, guided learning experience. Built and deployed as a complete web app.",
    stack: ["React.js", "AI-assisted"],
    github: "https://github.com/alishimmm4-glitch/studyAI",
    demo: "https://study-ai-phi-one.vercel.app/",
    featured: true,
    metric: "AI-assisted studying",
  },
  {
    slug: "keystone-shop",
    title: "Keystone — Mechanical Keyboard Shop",
    tag: "E-commerce · React + Vite",
    description:
      "A responsive e-commerce product page for a mechanical keyboard shop, with category filters, colorway variants and an animated cart drawer.",
    longDescription:
      "A front-end e-commerce experience built with React, Vite and Tailwind CSS. Includes a product grid with category filters (keyboards, switches, keycaps, accessories), a colorway/variant picker with instant preview, a slide-in cart drawer with quantity controls and live subtotal, toast notifications, and a signature interaction where every product visual is a mini keyboard that 'presses' on hover like a real key — fully responsive with visible focus states and reduced-motion support.",
    stack: ["React.js", "Vite", "Tailwind CSS"],
    github: "https://github.com/alishimmm4-glitch/keystone-shop",
    demo: "https://keystone-shop-smoky.vercel.app",
    featured: true,
    metric: "Animated cart drawer · Product variants",
  },
  {
    slug: "salary-calendar",
    title: "Ledger — Salary Calendar Calculator",
    tag: "Productivity · React + Vite",
    description:
      "A monthly-calendar salary calculator — mark working days, holidays and leave to instantly see the payable salary and deductions.",
    longDescription:
      "A React + Vite tool for working out payable salary from a monthly calendar. Set a gross salary, click through each day's status — working, holiday, paid leave, or unpaid leave — with configurable weekend days, and the ledger recalculates the daily rate, deductions and net pay live. Supports switching between gross-÷-calendar-days and gross-÷-payable-days rate bases, editable currency, and month/year navigation, with everything persisted to localStorage — no backend required.",
    stack: ["React.js", "Vite", "JavaScript"],
    github: "https://github.com/alishimmm4-glitch/salary-calendar-calculator",
    demo: "https://salary-calendar-calculator.vercel.app",
    featured: true,
    metric: "Live payroll calculation · No backend",
  },
  {
    slug: "code-explainer",
    title: "Codex Prism — AI Code Explainer",
    tag: "Dev Tools · AI-assisted",
    description:
      "Paste any code snippet and get a clear plain-English breakdown, with a Three.js-animated 3D hero.",
    longDescription:
      "A frontend dev-tools piece built with React, Vite and Tailwind CSS, with a Three.js (react-three-fiber) animated 3D hero. By default it runs a local heuristic engine that detects language, functions, loops, branches and async calls to build a real walkthrough with no API key or server needed — and can optionally be switched to live AI-generated explanations via the Anthropic API.",
    stack: ["React.js", "Vite", "Tailwind CSS", "Three.js"],
    github: "https://github.com/alishimmm4-glitch/code-explainer",
    demo: "https://code-explainer-kappa-mauve.vercel.app",
    featured: true,
    metric: "Plain-English breakdowns · 3D hero",
  },
];

export type ExperienceItem = {
  role: string;
  org: string;
  period: string;
  location: string;
  points: string[];
  stack: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: "Full Stack Developer Intern",
    org: "Frontend Developer",
    period: "Internship",
    location: "Lahore, Pakistan · On-site",
    points: [
      "Developed and maintained responsive user interfaces using React.js, ensuring cross-browser compatibility and mobile-first design.",
      "Integrated frontend components with robust backend workflows using Node.js and Express.js to handle data efficiently.",
      "Collaborated on designing clean, modular and scalable code structures following industry best practices.",
      "Troubleshot UI rendering bugs, optimized frontend performance bottlenecks, and improved user workflows.",
      "Actively participated in continuous learning, keeping web aesthetics and user experience modern across layouts.",
    ],
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs"],
  },
];

export const responsibilities = [
  "MERN Stack development",
  "REST APIs",
  "Frontend and backend development",
  "Database integration",
];

export const education = {
  degree: "Bachelor of Science in Computer Science (BSCS)",
  school: "Government College University, Faisalabad",
  location: "Faisalabad, Pakistan",
};

export const educationHistory = [
  {
    period: "2022 – 2026",
    degree: "Bachelor of Computer Science",
    school: "Government College University Faisalabad",
  },
  {
    period: "Completed 2022",
    degree: "Intermediate of ICS",
    school: "Govt Degree Colleges Women",
  },
  {
    period: "Completed 2020",
    degree: "Matriculation of Bio Science",
    school: "Al-Azeem High School",
  },
];

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];
