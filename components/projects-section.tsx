import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { siteConfig, type Project } from "@/settings/config";

function ProjectCard({ project }: { project: Project }) {
  return (
    <a target="_blank" href={project.href} rel="noopener noreferrer">
      <div
        className="group relative flex cursor-pointer flex-col overflow-visible p-2 text-neutral-50"
        style={{ border: "1px dashed rgba(113, 113, 122, 0.3)" }}
      >
        <div
          className="pointer-events-none absolute -left-1 -top-1 size-2 transition-colors duration-200"
          style={{
            borderLeft: "1px solid rgba(113, 113, 122, 0.3)",
            borderTop: "1px solid rgba(113, 113, 122, 0.3)",
          }}
        />
        <div
          className="pointer-events-none absolute -right-1 -top-1 size-2 transition-colors duration-200"
          style={{
            borderRight: "1px solid rgba(113, 113, 122, 0.3)",
            borderTop: "1px solid rgba(113, 113, 122, 0.3)",
          }}
        />
        <div
          className="pointer-events-none absolute -bottom-1 -right-1 size-2 transition-colors duration-200"
          style={{
            borderRight: "1px solid rgba(113, 113, 122, 0.3)",
            borderBottom: "1px solid rgba(113, 113, 122, 0.3)",
          }}
        />
        <div
          className="pointer-events-none absolute -bottom-1 -left-1 size-2 transition-colors duration-200"
          style={{
            borderLeft: "1px solid rgba(113, 113, 122, 0.3)",
            borderBottom: "1px solid rgba(113, 113, 122, 0.3)",
          }}
        />
        <div className="pointer-events-none absolute inset-0 -m-1 border border-dashed border-transparent transition-colors duration-200 group-hover:border-white/60" />
        <div className="z-10 h-64 overflow-hidden rounded">
          <Image
            alt={`${project.title} project`}
            width={1280}
            height={176}
            className="h-full object-cover object-top opacity-50 grayscale transition-all duration-200 group-hover:opacity-100 group-hover:grayscale-0"
            src={project.image}
          />
        </div>
        <div className="mt-2 flex flex-col gap-1">
          <div className="flex items-center justify-between gap-1.5 text-sm leading-5">
            <span>{project.title}</span>
            <Badge>{project.badge}</Badge>
          </div>
          <span className="jetbrains-mono line-clamp-2 text-xs text-neutral-400">
            {project.description}
          </span>
        </div>
      </div>
    </a>
  );
}

export function ProjectsSection() {
  const { projects } = siteConfig;

  return (
    <div className="flex flex-col gap-6">
      <span className="text-sm text-muted-foreground">
        {projects.eyebrow}{" "}
        <span className="font-medium text-white">{projects.highlight}</span>
      </span>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {projects.items.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
}

