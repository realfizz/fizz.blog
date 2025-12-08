export interface HeroContent {
  greeting: string;
  name: string;
  handle: string;
  handleUrl: string;
  taglinePrefix: string;
  taglineHighlights: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  memberCount?: number;
  description?: string;
}

export interface Project {
  title: string;
  description: string;
  href: string;
  image: string;
  badge: string;
}

export interface ProjectsConfig {
  eyebrow: string;
  highlight: string;
  items: Project[];
}

export interface ActivityConfig {
  title: string;
  subtitle: string;
  githubUsername: string;
}

export interface MetaConfig {
  title: string;
  description: string;
  openGraphImage: string;
}

export interface SiteConfig {
  meta: MetaConfig;
  hero: HeroContent;
  socials: SocialLink[];
  projects: ProjectsConfig;
  activity: ActivityConfig;
}

export const siteConfig: SiteConfig = {
  meta: {
    title: "fizz.blog",
    description: "15 Year old Designer & Fullstack Developer",
    openGraphImage: "/opengraph.png",
  },
  hero: {
    greeting: "Hey It's me",
    name: "Fizz",
    handle: "YoungFizz",
    handleUrl: "https://discord.gg/youngfizz",
    taglinePrefix: "15 Year old",
    taglineHighlights: ["Designer", "Fullstack Developer"],
  },
  socials: [
    {
      name: "GitHub",
      url: "https://github.com/youngfizzler",
      description: "Check out my code",
    },
    {
      name: "Discord",
      url: "http://discord.com/users/1229934153454325843",
      description: "Let's chat",
    },
  ],
  projects: {
    eyebrow: "Check out my",
    highlight: "Projects",
    items: [
      {
        title: "AutoAce",
        description: "Request-based homework solver",
        href: "https://autoace.io",
        image: "/projects/autoace.png",
        badge: "SaaS",
      },
      {
        title: "Clutch",
        description: "Supabase for cheat developers",
        href: "https://clutch.cx",
        image: "/projects/clutch.png",
        badge: "SaaS",
      },
      {
        title: "Dumped",
        description: "Auto-Updating Offset API",
        href: "https://dumped.wtf",
        image: "/projects/dumpedwtf.png",
        badge: "Free",
      },
    ],
  },
  activity: {
    title: "Fizz's",
    subtitle: "Github Activity:",
    githubUsername: "youngfizzler",
  },
};

