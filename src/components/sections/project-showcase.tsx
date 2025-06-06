import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";

interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageHint: string;
  techStack: string[];
  githubUrl?: string;
  liveDemoUrl?: string;
}

const projectsData: Project[] = [
  // {
  //   id: "1",
  //   title: "E-commerce Platform API",
  //   description:
  //     "A robust backend for an e-commerce website, featuring product management, user authentication, and order processing. Built with Django and DRF.",
  //   imageUrl: "https://placehold.co/600x400.png",
  //   imageHint: "code backend",
  //   techStack: ["Python", "Django", "DRF", "PostgreSQL", "REST API"],
  //   githubUrl: "https://github.com/yourusername/project1",
  //   liveDemoUrl: "#",
  // },
];

export default function ProjectShowcase() {
  return (
    <section id="projects" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
          My Projects
        </h2>

        {projectsData.length == 0 && (
          <>
            <h1 className="text-green text-4xl text-center uppercase">
              comming soon
            </h1>
          </>
        )}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <Card
              key={project.id}
              className="flex flex-col overflow-hidden shadow-lg hover:shadow-primary/30 transition-shadow duration-300 border-border hover:border-primary/50"
            >
              <div className="relative w-full h-48 sm:h-56 md:h-64">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  data-ai-hint={project.imageHint}
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-accent">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground text-sm pt-1 h-20 overflow-y-auto">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-foreground mb-2">
                    Tech Stack:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex gap-2 justify-end">
                {project.githubUrl && (
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" /> GitHub
                    </a>
                  </Button>
                )}
                {project.liveDemoUrl && (
                  <Button
                    variant="default"
                    size="sm"
                    asChild
                    className="bg-accent text-accent-foreground hover:bg-accent/80"
                  >
                    <a
                      href={project.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
