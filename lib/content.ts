import type { LucideIcon } from "lucide-react";
import {
  Award,
  BookOpen,
  Briefcase,
  Factory,
  FlaskConical,
  Gauge,
  GanttChart,
  GraduationCap,
  Layers3,
  Microscope,
  ShieldCheck,
  Users,
} from "lucide-react";

// Centralized portfolio content. Update this file to personalize text, links, and section data.
export const site = {
  name: "Abdul Azeez Abdullah",
  title: "Polymer Technologist | Polymer Processing & Elastomer Specialist",
  location: "Sri Lanka",
  email: "abdlabdh01@gmail.com",
  phone: "+94 754673181",
  tagline:
    "Specializing in Polymer Processing, Elastomer Technology and Sustainable Materials Innovation.",
};

export type NavItem = { id: string; label: string };

export const navItems: NavItem[] = [
  { id: "home", label: "Home" },
  { id: "summary", label: "Summary" },
  { id: "education", label: "Education" },
  { id: "expertise", label: "Expertise" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "research", label: "Research" },
  { id: "gallery", label: "Gallery" },
  { id: "certifications", label: "Training" },
  { id: "contact", label: "Contact" },
];

export type TimelineItem = {
  title: string;
  org: string;
  period: string;
  icon: LucideIcon;
  bullets: string[];
  tags?: string[];
};

export const professionalSummary = {
  heading: "Professional Summary",
  summary:
    "Polymer Processing & Materials Engineering professional with hands-on exposure in polymer processing, rubber compounding fundamentals, ASTM-aligned testing, and material characterization. Focused on disciplined experimentation, quality-driven workflows, and sustainable materials development for industrial and research environments.",
  highlights: [
    {
      title: "Polymer Processing",
      icon: Factory,
      points: ["Processing fundamentals", "Compounding workflows", "Process optimization mindset"],
    },
    {
      title: "Elastomer Testing",
      icon: Gauge,
      points: ["UTM testing", "Shore hardness", "Cure behavior & rheology basics"],
    },
    {
      title: "Industrial Quality Control",
      icon: ShieldCheck,
      points: ["Repeatability", "Standards awareness", "Clear reporting"],
    },
    {
      title: "Research & Innovation",
      icon: FlaskConical,
      points: ["Evidence-led iteration", "Sustainable materials", "Practical prototyping"],
    },
  ],
};

export const education: TimelineItem[] = [
  {
    title: "Bachelor of Engineering Technology (Hons) — Polymer Processing Technology",
    org: "University of Sri Jayewardenepura, Sri Lanka",
    period: "2024 — 2028",
    icon: GraduationCap,
    bullets: [
      "Polymer Characterization",
      "Rubber Technology",
      "Rheology Fundamentals",
      "Materials Testing (ASTM-aligned basics)",
      "Sustainable Materials",
    ],
  },
  {
    title: "Advanced Level — Technology Stream",
    org: "Oddamavadi Central College",
    period: "2020 — 2023",
    icon: BookOpen,
    bullets: ["Result: District 06 — 2A B"],
  },
];

export type Skill = { name: string; level: number; note?: string };
export type SkillCategory = { category: string; skills: Skill[]; icon: LucideIcon };

export const technicalSkills: SkillCategory[] = [
  {
    category: "Material Characterization",
    icon: Microscope,
    skills: [
      { name: "UTM Testing", level: 78, note: "Tensile testing workflows and reporting." },
      { name: "Shore Hardness", level: 76, note: "Hardness measurement and interpretation." },
      { name: "Rheology", level: 68, note: "Cure behavior and rheology fundamentals." },
      { name: "ASTM Standards", level: 72, note: "Awareness of standards-driven testing." },
    ],
  },
  {
    category: "Polymer Processing",
    icon: Layers3,
    skills: [
      { name: "Compounding", level: 74, note: "Mixing logic and formulation awareness." },
      { name: "Extrusion", level: 62, note: "Process fundamentals and parameters." },
      { name: "Curing Systems", level: 64, note: "Safety and performance considerations." },
      { name: "Rubber Formulation", level: 66, note: "Elastomer basics and trade-offs." },
    ],
  },
  {
    category: "Laboratory & Quality Control",
    icon: Award,
    skills: [
      { name: "Physical Testing", level: 76, note: "Repeatability and method discipline." },
      { name: "Process Optimization", level: 74, note: "Incremental improvements with data." },
      { name: "Industrial Safety Standards", level: 72, note: "Safety-first lab and shop-floor habits." },
    ],
  },
];

export type ExperienceItem = {
  role: string;
  org: string;
  period: string;
  icon: LucideIcon;
  impact: string[];
  technical: string[];
  leadership: string[];
  metrics?: string[];
  tags?: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: "Student Ambassador",
    org: "National Child Protection Authority (NCPA), Sri Lanka",
    period: "2025 — Present",
    icon: Users,
    impact: [
      "Supported national awareness and youth engagement initiatives.",
      "Promoted responsible community participation and safety principles.",
    ],
    technical: ["Structured communication and reporting discipline."],
    leadership: [
      "Stakeholder coordination and outreach support.",
      "Improved collaboration, facilitation, and public speaking.",
    ],
    metrics: ["Ongoing role • Multi-initiative participation"],
  },
  {
    role: "Director of Marketing",
    org: "Polymer Technology Society — University of Sri Jayewardenepura",
    period: "Current",
    icon: Briefcase,
    impact: [
      "Strengthened society visibility and engagement with a consistent brand presence.",
      "Enabled academic–industry touchpoints through events and collaborations.",
    ],
    technical: ["Event workflows, documentation, and communications quality."],
    leadership: [
      "Led outreach planning and student engagement initiatives.",
      "Coordinated workshops and technical seminar promotion.",
    ],
    metrics: ["Cross-functional coordination • Event delivery support"],
  },
  {
    role: "Project Leader",
    org: "Wearable Heated Textile System (Arduino-integrated)",
    period: "2024 — 2025",
    icon: GanttChart,
    impact: [
      "Built a functional concept for wearable heating with sensing and control.",
      "Designed for low power use, user safety, and reliable performance.",
    ],
    technical: [
      "Closed-loop temperature concept and basic control approach.",
      "Integration of electronics, smart textiles, and polymer materials.",
    ],
    leadership: [
      "Coordinated project tasks and iterative prototyping decisions.",
      "Presented outcomes with clear, structured rationale.",
    ],
    tags: ["Arduino", "Smart Textiles", "Prototyping"],
    metrics: ["Prototype delivered • Safety-focused design"],
  },
];

