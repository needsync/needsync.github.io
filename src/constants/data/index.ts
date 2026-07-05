import type {
  Service,
  ProcessStep,
  Project,
  TeamMember,
  Testimonial,
  FaqItem,
} from "@/types";

export const SERVICES: Service[] = [
  {
    icon: "🛠️",
    title: "Custom Software Development",
    desc: "We build tailored software designed for your business. No templates—just systems that work the way you do.",
  },
  {
    icon: "🌐",
    title: "Web & System Development",
    desc: "From internal management systems to full-scale web platforms—fast, secure, and scalable.",
  },
  {
    icon: "📱",
    title: "Mobile Application Development",
    desc: "Intuitive, high-performing mobile applications that keep your business connected anytime, anywhere.",
  },
  {
    icon: "🎨",
    title: "UI/UX Design",
    desc: "Clean, user-friendly, responsive interfaces that enhance experience and improve engagement.",
  },
  {
    icon: "⚙️",
    title: "Software Maintenance",
    desc: "Eliminate repetitive tasks by automating workflows—saving time and reducing operational costs.",
  },
  {
    icon: "🛠️",
    title: "Branding & Digital Solutions",
    desc: "Eliminate repetitive tasks by automating workflows—saving time and reducing operational costs.",
  },
  {
    icon: "🌐",
    title: "IT Consultation",
    desc: "Eliminate repetitive tasks by automating workflows—saving time and reducing operational costs.",
  },
  {
    icon: "🛠️",
    title: "Custom Business Solutions",
    desc: "Eliminate repetitive tasks by automating workflows—saving time and reducing operational costs.",
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    num: "01",
    title: "Research",
    desc: "This phase focuses on identifying client needs, market trends, and project objectives. The team gathers insights and explores innovative ideas to build a strong project foundation.",
  },
  {
    num: "02",
    title: "Planning",
    desc: "The project structure, system architecture, features, timelines, and strategies are carefully planned to ensure organized development and execution.",
  },
  {
    num: "03",
    title: "Tasking",
    desc: "Responsibilities are assigned to team members based on expertise to ensure an efficient and productive workflow.",
  },
  {
    num: "04",
    title: "Production",
    desc: "The development phase begins where ideas are transformed into actual systems, applications, designs, and functional outputs.",
  },
  {
    num: "05",
    title: "Review",
    desc: "The final output undergoes testing, evaluation, and feedback collection to ensure quality assurance before deployment or delivery.",
  },
  {
    num: "06",
    title: "Deployment",
    desc: "We launch your system and provide ongoing support to keep everything running.",
  },
];

export const PROJECTS: Project[] = [
  {
    tag: "Cars",
    title: "Auto aerials",
    client: "US Based",
    problem: "Manual tracking caused errors and delays",
    solution: "Provide comprehensive web app where users can schedule",
    result: "Reduced errors by 40% and improved workout tracking efficiency",
    link: "https://autoaerials.com",
  },
  {
    tag: "Workouts",
    title: "Fitness Gym Mobile Application",
    client: "Local Gym Facility",
    problem: "Manual tracking caused errors and delays",
    solution: "Provide comprehensive gym tutorials workouts",
    result: "Reduced errors by 40% and improved workout tracking efficiency",
    link: "https://project-link.com",
  },
  {
    tag: "Finances",
    title: "Cashly",
    client: "US Based",
    problem: "Manual financial tracking led to errors and inefficiencies",
    solution: "Automated financial tracking system with real-time insights",
    result:
      "Reduced errors by 40% and improved financial management efficiency",
    link: "https://project-link.com",
  },
  {
    tag: "Automation",
    title: "Midnight Panel",
    client: "US Based",
    problem:
      "Manual scheduling and notifications led to missed appointments and inefficiencies",
    solution: "Automated scheduling and notification system",
    result:
      "Reduced missed appointments by 30% and improved scheduling efficiency",
    link: "https://project-link.com",
  },
  {
    tag: "Cafe",
    title: "Beans N' Steams Cafe",
    client: "Local Business",
    problem: "Manual inventory management caused stockouts and overstocking",
    solution: "Automated inventory management system with real-time tracking",
    result:
      "Reduced stockouts by 25% and improved inventory management efficiency",
    link: "https://project-link.com",
  },
  {
    tag: "Education",
    title: "Dayawism",
    client: "Local School",
    problem:
      " Manual student performance tracking led to delayed interventions and inefficiencies",
    solution:
      "Automated student performance tracking system with real-time insights",
    result:
      "Reduced delayed interventions by 35% and improved student performance tracking efficiency",
    link: "https://project-link.com",
  },
  {
    tag: "Trading",
    title: "Viscount",
    client: "EU Based",
    problem: "Trading data analysis was time-consuming and error-prone",
    solution: "Automated trading data analysis system with real-time insights",
    result:
      "Reduced analysis time by 50% and improved trading decision-making efficiency",
    link: "https://project-link.com",
  },
  {
    tag: "E-Commerce",
    title: "Esimstar",
    client: "EU Based",
    problem:
      "Manual order processing and inventory management led to errors and delays",
    solution:
      "Automated order processing and inventory management system with real-time tracking",
    result:
      "Reduced order processing errors by 30% and improved inventory management efficiency",
    link: "https://project-link.com",
  },
];

export const TEAM: TeamMember[] = [
  {
    initials: "JD",
    name: "John Doe",
    role: "Founder / Lead Dev",
    desc: "Leads development and ensures high-quality system architecture.",
  },
  {
    initials: "JS",
    name: "Jane Smith",
    role: "UI/UX Designer",
    desc: "Designs intuitive, user-friendly interfaces for all projects.",
  },
  {
    initials: "MC",
    name: "Michael Cruz",
    role: "Backend Developer",
    desc: "Handles server-side logic, databases, and system performance.",
  },
  {
    initials: "AR",
    name: "Anna Reyes",
    role: "Project Manager",
    desc: "Ensures projects are delivered on time and aligned with expectations.",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "NeedSynq transformed our outdated system into a modern, automated platform. Our workflow is now faster and more efficient.",
    name: "Business Owner",
    role: "Retail Industry",
  },
  {
    quote:
      "The team was professional, responsive, and delivered exactly what we needed. Highly recommended for any business looking to modernize.",
    name: "Startup Founder",
    role: "Tech Startup",
  },
  {
    quote:
      "Our experience with NeedSynq was smooth from start to finish. The system they built exceeded our expectations completely.",
    name: "Operations Manager",
    role: "Service Company",
  },
];

export const FAQS: FaqItem[] = [
  {
    q: "How long does a project take?",
    a: "Project timelines vary by complexity, but most systems are completed within a few weeks to a few months. We give you a clear timeline during planning.",
  },
  {
    q: "Do you offer support after deployment?",
    a: "Yes—we provide ongoing support and maintenance to ensure your system runs smoothly long after launch.",
  },
  {
    q: "Can you customize existing systems?",
    a: "Absolutely. We can enhance or modify existing systems—adding features, improving performance, or updating the UI.",
  },
  {
    q: "Do you work with startups?",
    a: "We love working with startups and early-stage businesses. Our flexible approach fits any budget and growth stage without compromising quality.",
  },
];

export const WHY_ITEMS: string[] = [
  "Client-centered solutions",
  "Modern and scalable technologies",
  "Creative and innovative approach",
  "Efficient project workflow",
  "Strong focus on quality assurance",
];

export const NAV_LINKS = [
  "Services",
  "Process",
  "Projects",
  "About",
  "Contact",
] as const;
export type NavLink = (typeof NAV_LINKS)[number];
