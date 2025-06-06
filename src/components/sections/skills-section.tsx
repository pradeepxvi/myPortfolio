import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Server, PenTool, Cpu } from "lucide-react"; // Cpu for Programming Languages

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

const skillsData: SkillCategory[] = [
  {
    title: "Frontend",
    icon: <Code className="h-6 w-6 text-primary" />,
    skills: [
      "React",
      "TypeScript",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Responsive Design",
    ],
  },
  {
    title: "Backend",
    icon: <Server className="h-6 w-6 text-primary" />,
    skills: ["Python", "Django", "Django Rest Framework (DRF)", "RESTful APIs"],
  },
  {
    title: "APIs & Tools",
    icon: <PenTool className="h-6 w-6 text-primary" />,
    skills: [
      "Git",
      "GitHub",
      "Linux (Kali)",
      "Postman",
      "VS Code",
      "Terminal Workflows",
    ],
  },
  {
    title: "Programming Languages",
    icon: <Cpu className="h-6 w-6 text-primary" />,
    skills: ["Python", "JavaScript", "C", "Java"],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-16 md:py-24 bg-muted/20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
          My Expertise
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((category) => (
            <Card
              key={category.title}
              className="shadow-lg hover:shadow-accent/30 transition-shadow duration-300 border-border hover:border-accent/50"
            >
              <CardHeader className="flex flex-row items-center space-x-4 pb-4">
                {category.icon}
                <CardTitle className="text-xl font-semibold text-accent">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="text-sm border-primary/50 text-foreground hover:bg-primary/10"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