export const researchInterests = [
  "Sustainable Polymer Materials",
  "Advanced Elastomers and Rubber Technology",
  "Circular Economy in Plastics",
  "Bio-based Polymer Systems",
  "Polymer Recycling Engineering",
];

export type ProjectCaseStudy = {
  id: string;
  title: string;
  category: string;
  problem: string;
  approach: string[];
  technologies: string[];
  results: string[];
};

export const projects: ProjectCaseStudy[] = [
  {
    id: "wearable-heated",
    title: "Wearable Heated Textile System",
    category: "Smart Textiles • Prototyping",
    problem:
      "Create a wearable heating concept with controllable temperature and safe, low-power operation.",
    approach: [
      "Designed a closed-loop sensing + control concept for temperature stability.",
      "Evaluated safety constraints and power usage considerations.",
      "Integrated textile structure with functional components for practical prototyping.",
    ],
    technologies: ["Arduino", "Sensors", "Basic control logic", "Smart textile integration"],
    results: ["Prototype delivered", "Safety-focused design decisions", "Clear documentation and presentation"],
  },
  {
    id: "elastomer-evaluation",
    title: "Elastomer Physical Property Evaluation",
    category: "Testing • Quality Control",
    problem: "Assess physical properties with repeatable, standards-aware testing workflows.",
    approach: [
      "Prepared test planning aligned to ASTM-style thinking.",
      "Executed mechanical tests with a focus on repeatability and documentation.",
      "Interpreted results for clear reporting and decision support.",
    ],
    technologies: ["UTM", "Hardness testing", "Reporting"],
    results: ["Repeatable testing workflow", "Structured reporting output"],
  },
  {
    id: "rubber-compounding",
    title: "Rubber Compounding Optimization (Concept)",
    category: "Processing • Formulation",
    problem: "Improve consistency and performance via informed formulation trade-offs.",
    approach: [
      "Reviewed compounding logic and material-function relationships.",
      "Outlined iteration plan with measurable comparison criteria.",
    ],
    technologies: ["Compounding fundamentals", "Process optimization mindset"],
    results: ["Defined optimization direction", "Quality-control considerations"],
  },
  {
    id: "rheology-study",
    title: "Polymer Rheology Study (Foundations)",
    category: "Characterization • Materials",
    problem: "Understand cure behavior and flow characteristics for processing decisions.",
    approach: [
      "Studied rheological indicators and their processing implications.",
      "Connected fundamentals to standards-aware testing and reporting.",
    ],
    technologies: ["Rheology fundamentals", "Cure behavior concepts"],
    results: ["Clear fundamentals", "Processing-linked interpretation"],
  },
  {
    id: "sustainable-polymers",
    title: "Sustainable Polymer Research Work",
    category: "Sustainability • Innovation",
    problem: "Explore sustainable material pathways aligned to circular economy objectives.",
    approach: [
      "Mapped material options and trade-offs.",
      "Defined evaluation criteria for practical R&D progression.",
    ],
    technologies: ["Literature review", "Evaluation framework"],
    results: ["Well-structured research direction"],
  },
];

export type PhotoGalleryItem = {
  id: string;
  title: string;
  description: string;
  image: string;
};

export const photoGallery: PhotoGalleryItem[] = [
  {
    id: "lab-work",
    title: "Polymer Testing Lab Work",
    description: "Mechanical testing and characterization workflows.",
    image: "/images/gallery/testing.svg",
  },
  {
    id: "utm-setup",
    title: "UTM Testing Setup",
    description: "Repeatable method discipline and reporting.",
    image: "/images/gallery/wearable.svg",
  },
  {
    id: "rubber-testing",
    title: "Rubber Testing & Characterization",
    description: "Hardness, cure behavior, and rheology fundamentals.",
    image: "/images/gallery/rubber.svg",
  },
  {
    id: "presentations",
    title: "Research Presentations",
    description: "Scientific communication and structured delivery.",
    image: "/images/gallery/presentation.svg",
  },
  {
    id: "leadership",
    title: "Leadership & Outreach",
    description: "Community initiatives and collaboration.",
    image: "/images/gallery/community.svg",
  },
];

export const certifications = [
  { title: "Industrial Safety Training", icon: ShieldCheck, note: "Safety-first lab and industrial practices." },
  { title: "ASTM Testing Workshops", icon: Gauge, note: "Standards awareness and repeatable methods." },
  { title: "Polymer Processing Seminars", icon: Factory, note: "Industry fundamentals and process thinking." },
  { title: "Research Methodology Training", icon: FlaskConical, note: "Structured experimentation and reporting." },
];

export const socials = {
  linkedIn: "",
  github: "",
  email: `mailto:${site.email}`,
};

