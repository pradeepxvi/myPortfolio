
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, ArrowRight, Mail, Smartphone, Users, Instagram } from 'lucide-react';
import XIcon from '@/components/icons/x-icon'; // Updated import

export default function SocialsSection() {
  return (
    <section id="socials" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
          Connect With Me
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="shadow-lg hover:shadow-primary/30 transition-shadow duration-300 border-border hover:border-primary/50">
            <CardHeader className="flex flex-row items-center justify-between space-x-4 pb-2">
              <CardTitle className="text-xl font-semibold text-accent">GitHub Profile</CardTitle>
              <Github className="h-8 w-8 text-primary" />
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Check out my latest projects, contributions, and pinned repositories on GitHub.
              </p>
              <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/80">
                <a href="https://github.com/pradeepxvi" target="_blank" rel="noopener noreferrer">
                  Visit GitHub <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card className="shadow-lg hover:shadow-accent/30 transition-shadow duration-300 border-border hover:border-accent/50">
            <CardHeader className="flex flex-row items-center justify-between space-x-4 pb-2">
              <CardTitle className="text-xl font-semibold text-accent">LinkedIn Profile</CardTitle>
              <Linkedin className="h-8 w-8 text-primary" />
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Connect with me on LinkedIn for professional networking and career updates.
              </p>
              <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/80">
                <a href="https://linkedin.com/in/pradeepxvi" target="_blank" rel="noopener noreferrer">
                  Visit LinkedIn <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card className="shadow-lg hover:shadow-primary/30 transition-shadow duration-300 border-border hover:border-primary/50">
            <CardHeader className="flex flex-row items-center justify-between space-x-4 pb-2">
              <CardTitle className="text-xl font-semibold text-accent">X Profile</CardTitle>
              <XIcon className="h-7 w-7 text-primary" />
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Follow me on X for my thoughts, updates, and tech discussions.
              </p>
              <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/80">
                <a href="https://x.com/pradeepxvi" target="_blank" rel="noopener noreferrer">
                  Visit X <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card className="shadow-lg hover:shadow-accent/30 transition-shadow duration-300 border-border hover:border-accent/50">
            <CardHeader className="flex flex-row items-center justify-between space-x-4 pb-2">
              <CardTitle className="text-xl font-semibold text-accent">Instagram</CardTitle>
              <Instagram className="h-8 w-8 text-primary" />
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Follow my visual journey and updates on Instagram.
              </p>
              <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/80">
                <a href="https://instagram.com/pradeepxvi" target="_blank" rel="noopener noreferrer">
                  Visit Instagram <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card className="shadow-lg hover:shadow-primary/30 transition-shadow duration-300 border-border hover:border-primary/50">
            <CardHeader className="flex flex-row items-center justify-between space-x-4 pb-2">
              <CardTitle className="text-xl font-semibold text-accent">WhatsApp</CardTitle>
              <Smartphone className="h-8 w-8 text-primary" />
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Chat with me directly on WhatsApp for quick communication.
              </p>
              <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/80">
                <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer"> {/* Replace with your actual WhatsApp link/number */}
                  Open WhatsApp <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card className="shadow-lg hover:shadow-accent/30 transition-shadow duration-300 border-border hover:border-accent/50">
            <CardHeader className="flex flex-row items-center justify-between space-x-4 pb-2">
              <CardTitle className="text-xl font-semibold text-accent">Discord</CardTitle>
              <Users className="h-8 w-8 text-primary" /> {/* Using Users icon as a placeholder for Discord */}
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Join my Discord community or send me a friend request: pradeepxvi
              </p>
              <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/80">
                <a href="https://discord.com/users/pradeepxvi" target="_blank" rel="noopener noreferrer"> {/* Replace with your actual Discord server/profile link if different */}
                  Connect on Discord <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </CardContent>
          </Card>

        </div>
         <div className="text-center mt-16">
            <p className="text-muted-foreground">Want to discuss a project or just say hi?</p>
            <Button variant="link" asChild className="text-primary text-lg hover:text-accent">
                <a href="mailto:pradeepxvi@example.com">
                  <Mail className="mr-2 h-5 w-5" /> pradeepxvi@example.com
                </a>
            </Button>
        </div>
      </div>
    </section>
  );
}
