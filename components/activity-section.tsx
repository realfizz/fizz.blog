import GitHubGraph from "@/components/github-graph";
import { siteConfig } from "@/settings/config";

export function ActivitySection() {
  const { activity } = siteConfig;

  return (
    <div className="mt-8 space-y-4">
      <h2 className="text-sm text-muted-foreground">
        <span className="font-medium text-white">{activity.title}</span>{" "}
        {activity.subtitle}
      </h2>
      <GitHubGraph />
    </div>
  );
}

