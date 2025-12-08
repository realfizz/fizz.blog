"use client";

import {
  Marquee,
  MarqueeContent,
  MarqueeFade,
  MarqueeItem,
} from "@/components/kibo-ui/marquee";
import { TECH_STACK } from "@/lib/settings/tech-stack";

export function TechStackMarquee() {
  return (
    <div className="w-full">
      <Marquee className="py-4">
        <MarqueeFade side="left" />
        <MarqueeContent>
          {TECH_STACK.map((tech) => {
            const LogoComponent = tech.component;

            return (
              <MarqueeItem key={tech.key}>
                <a
                  href={tech.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={tech.title}
                  className="flex h-12 w-12 items-center justify-center rounded-lg border border-border/40 transition-colors hover:bg-border"
                >
                  <LogoComponent className="h-6 w-6 [&>div]:h-6 [&>div]:w-6 [&>svg]:h-6 [&>svg]:w-6" />
                </a>
              </MarqueeItem>
            );
          })}
        </MarqueeContent>
        <MarqueeFade side="right" />
      </Marquee>
    </div>
  );
}