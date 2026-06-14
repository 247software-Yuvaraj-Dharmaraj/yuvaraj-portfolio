// All site content lives here — edit this file to update the portfolio.

export const profile = {
  name: 'Yuvaraj D',
  role: 'Full-Stack Software Engineer',
  tagline: 'I build fast, reliable, well-tested web apps — frontend to backend.',
  blurb:
    'B.Tech (CSBS) graduate who has shipped real, user-facing software at scale. I work across React + TypeScript front-ends and Node.js back-ends, and I care about clean, tested, secure code shipped in small, frequent releases.',
  location: 'India · Open to relocate',
  email: 'yuvarajdharmaraj04@gmail.com',
  resumeUrl: '/Yuvaraj_D_Resume.pdf',
  socials: {
    github: 'https://github.com/247software-Yuvaraj-Dharmaraj',
    linkedin: 'https://www.linkedin.com/in/yuvaraj-d-819a41263/',
    leetcode: 'https://leetcode.com/', // TODO: replace with your LeetCode profile URL
  },
};

export const stats = [
  { value: '100+', label: 'Merged PRs in production' },
  { value: '11+', label: 'Config pages shipped' },
  { value: '1000+', label: 'DSA problems solved' },
  { value: '84%', label: 'PR merge rate' },
];

export const about = {
  paragraphs: [
    'I’m a Full-Stack Software Engineer and B.Tech (CSBS) graduate. As a Software Engineer Intern at 24/7 Software, I delivered 100+ merged pull requests in a large-scale React + TypeScript enterprise application — building a full Lost & Found module, reusable components adopted across the codebase, and 11+ permission-gated configuration pages on AG Grid Enterprise.',
    'Outside of work I build full-stack products end-to-end: real-time systems with Socket.IO, secure JWT auth with token rotation, Dockerized backends, and well-tested code with Vitest and GitHub Actions CI. I use AI developer tools daily to ship faster, and I’m always picking up something new.',
  ],
  highlights: [
    'Frontend, backend, APIs & databases',
    'Secure coding & role-based access control',
    'Automated testing & CI/CD',
    'Real-time systems (WebSockets / Socket.IO)',
  ],
};

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  type: string;
  points: string[];
  stack: string[];
}

export const experience: ExperienceItem[] = [
  {
    role: 'Software Engineer Intern',
    company: '24/7 Software',
    period: 'Jan 2026 — Jun 2026',
    type: 'UI/UX Redesign Team',
    points: [
      'Delivered 100+ merged pull requests across 14 feature tickets in a large-scale React + TypeScript enterprise app, sustaining an 84% PR merge rate.',
      'Built the Lost & Found module end-to-end (Matching Items & Claimed Items workflows) and a reusable advanced-search component adopted across multiple data grids.',
      'Developed 11+ permission-gated configuration pages on AG Grid Enterprise.',
      'Audited live production code and resolved 7+ defects across ~15 modules; reviewed 12+ teammates’ PRs in an Agile/Scrum workflow.',
    ],
    stack: ['React', 'TypeScript', 'TanStack Query', 'AG Grid', 'Socket.IO', 'Vite'],
  },
  {
    role: 'Full Stack Developer Intern (MERN)',
    company: 'Better Tomorrow',
    period: '2024',
    type: 'Internship',
    points: [
      'Developed full-stack web applications using the MERN stack with Redux state management, JWT authentication/authorization, and REST API integration.',
      'Engineered real-time data handling and advanced client-side routing across multiple web application modules.',
    ],
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Redux'],
  },
];

export interface Project {
  name: string;
  tagline: string;
  description: string;
  image: string;
  tech: string[];
  live?: string;
  code: string;
  highlights: string[];
}

export const projects: Project[] = [
  {
    name: 'FitSphere',
    tagline: 'Gym Attendance, Occupancy & Engagement Platform',
    description:
      'A full-stack platform with three roles (Member / Trainer / Admin), live gym occupancy, attendance streaks, slot booking and analytics dashboards.',
    image: '/projects/fitsphere.png',
    tech: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Socket.IO', 'TanStack Query'],
    live: 'https://fitsphere-two.vercel.app',
    code: 'https://github.com/247software-Yuvaraj-Dharmaraj/fitsphere',
    highlights: [
      'Live occupancy over Socket.IO with automatic polling fallback',
      'Custom JWT auth with access + refresh-token rotation',
      'Member directory via a single MongoDB aggregation pipeline',
    ],
  },
  {
    name: 'IncidentDesk',
    tagline: 'Incident & Request Management Tracker',
    description:
      'A full-stack incident tracker with layered role-based access control, audit trails, optimistic UI, and a fully Dockerized stack.',
    image: '/projects/incidentdesk.png',
    tech: ['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Prisma', 'Zod', 'Docker'],
    live: 'https://incidentdesk.vercel.app',
    code: 'https://github.com/247software-Yuvaraj-Dharmaraj/incidentdesk',
    highlights: [
      'RBAC enforced across middleware, services & scoped queries',
      'Audit trail recorded inside DB transactions',
      'Cursor pagination, Zod validation, rate-limited auth',
    ],
  },
  {
    name: 'IncidentDesk API — Spring Boot',
    tagline: 'Java backend — full rewrite of the Node API',
    description:
      'A Java / Spring Boot reimplementation of the IncidentDesk backend, preserving the exact REST contract. Built to demonstrate enterprise Java alongside the MERN version.',
    image: '/projects/incidentdesk-springboot.png',
    tech: ['Java', 'Spring Boot', 'Spring Security', 'JPA / Hibernate', 'PostgreSQL', 'Flyway', 'Docker'],
    live: 'https://incidentdesk-java.vercel.app',
    code: 'https://github.com/247software-Yuvaraj-Dharmaraj/incidentdesk-springboot',
    highlights: [
      'JWT cookie auth + role-based access control (Spring Security)',
      'Audit trail in DB transactions; optimistic concurrency',
      'Cursor pagination, Gemini AI triage, Socket.IO realtime',
    ],
  },
];

export interface SkillGroup {
  title: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  { title: 'Languages', skills: ['TypeScript', 'JavaScript (ES6+)', 'Java', 'C++', 'SQL', 'HTML5', 'CSS3'] },
  { title: 'Frontend', skills: ['React.js', 'Vite', 'Redux', 'TanStack Query', 'Tailwind CSS', 'Ant Design', 'AG Grid'] },
  { title: 'Backend & APIs', skills: ['Node.js', 'Express.js', 'REST APIs', 'JWT', 'Socket.IO', 'Zod', 'WebSockets'] },
  { title: 'Databases', skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Mongoose', 'Prisma', 'IndexedDB'] },
  { title: 'Cloud & DevOps', skills: ['Docker', 'Vercel', 'GitHub Actions (CI/CD)', 'Git', 'Nginx'] },
  { title: 'Testing & AI', skills: ['Vitest', 'Testing Library', 'AI tools (OpenAI, Claude, Copilot)', 'Agile / Scrum', 'Jira'] },
];

export const education = {
  school: 'Sri Eshwar College of Engineering',
  degree: 'B.Tech in Computer Science & Business Systems (CSBS)',
  period: '2022 — 2026',
  grade: 'CGPA: 7.8 / 10',
};

export const achievements = [
  '1000+ DSA problems solved — LeetCode (1580), CodeChef (1167), SkillRack',
  '2nd Prize — Web App Development Competition, Sri Eshwar College of Engineering (2024)',
];
