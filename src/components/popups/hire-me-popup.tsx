// src/components/popups/hire-me-popup.tsx
"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Instagram, Smartphone, Users, Mail, ExternalLink } from "lucide-react";
import XIcon from "@/components/icons/x-icon";

interface SocialLinkItem {
  href: string;
  text: string;
  icon: React.ReactNode;
  isMail?: boolean;
}

const socialLinksData: SocialLinkItem[] = [
  { href: "https://github.com/pradeepxvi", text: "GitHub", icon: <Github className="h-5 w-5" /> },
  { href: "https://linkedin.com/in/pradeepxvi", text: "LinkedIn", icon: <Linkedin className="h-5 w-5" /> },
  { href: "https://x.com/pradeepxvi", text: "X (Twitter)", icon: <XIcon className="h-5 w-5" /> },
  { href: "https://instagram.com/pradeepxvi", text: "Instagram", icon: <Instagram className="h-5 w-5" /> },
  { href: "https://wa.me/1234567890", text: "WhatsApp", icon: <Smartphone className="h-5 w-5" /> },
  { href: "https://discord.com/users/pradeepxvi", text: "Discord (pradeepxvi)", icon: <Users className="h-5 w-5" /> },
  { href: "mailto:pradeepxvi@example.com", text: "pradeepxvi@example.com", icon: <Mail className="h-5 w-5" />, isMail: true },
];

interface HireMePopupProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
}

export default function HireMePopup({ isOpen, onOpenChange }: HireMePopupProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[480px] bg-card border-primary/30 text-card-foreground shadow-xl">
        <DialogHeader className="pt-4">
          <DialogTitle className="text-2xl sm:text-3xl text-accent text-center font-bold">Let's Connect!</DialogTitle>
          <DialogDescription className="text-center text-muted-foreground pt-2">
            Feel free to reach out. I'm always open to new opportunities and collaborations.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-3 py-6">
          {socialLinksData.map((link) => (
            <Button
              key={link.text}
              variant="ghost"
              className="w-full justify-start text-left h-auto py-3 px-4 hover:bg-primary/10 group"
              asChild
            >
              <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={`Visit Pradeep's ${link.text}`}>
                <span className="mr-4 text-primary group-hover:text-accent transition-colors">{link.icon}</span>
                <span className="flex-grow text-foreground group-hover:text-accent transition-colors">{link.text}</span>
                {!link.isMail && <ExternalLink className="ml-auto h-4 w-4 text-muted-foreground group-hover:text-accent transition-colors" />}
              </a>
            </Button>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
