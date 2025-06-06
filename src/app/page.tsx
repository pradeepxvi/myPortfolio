import TerminalIntro from "@/components/sections/terminal-intro";
import ProjectShowcase from "@/components/sections/project-showcase";
import SkillsSection from "@/components/sections/skills-section";
import SocialsSection from "@/components/sections/socials-section";

export default function HomePage() {
  return (
    <main className="flex flex-col">
      <TerminalIntro />
      <ProjectShowcase />
      <SkillsSection />
      <SocialsSection />
      <footer className="text-center py-8 bg-card text-muted-foreground border-t border-border">
        <p>
          &copy; {new Date().getFullYear()} DevConsole Portfolio. All rights
          reserved.
        </p>
        <p className="text-xs mt-1">Built with Next.js, Tailwind CSS, and ❤️</p>
      </footer>
    </main>
  );
}
