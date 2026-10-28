export type Language = 'en' | 'ar';

export interface LocalizedString {
  en: string;
  ar: string;
}

export interface Profile {
  name: LocalizedString;
  headlineRole: LocalizedString;
  secondaryRole: LocalizedString;
  heroHeadline: LocalizedString;
  heroIntro: LocalizedString;
  about: {
    paragraphs: LocalizedString[];
    highlights: {
      label: LocalizedString;
      value: LocalizedString;
    }[];
  };
  contact: {
    email: string;
    phone: string;
    location: LocalizedString;
    github: string;
    linkedin: string;
    currentPortfolio: string;
  };
}

export interface ProjectContribution {
  backend: LocalizedString[];
  frontend: LocalizedString[];
}

export interface Project {
  id: string;
  title: string;
  category: LocalizedString;
  tagline: LocalizedString;
  description: LocalizedString;
  ownership: LocalizedString;
  contributions: ProjectContribution;
  technologies: string[];
  liveUrl: string;
  featured: boolean;
  accentColor: string;
  metrics?: {
    label: LocalizedString;
    value: string;
  }[];
}

export interface WorkExperience {
  id: string;
  company: string;
  role: LocalizedString;
  employmentType: LocalizedString;
  location: LocalizedString;
  period: LocalizedString;
  current: boolean;
  summary: LocalizedString;
  keyResponsibilities: LocalizedString[];
  technologies: string[];
}

export interface EducationItem {
  id: string;
  institution: LocalizedString;
  program: LocalizedString;
  credential: LocalizedString;
  period: string;
  location: LocalizedString;
  description: LocalizedString;
}

export interface SkillItem {
  name: string;
  level?: 'Core' | 'Advanced' | 'Solid' | 'In Progress';
}

export interface SkillCategory {
  id: string;
  title: LocalizedString;
  description: LocalizedString;
  iconName: string;
  items: SkillItem[];
}

export type CvTrack = 'backend' | 'fullstack';

export interface ATSCvData {
  title: LocalizedString;
  summary: LocalizedString;
  skillsGroups: {
    title: LocalizedString;
    skills: string[];
  }[];
  experience: {
    company: string;
    role: LocalizedString;
    period: LocalizedString;
    location: LocalizedString;
    bullets: LocalizedString[];
  }[];
  featuredProjects: {
    name: string;
    url: string;
    description: LocalizedString;
    bullets: LocalizedString[];
  }[];
  education: {
    institution: LocalizedString;
    degree: LocalizedString;
    period: string;
    details: LocalizedString;
  }[];
}
