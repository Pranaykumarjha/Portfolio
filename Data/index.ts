export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Full Stack Developer building scalable, real-world web applications",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Based in Bangalore, India — open to internships and collaborations",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "Technologies I use to build full-stack apps",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "CSE student passionate about real-time systems and clean code.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building Converso — an AI-powered learning platform",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Want to work together? Let's connect.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Converso — AI Learning Platform",
    des: "AI-powered learning platform with voice and text interaction, authentication, protected routing, and optimized Next.js performance.",
    impact: "Real-time message streaming with secure authentication using JWT tokens. Responsive design serving 100+ daily users.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Streaming API"],
    img: "/projects/converso.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/c.svg", "/stream.svg"],
    link: "https://github.com/Pranaykumarjha/FullStack",
    liveDemo: "#",
  },
  {
    id: 2,
    title: "CoinPulse — Crypto Dashboard",
    des: "Real-time cryptocurrency dashboard streaming live market data for 50+ coins with responsive UI and efficient state management.",
    impact: "Live market data updates with sub-second latency. Optimized performance scoring 95+ Lighthouse. Mobile-responsive design.",
    technologies: ["Next.js", "TypeScript", "Streaming API", "React", "Tailwind CSS"],
    img: "/projects/coinpulse.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/re.svg"],
    link: "https://github.com/Pranaykumarjha/CoinPluse1",
    liveDemo: "#",
  },
  {
    id: 3,
    title: "Password Manager",
    des: "Secure password manager with credential storage, random password generation, copy-to-clipboard, and search across desktop and mobile.",
    impact: "Client-side encryption ensuring security. Optimized search with zero server calls. Cross-platform responsive UI.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Three.js", "LocalStorage"],
    img: "/projects/passmanage.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://github.com/Pranaykumarjha/PassManage",
    liveDemo: "#",
  },
  {
    id: 4,
    title: "Awwards Website",
    des: "Modern responsive UI with React, TypeScript, and GSAP — featuring 10+ smooth animations and interactive transitions.",
    impact: "10+ custom GSAP animations. Lighthouse score: 94+. Fully responsive across all device sizes.",
    technologies: ["React", "TypeScript", "GSAP", "Tailwind CSS", "Three.js"],
    img: "/projects/awwards.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://github.com/Pranaykumarjha/Awwards",
    liveDemo: "#",
  },
];

export const skills = {
  frontend: [
    { name: "React", proficiency: 95 },
    { name: "Next.js", proficiency: 95 },
    { name: "TypeScript", proficiency: 90 },
    { name: "Tailwind CSS", proficiency: 95 },
    { name: "Framer Motion", proficiency: 85 },
    { name: "React Hooks", proficiency: 95 },
  ],
  backend: [
    { name: "Node.js", proficiency: 90 },
    { name: "Express.js", proficiency: 88 },
    { name: "REST APIs", proficiency: 92 },
    { name: "Authentication (JWT)", proficiency: 85 },
    { name: "Middleware", proficiency: 88 },
  ],
  database: [
    { name: "MongoDB", proficiency: 85 },
    { name: "MySQL", proficiency: 80 },
    { name: "Schema Design", proficiency: 85 },
    { name: "Query Optimization", proficiency: 80 },
  ],
  coreCS: [
    { name: "Data Structures & Algorithms", proficiency: 85 },
    { name: "Object-Oriented Programming", proficiency: 90 },
    { name: "DBMS", proficiency: 85 },
    { name: "Operating Systems", proficiency: 80 },
    { name: "Computer Networks", proficiency: 78 },
  ],
  tools: [
    { name: "Git & GitHub", proficiency: 90 },
    { name: "AWS", proficiency: 75 },
    { name: "Docker", proficiency: 75 },
    { name: "Postman", proficiency: 85 },
    { name: "VS Code", proficiency: 95 },
  ],
};

