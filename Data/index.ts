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
    img: "/projects/converso.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/c.svg", "/stream.svg"],
    link: "https://github.com/Pranaykumarjha/FullStack",
  },
  {
    id: 2,
    title: "CoinPulse — Crypto Dashboard",
    des: "Real-time cryptocurrency dashboard streaming live market data for 50+ coins with responsive UI and efficient state management.",
    img: "/projects/coinpulse.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/re.svg"],
    link: "https://github.com/Pranaykumarjha/CoinPluse1",
  },
  {
    id: 3,
    title: "Password Manager",
    des: "Secure password manager with credential storage, random password generation, copy-to-clipboard, and search across desktop and mobile.",
    img: "/projects/passmanage.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://github.com/Pranaykumarjha/PassManage",
  },
  {
    id: 4,
    title: "Awwards Website",
    des: "Modern responsive UI with React, TypeScript, and GSAP — featuring 10+ smooth animations and interactive transitions.",
    img: "/projects/awwards.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://github.com/Pranaykumarjha/Awwards",
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
