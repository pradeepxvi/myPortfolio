"use client";

import Link from 'next/link';
import { Home, Briefcase, Wrench, Users, Terminal, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const menuItems = [
  { href: '#hero', label: 'Home', icon: <Home className="h-5 w-5" /> },
  { href: '#projects', label: 'Projects', icon: <Briefcase className="h-5 w-5" /> },
  { href: '#skills', label: 'Skills', icon: <Wrench className="h-5 w-5" /> },
  { href: '#socials', label: 'Socials', icon: <Users className="h-5 w-5" /> },
];

export default function FloatingMenu() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <TooltipProvider delayDuration={100}>
      <nav className="fixed bottom-4 right-4 z-50 flex flex-col gap-3">
        {menuItems.map((item) => (
          <Tooltip key={item.href}>
            <TooltipTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full h-12 w-12 bg-card/80 backdrop-blur-sm border-primary/50 hover:bg-primary hover:text-primary-foreground transition-all duration-300 ease-in-out shadow-lg hover:shadow-primary/50"
                asChild
              >
                <Link href={item.href} onClick={(e) => handleClick(e, item.href)} aria-label={item.label}>
                  {item.icon}
                </Link>
              </Button>
            </TooltipTrigger>
            <TooltipContent side="left" className="bg-popover text-popover-foreground border-primary/50">
              <p>{item.label}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </nav>
    </TooltipProvider>
  );
}