export const education = [
  {
    id: 1,
    degree: "B.E. Computer Science Engineering",
    institution: "Sir M. Visvesvaraya Institute of Technology (SMVIT)",
    graduationYear: "2027",
    cgpa: "8.61/10",
    coursework: [
      "Data Structures & Algorithms",
      "Database Management Systems",
      "Operating Systems",
      "Computer Networks",
      "Object-Oriented Programming",
      "Web Development",
    ],
  },
];

export const certifications = [
  {
    id: 1,
    provider: "Amazon Web Services (AWS)",
    name: "AWS Cloud Practitioner Essentials",
    skillsGained: [
      "Cloud Architecture",
      "AWS Services",
      "Security Best Practices",
      "Cost Optimization",
    ],
    date: "2025",
  },
  {
    id: 2,
    provider: "DeepLearning.AI",
    name: "Generative AI for Everyone",
    skillsGained: [
      "Generative AI Concepts",
      "LLM Capabilities",
      "Real-world Applications",
      "AI Ethics",
    ],
    date: "2025",
  },
];

export const developmentProcess = [
  {
    id: 1,
    phase: "Phase 1: Planning",
    title: "Requirements & Strategy",
    description: "In-depth requirement analysis, system design, architecture planning, and tech stack selection for optimal scalability and maintainability.",
    icon: "📋",
    points: [
      "Requirement Analysis",
      "System Design",
      "Tech Stack Selection",
      "Architecture Planning",
    ],
  },
  {
    id: 2,
    phase: "Phase 2: Execution",
    title: "Development & Testing",
    description: "Iterative feature development with React, Next.js, and Node.js. Continuous testing, code reviews, and optimization for production readiness.",
    icon: "⚙️",
    points: [
      "Agile Development",
      "API Integration",
      "Unit Testing",
      "Code Reviews",
    ],
  },
  {
    id: 3,
    phase: "Phase 3: Delivery",
    title: "Deployment & Monitoring",
    description: "Production deployment to Vercel/AWS, environment configuration, performance monitoring, and continuous optimization for best user experience.",
    icon: "🚀",
    points: [
      "CI/CD Deployment",
      "Performance Monitoring",
      "User Feedback Integration",
      "Optimization",
    ],
  },
];

export const currentlyLearning = [
  {
    id: 1,
    title: "System Design",
    description: "Scaling applications, microservices architecture, and distributed systems",
  },
  {
    id: 2,
    title: "Advanced Data Structures",
    description: "Complex DSA patterns and optimization techniques for competitive programming",
  },
  {
    id: 3,
    title: "Cloud Infrastructure",
    description: "AWS deployment, serverless architecture, and infrastructure-as-code",
  },
  {
    id: 4,
    title: "Machine Learning Basics",
    description: "ML fundamentals and integration with web applications",
  },
];

export const testimonials = [
  {
    quote:
      "Completed AWS Cloud Practitioner Essentials — gained foundational knowledge in cloud concepts, AWS services, security, architecture, and billing.",
    name: "Amazon Web Services",
    title: "AWS Cloud Practitioner Essentials — Coursera (2025)",
  },
  {
    quote:
      "Completed Generative AI for Everyone — learned how generative AI works, its capabilities, limitations, and practical real-world applications.",
    name: "DeepLearning.AI",
    title: "Generative AI for Everyone — Coursera (2025)",
  },
  {
    quote:
      "Pursuing B.E. in Computer Science Engineering with a CGPA of 8.61/10. Relevant coursework includes DSA, DBMS, OS, Computer Networks, and OOP.",
    name: "Sir M. Visvesvaraya Institute of Technology",
    title: "B.E. CSE — 2023 to 2027",
  },
  {
    quote:
      "Skilled in building scalable web applications using React.js, Next.js, Node.js, Express.js, MongoDB, and SQL with strong problem-solving and backend integration.",
    name: "Pranay Kumar Jha",
    title: "Full Stack Developer",
  },
  {
    quote:
      "Focused on building production-level projects, improving DSA and problem-solving, and preparing for software engineering internships.",
    name: "Pranay Kumar Jha",
    title: "Open to Opportunities — Bangalore, India",
  },
];

