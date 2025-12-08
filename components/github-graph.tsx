"use client";

import {
  ContributionGraph,
  ContributionGraphBlock,
  ContributionGraphCalendar,
  ContributionGraphFooter,
  ContributionGraphLegend,
  ContributionGraphTotalCount,
} from "@/components/kibo-ui/contribution-graph";
import { siteConfig } from "@/settings/config";
import { useEffect, useState } from "react";
import { subYears, startOfDay } from "date-fns";

interface GitHubContributionsResponse {
  contributions: Array<{
    date: string;
    count: number;
    level: number;
  }>;
  total: Record<string, number>;
}

const username = siteConfig.activity.githubUsername;

const GitHubGraph = () => {
  const [contributions, setContributions] = useState<Array<{ date: string; count: number; level: number }>>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContributions = async () => {
      try {
        const url = new URL(`/v4/${username}`, 'https://github-contributions-api.jogruber.de');
        const response = await fetch(url);
        const data = (await response.json()) as GitHubContributionsResponse;

        const now = new Date();
        const oneYearAgo = startOfDay(subYears(now, 1));
        const today = startOfDay(now);

        const pastYearContributions = data.contributions.filter(contribution => {
          const contributionDate = new Date(contribution.date);
          return contributionDate >= oneYearAgo && contributionDate <= today;
        });

        setContributions(pastYearContributions);
      } catch (error) {
        console.error('Failed to fetch GitHub contributions:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchContributions();
  }, []);

  if (loading) {
    return <div className="text-muted-foreground">Loading contributions...</div>;
  }

  return (
    <ContributionGraph data={contributions}>
      <ContributionGraphCalendar className="overflow-x-hidden">
        {({ activity, dayIndex, weekIndex }) => (
          <ContributionGraphBlock
            activity={activity}
            dayIndex={dayIndex}
            weekIndex={weekIndex}
          />
        )}
      </ContributionGraphCalendar>
      <ContributionGraphFooter>
        <ContributionGraphTotalCount />
        <ContributionGraphLegend />
      </ContributionGraphFooter>
    </ContributionGraph>
  );
};

export default GitHubGraph;
