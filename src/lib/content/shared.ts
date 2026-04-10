export type Locale = 'en' | 'zh';
export type Theme = 'light' | 'dark';

export type NavItem = {
  label: string;
  href: string;
};

export type HeroContent = {
  eyebrow: string;
  name: string;
  roleLine: string;
  summary: string;
  primaryCta: string;
  secondaryCta: string;
  availability: string;
};

export type Project = {
  name: string;
  summary: string;
  description: string;
  details: string[];
  tags: string[];
  status: string;
  highlight: string;
  github: string;
  demo: string;
};

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  bullets: string[];
  tags: string[];
  link?: string;
};

export type BlogPost = {
  title: string;
  summary: string;
  date: string;
  readingTime: string;
  tags: string[];
  href: string;
};

export type AboutContent = {
  intro: string;
  focus: string[];
  current: string;
  terminal: Array<{
    key: string;
    value: string;
  }>;
};

export type ContactContent = {
  title: string;
  subtitle: string;
  email: string;
  github: string;
  linkedin: string;
  x: string;
  resumeHref: string;
};

export type SectionText = {
  kicker: string;
  title: string;
  description: string;
};

export type SiteContent = {
  localeLabel: string;
  languageSwitchLabel: string;
  themeSwitchLabel: string;
  menuLabel: string;
  closeLabel: string;
  nav: NavItem[];
  hero: HeroContent;
  projects: SectionText & {
    items: Project[];
  };
  experience: SectionText & {
    items: ExperienceItem[];
  };
  blog: SectionText & {
    items: BlogPost[];
  };
  about: SectionText & AboutContent;
  contact: ContactContent;
  footerNote: string;
  projectActions: {
    code: string;
    live: string;
  };
};