export const companies = [
  {
    id: 1,
    name: "React",
    nameImg: "/tech/react-name.svg",
  },
  {
    id: 2,
    name: "Next.js",
    nameImg: "/tech/next-name.svg",
  },
  {
    id: 3,
    name: "Node.js",
    nameImg: "/tech/node-name.svg",
  },
  {
    id: 4,
    name: "MongoDB",
    nameImg: "/tech/mongo-name.svg",
  },
  {
    id: 5,
    name: "TypeScript",
    nameImg: "/tech/ts-name.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "IT Intern — Nuvoco Vistas Corp. Ltd.",
    desc: "Assisted with enterprise IT workflows, troubleshooting, and infrastructure operations. Supported system maintenance and collaborated on internal technical processes (Jul 2025 – Aug 2025).",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "B.E. Computer Science Engineering — SMVIT",
    desc: "Sir M. Visvesvaraya Institute of Technology, Bangalore. CGPA: 8.61/10. Coursework: DSA, DBMS, OS, Computer Networks, OOP (2023 – 2027).",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Full Stack Developer — Personal Projects",
    desc: "Built production-style apps including Converso (AI learning), CoinPulse (real-time crypto), a password manager, and an Awwards-style animated website.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Open to Software Engineering Internships",
    desc: "Seeking opportunities to apply full-stack skills in React, Next.js, Node.js, and real-time systems. Based in Bangalore, India.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    href: "https://github.com/Pranaykumarjha",
  },
  {
    id: 2,
    img: "/link.svg",
    href: "https://www.linkedin.com/in/pranay-jha-530266328/",
  },
  {
    id: 3,
    img: "/wha.svg",
    href: "tel:+919031501316",
  },
];

