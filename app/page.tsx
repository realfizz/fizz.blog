import { ActivitySection } from "@/components/activity-section";
import { Hero } from "@/components/hero";
import { ProjectsSection } from "@/components/projects-section";
import { TechStackMarquee } from "@/components/tech-stack-marquee";
import { Footer } from "@/components/footer";
export default function Home() {
  return (
    <div className="page">
      <Hero />
      <TechStackMarquee />
      <ProjectsSection />
      <ActivitySection />
      <Footer />
    </div>
  );
}
