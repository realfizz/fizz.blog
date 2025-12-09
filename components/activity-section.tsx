import GitHubGraph from "@/components/github-graph";
import { GitHubIcon } from "@/components/ui/github-icon";
import { siteConfig } from "@/settings/config";

export function ActivitySection() {
  const { activity } = siteConfig;

  return (
    <div className="mt-8 space-y-4">
      <h2 className="flex items-center justify-between gap-2 text-sm text-muted-foreground">
        <span>
          <span className="font-medium text-white">{activity.title}</span>{" "}
          {activity.subtitle}
        </span>
        <a
          href={siteConfig.hero.handleUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-full p-1 transition hover:text-white"
          aria-label="github"
        >
          <GitHubIcon className="h-4 w-4" />
        </a>
      </h2>
      <GitHubGraph />
    </div>
  );
}