export const technologyCatalog = [
  // Frontend
  {
    id: "react",
    name: "React",
    category: "Frontend",
    icon: "⚛️",
    color: "#61dafb",
    experience: "Advanced",
    projects: ["Converso", "CoinPulse", "Password Manager", "Portfolio"],
    description: "Modern UI library for building interactive user interfaces with component-based architecture.",
    details: "Proficient in hooks, state management, performance optimization, and building scalable component systems.",
  },
  {
    id: "nextjs",
    name: "Next.js",
    category: "Frontend",
    icon: "▲",
    color: "#ffffff",
    experience: "Advanced",
    projects: ["Converso", "CoinPulse", "Portfolio", "Awwards"],
    description: "React framework for production applications with server-side rendering and static generation.",
    details: "Expert in App Router, API routes, middleware, and full-stack development with Next.js.",
  },
  {
    id: "typescript",
    name: "TypeScript",
    category: "Frontend",
    icon: "TS",
    color: "#3178c6",
    experience: "Advanced",
    projects: ["All Projects"],
    description: "Typed JavaScript superset for building robust and maintainable applications.",
    details: "Deep knowledge of generics, interfaces, type guards, and advanced TypeScript patterns.",
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    category: "Frontend",
    icon: "🎨",
    color: "#06b6d4",
    experience: "Advanced",
    projects: ["All Projects"],
    description: "Utility-first CSS framework for rapid UI development and responsive design.",
    details: "Expert at creating custom designs, animations, and responsive layouts using Tailwind.",
  },
  
  // Backend
  {
    id: "nodejs",
    name: "Node.js",
    category: "Backend",
    icon: "⬢",
    color: "#68a063",
    experience: "Advanced",
    projects: ["Converso", "CoinPulse", "Custom APIs"],
    description: "JavaScript runtime for building scalable server-side applications.",
    details: "Experienced with async/await, streams, event handling, and performance optimization.",
  },
  {
    id: "express",
    name: "Express.js",
    category: "Backend",
    icon: "🚂",
    color: "#ffffff",
    experience: "Advanced",
    projects: ["Converso", "CoinPulse"],
    description: "Minimal and flexible Node.js web application framework.",
    details: "Built robust REST APIs with middleware, authentication, and error handling.",
  },

  // Database
  {
    id: "mongodb",
    name: "MongoDB",
    category: "Database",
    icon: "🍃",
    color: "#13aa52",
    experience: "Intermediate",
    projects: ["Converso", "CoinPulse"],
    description: "NoSQL document database for flexible data storage.",
    details: "Experience with schema design, indexing, aggregation pipelines, and data modeling.",
  },
  {
    id: "mysql",
    name: "MySQL",
    category: "Database",
    icon: "🐬",
    color: "#00758f",
    experience: "Intermediate",
    projects: ["Enterprise Projects"],
    description: "Relational database management system.",
    details: "Proficient in SQL queries, normalization, and database optimization.",
  },

  // Cloud & DevOps
  {
    id: "aws",
    name: "AWS",
    category: "Cloud & DevOps",
    icon: "☁️",
    color: "#ff9900",
    experience: "Intermediate",
    projects: ["Cloud Architecture"],
    description: "Amazon Web Services cloud computing platform.",
    details: "Understanding of EC2, S3, Lambda, RDS, and cloud architecture principles.",
  },
  {
    id: "docker",
    name: "Docker",
    category: "Cloud & DevOps",
    icon: "🐳",
    color: "#2496ed",
    experience: "Intermediate",
    projects: ["Containerization"],
    description: "Containerization platform for application deployment.",
    details: "Experience building, deploying, and managing Docker containers.",
  },
  {
    id: "github",
    name: "GitHub",
    category: "Cloud & DevOps",
    icon: "🐙",
    color: "#ffffff",
    experience: "Advanced",
    projects: ["All Projects"],
    description: "Version control and collaboration platform.",
    details: "Proficient in git workflows, branching strategies, and collaborative development.",
  },

  // Core CS
  {
    id: "dsa",
    name: "DSA",
    category: "Core CS",
    icon: "📊",
    color: "#e535ab",
    experience: "Intermediate",
    projects: ["Problem Solving"],
    description: "Data Structures & Algorithms for optimal problem solving.",
    details: "Strong foundation in arrays, linked lists, trees, graphs, and algorithm design.",
  },
  {
    id: "dbms",
    name: "DBMS",
    category: "Core CS",
    icon: "📚",
    color: "#c41e3a",
    experience: "Intermediate",
    projects: ["Database Design"],
    description: "Database Management Systems and relational database concepts.",
    details: "Understanding of ACID properties, transactions, normalization, and query optimization.",
  },
  {
    id: "os",
    name: "Operating Systems",
    category: "Core CS",
    icon: "⚙️",
    color: "#0078d4",
    experience: "Beginner",
    projects: ["System Understanding"],
    description: "Computer operating system concepts and architecture.",
    details: "Knowledge of processes, threads, memory management, and synchronization.",
  },
  {
    id: "networks",
    name: "Computer Networks",
    category: "Core CS",
    icon: "🔗",
    color: "#ff7f00",
    experience: "Intermediate",
    projects: ["Network Understanding"],
    description: "Networking protocols and internet architecture.",
    details: "Understanding of TCP/IP, HTTP/HTTPS, DNS, and network security basics.",
  },
];

export const technologyConnections = [
  { from: "react", to: "nextjs" },
  { from: "nextjs", to: "typescript" },
  { from: "react", to: "typescript" },
  { from: "nodejs", to: "express" },
  { from: "express", to: "mongodb" },
  { from: "nodejs", to: "aws" },
  { from: "github", to: "docker" },
  { from: "nextjs", to: "nodejs" },
  { from: "tailwind", to: "react" },
  { from: "mongodb", to: "nodejs" },
];
