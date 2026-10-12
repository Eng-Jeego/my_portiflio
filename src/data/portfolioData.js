export const personalInfo = {
  name: "Yahye Ahmed",
  role: "Full-Stack Developer & Graphic Designer",
  location: "Mogadishu, Somalia",
  status: "Available for work",
  bio: "I build modern, responsive web experiences and digital products that combine clean code, thoughtful UI/UX and strong visual design.",
  extendedBio1: "I’m Yahye Ahmed, a full-stack developer and graphic designer based in Mogadishu. I enjoy building web applications, solving technical problems, and treating interface design as part of the engineering process — not an afterthought.",
  extendedBio2: "My work sits at the intersection of structure and aesthetics: robust frontend interfaces, careful backend logic, and visual systems that feel intentional. I learn in public by building real products, refining the craft with every project.",
  stats: [
    { value: "02+", label: "Years crafting" },
    { value: "12+", label: "Projects shipped" },
    { value: "Dev + Design", label: "One practice" }
  ],
  contacts: {
    email: "yahye.ahmed@example.com",
    github: "https://github.com/Eng-Jeego",
    linkedin: "https://www.linkedin.com/in/yahyeahmed"
  }
};

export const aboutPoints = [
  {
    num: "01",
    title: "Frontend Development",
    desc: "Responsive interfaces with React, modern CSS, and precise interaction design."
  },
  {
    num: "02",
    title: "Backend Development",
    desc: "APIs and server logic with Node.js and Express that keep products reliable."
  },
  {
    num: "03",
    title: "UI/UX Design",
    desc: "Clear flows, hierarchy, and usability before a single pixel is decorated."
  },
  {
    num: "04",
    title: "Graphic Design",
    desc: "Brand marks, posters, and campaign visuals with a disciplined visual language."
  },
  {
    num: "05",
    title: "Problem Solving",
    desc: "Breaking complexity into systems that users — and future me — can trust."
  },
  {
    num: "06",
    title: "Continuous Learning",
    desc: "New tools, better patterns, and a habit of shipping what I study."
  }
];

export const skillCategories = {
  frontend: [
    { name: "React", desc: "Component architecture, state, and production UI.", level: 90 },
    { name: "JavaScript", desc: "Modern ES, DOM, and application logic.", level: 92 },
    { name: "Tailwind CSS", desc: "Utility-first systems for fast, consistent layouts.", level: 88 },
    { name: "HTML", desc: "Semantic structure and accessible document design.", level: 95 },
    { name: "CSS", desc: "Layout, motion, and visual polish without noise.", level: 93 }
  ],
  backend: [
    { name: "Node.js", desc: "Server-side JavaScript for APIs and tooling.", level: 82 },
    { name: "Express.js", desc: "Routing, middleware, and REST service structure.", level: 80 },
    { name: "REST APIs", desc: "Clear resources, status codes, and client contracts.", level: 84 }
  ],
  database: [
    { name: "MongoDB", desc: "Document modeling for flexible product data.", level: 78 },
    { name: "Database Design", desc: "Relationships, integrity, and query-minded schemas.", level: 76 }
  ],
  other: [
    { name: "Git & GitHub", desc: "Version control, branches, and collaborative history.", level: 86 },
    { name: "UI/UX", desc: "Flows, hierarchy, and interfaces that stay out of the way.", level: 88 },
    { name: "Graphic Design", desc: "Identity, composition, and campaign-ready visuals.", level: 90 }
  ]
};

export const projects = [
  {
    id: "01",
    featured: true,
    category: "Full-stack",
    title: "Tourism Management System",
    description: "A booking and destination platform for local operators: itineraries, availability, and a calm public-facing experience designed for travelers and admins alike.",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    previewType: "tourism",
    appUrl: "sahal-tours.app",
    demoUrl: "#contact",
    githubUrl: "https://github.com/Eng-Jeego"
  },
  {
    id: "02",
    featured: false,
    category: "Commerce",
    title: "Modern E-commerce Platform",
    description: "Catalog, cart, and checkout with a restrained storefront — product storytelling first, conversion mechanics second.",
    tags: ["React", "Tailwind CSS", "REST APIs"],
    previewType: "shop",
    appUrl: "atelier-market",
    demoUrl: "#contact",
    githubUrl: "https://github.com/Eng-Jeego"
  },
  {
    id: "03",
    featured: false,
    category: "Productivity",
    title: "Task Management Application",
    description: "Boards, priorities, and progress tracking with a quiet interface that stays readable under daily use.",
    tags: ["JavaScript", "Node.js", "MongoDB"],
    previewType: "kanban",
    appUrl: "orbit-tasks",
    demoUrl: "#contact",
    githubUrl: "https://github.com/Eng-Jeego"
  },
  {
    id: "04",
    featured: false,
    wide: true,
    category: "Brand + web",
    title: "Personal / Business Website",
    description: "A high-clarity marketing site: typography-led layout, case study rhythm, and a contact flow designed for serious inquiries.",
    tags: ["HTML", "CSS", "JavaScript", "UI/UX"],
    previewType: "site",
    appUrl: "north-studio",
    demoUrl: "#contact",
    githubUrl: "https://github.com/Eng-Jeego"
  }
];

export const designWorks = [
  {
    type: "brand",
    title: "Brand identity",
    desc: "Sahal — wordmark, grid, and color discipline.",
    tag: "Identity system",
    badge: "SAHAL"
  },
  {
    type: "poster",
    title: "Poster",
    desc: "Event poster with editorial type scale.",
    tag: "Editorial",
    badge: "CODE & FORM"
  },
  {
    type: "social",
    title: "Social media",
    desc: "Campaign frames for product storytelling.",
    tag: "Campaign",
    badge: "Quiet luxury"
  },
  {
    type: "logo",
    title: "Logo design",
    desc: "YA mark — geometric, high-contrast, scalable.",
    tag: "Monogram",
    badge: "YA Mark"
  },
  {
    type: "marketing",
    title: "Marketing graphics",
    desc: "Launch kit for a digital product drop.",
    tag: "Launch Sequence",
    badge: "Ship the product"
  }
];

export const journeyTimeline = [
  {
    phase: "Foundation",
    title: "Learning web development",
    desc: "HTML, CSS, and JavaScript from first principles — how the web is structured, styled, and made interactive."
  },
  {
    phase: "Practice",
    title: "Building frontend projects",
    desc: "Landing pages, components, and responsive layouts. Learning that spacing and type are as technical as logic."
  },
  {
    phase: "Systems",
    title: "Learning backend development",
    desc: "Node.js, Express, and REST. Understanding data, auth-shaped thinking, and what happens after the button is clicked."
  },
  {
    phase: "Craft",
    title: "Combining development with UI/UX",
    desc: "Treating design decisions as product decisions. Graphic design training feeding interface work, and vice versa."
  },
  {
    phase: "Integration",
    title: "Building full-stack projects",
    desc: "Connecting clients to APIs and databases — tourism, commerce, and tools that have to survive real use."
  },
  {
    phase: "Now",
    title: "Continuously improving",
    desc: "Shipping clearer products, tightening systems, and looking for collaborators with serious problems to solve."
  }
];
