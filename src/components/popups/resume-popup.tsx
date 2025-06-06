
"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface ResumePopupProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
}

// The Google Drive URL is transformed to the /preview version for embedding
const resumeEmbedUrl = "https://drive.google.com/file/d/1QFjxgGxgdGmmfURzfqZyB1p57aNxje8S/preview";

export default function ResumePopup({ isOpen, onOpenChange }: ResumePopupProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[80vw] w-[95vw] h-[85vh] bg-card border-primary/30 text-card-foreground shadow-xl p-0 flex flex-col overflow-hidden">
        <DialogHeader className="p-4 border-b border-border flex-shrink-0">
          <DialogTitle className="text-xl text-accent font-bold">My Resume</DialogTitle>
        </DialogHeader>
        <div className="flex-grow p-1 m-0 bg-muted/10">
          <iframe
            src={resumeEmbedUrl}
            title="Pradeep's Resume"
            className="w-full h-full border-0 rounded-sm"
            allowFullScreen
          ></iframe>
        </div>
      </DialogContent>
    </Dialog>
  );
}
