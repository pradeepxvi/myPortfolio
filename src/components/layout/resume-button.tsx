
"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { FileText } from 'lucide-react';
import ResumePopup from '@/components/popups/resume-popup';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

export default function ResumeButton() {
  const [isResumePopupOpen, setIsResumePopupOpen] = useState(false);

  return (
    <>
      <TooltipProvider delayDuration={100}>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="fixed top-4 right-4 z-50 rounded-full h-12 w-12 bg-card/80 backdrop-blur-sm border-primary/50 hover:bg-primary hover:text-primary-foreground transition-all duration-300 ease-in-out shadow-lg hover:shadow-primary/50"
              onClick={() => setIsResumePopupOpen(true)}
              aria-label="View Resume"
            >
              <FileText className="h-5 w-5" />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="bottom" className="bg-popover text-popover-foreground border-primary/50">
            <p>View Resume</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <ResumePopup isOpen={isResumePopupOpen} onOpenChange={setIsResumePopupOpen} />
    </>
  );
}
