import type { ComponentType } from "react";
import { AntdLogo } from "@/components/logos/antd";
import { BunLogo } from "@/components/logos/bun";
import { DockerLogo } from "@/components/logos/docker";
import { FigmaLogo } from "@/components/logos/figma";
import { GitLogo } from "@/components/logos/git";
import { JavaLogo } from "@/components/logos/java";
import { JsLogo } from "@/components/logos/js";
import { LoopbackLogo } from "@/components/logos/loopback";
import { MongodbLogo } from "@/components/logos/mongodb";
import { MotionLogo } from "@/components/logos/motion";
import { MobxstatetreeLogo } from "@/components/logos/mobx-state-tree";
import { MysqlLogo } from "@/components/logos/mysql";
import { Nextjs2Logo } from "@/components/logos/nextjs2";
import { NodejsLogo } from "@/components/logos/nodejs";
import { PsLogo } from "@/components/logos/ps";
import { PythonLogo } from "@/components/logos/python";
import { RadixuiLogo } from "@/components/logos/radixui";
import { ReactLogo } from "@/components/logos/react";
import { ReactnavigationLogo } from "@/components/logos/react-navigation";
import { ReactrouterLogo } from "@/components/logos/react-router";
import { RedisLogo } from "@/components/logos/redis";
import { ReduxLogo } from "@/components/logos/redux";
import { ShadcnuiLogo } from "@/components/logos/shadcn-ui";
import { TailwindcssLogo } from "@/components/logos/tailwindcss";
import { TanstackLogo } from "@/components/logos/tanstack";
import { TypescriptLogo } from "@/components/logos/typescript";

export interface TechStackItem {
  key: string;
  title: string;
  href: string;
  component: ComponentType<{ className?: string }>;
}

export const TECH_STACK: TechStackItem[] = [
  {
    key: "typescript",
    title: "TypeScript",
    href: "https://www.typescriptlang.org/",
    component: TypescriptLogo,
  },
  {
    key: "js",
    title: "JavaScript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    component: JsLogo,
  },
  {
    key: "python",
    title: "Python",
    href: "https://www.python.org/",
    component: PythonLogo,
  },
  {
    key: "java",
    title: "Java",
    href: "https://www.java.com/",
    component: JavaLogo,
  },
  {
    key: "nodejs",
    title: "Node.js",
    href: "https://nodejs.org/",
    component: NodejsLogo,
  },
  {
    key: "bun",
    title: "Bun",
    href: "https://bun.sh/",
    component: BunLogo,
  },
  {
    key: "react",
    title: "React",
    href: "https://react.dev/",
    component: ReactLogo,
  },
  {
    key: "nextjs2",
    title: "Next.js",
    href: "https://nextjs.org/",
    component: Nextjs2Logo,
  },
  {
    key: "tailwindcss",
    title: "Tailwind CSS",
    href: "https://tailwindcss.com/",
    component: TailwindcssLogo,
  },
  {
    key: "shadcn-ui",
    title: "shadcn/ui",
    href: "https://ui.shadcn.com/",
    component: ShadcnuiLogo,
  },
  {
    key: "radixui",
    title: "Radix UI",
    href: "https://www.radix-ui.com/",
    component: RadixuiLogo,
  },
  {
    key: "motion",
    title: "Motion",
    href: "https://motion.dev/",
    component: MotionLogo,
  },
  {
    key: "tanstack",
    title: "TanStack",
    href: "https://tanstack.com/",
    component: TanstackLogo,
  },
  {
    key: "mobx-state-tree",
    title: "MobX-State-Tree",
    href: "https://mobx-state-tree.js.org/",
    component: MobxstatetreeLogo,
  },
  {
    key: "redux",
    title: "Redux",
    href: "https://redux.js.org/",
    component: ReduxLogo,
  },
  {
    key: "antd",
    title: "Ant Design",
    href: "https://ant.design/",
    component: AntdLogo,
  },
  {
    key: "react-router",
    title: "React Router",
    href: "https://reactrouter.com/",
    component: ReactrouterLogo,
  },
  {
    key: "react-navigation",
    title: "React Navigation",
    href: "https://reactnavigation.org/",
    component: ReactnavigationLogo,
  },
  {
    key: "loopback",
    title: "LoopBack",
    href: "https://loopback.io/",
    component: LoopbackLogo,
  },
  {
    key: "git",
    title: "Git",
    href: "https://git-scm.com/",
    component: GitLogo,
  },
  {
    key: "docker",
    title: "Docker",
    href: "https://www.docker.com/",
    component: DockerLogo,
  },
  {
    key: "mysql",
    title: "MySQL",
    href: "https://www.mysql.com/",
    component: MysqlLogo,
  },
  {
    key: "mongodb",
    title: "MongoDB",
    href: "https://www.mongodb.com/",
    component: MongodbLogo,
  },
  {
    key: "redis",
    title: "Redis",
    href: "https://redis.io/",
    component: RedisLogo,
  },
  {
    key: "figma",
    title: "Figma",
    href: "https://www.figma.com/",
    component: FigmaLogo,
  },
  {
    key: "ps",
    title: "Adobe Photoshop",
    href: "https://www.adobe.com/vn_en/products/photoshop.html",
    component: PsLogo,
  },
];

