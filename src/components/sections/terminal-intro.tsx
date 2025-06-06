"use client";

import { useState, useEffect, useRef } from "react";
import { Terminal as TerminalIcon, ArrowRight, Briefcase } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import HireMePopup from "@/components/popups/hire-me-popup";

const NAME_TO_ANIMATE = "PRADEEP";

// Java code parts for styling
const L1_KW = "public class ";
const L1_CN = "Main";
const L1_BR_O = " {";

const L2_IND = "    ";
const L2_KW = "public static void ";
const L2_MN = "main";
const L2_PARAMS_TYPE = "String";
const L2_PARAMS_ARR = "[]";
const L2_PARAMS_VAR = " args";
const L2_BR_O_PARAMS = " {"; // Renamed to avoid conflict

const L3_IND = "        ";
const L3_METHOD = "System.out.println";
const L3_STR_O = '("';
const L3_STR_C = '");';

const L4_IND = "    ";
const L4_BR_C = "}";

const L5_BR_C = "}";

export default function TerminalIntro() {
  const [visibleCharsInName, setVisibleCharsInName] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [isHireMePopupOpen, setIsHireMePopupOpen] = useState(false);
  const terminalBodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (visibleCharsInName < NAME_TO_ANIMATE.length) {
      const timeoutId = setTimeout(() => {
        setVisibleCharsInName((v) => v + 1);
      }, 150); // Typing speed for the name
      return () => clearTimeout(timeoutId);
    } else {
      // Once typing is complete, start blinking cursor
      const cursorInterval = setInterval(() => {
        setShowCursor((s) => !s);
      }, 530); // Cursor blink speed
      return () => clearInterval(cursorInterval);
    }
  }, [visibleCharsInName]);

  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [visibleCharsInName]);

  return (
    <>
      <section
        id="hero"
        className="min-h-screen flex flex-col items-center justify-center px-4 pb-4 pt-4 sm:px-8 sm:pb-8 sm:pt-8 bg-background text-foreground"
      >
        <div className="w-full max-w-3xl bg-card shadow-2xl rounded-lg overflow-hidden border border-primary/30">
          <div className="bg-muted p-3 flex items-center gap-2 border-b border-border">
            <span className="h-3 w-3 bg-destructive rounded-full"></span>
            <span className="h-3 w-3 bg-accent rounded-full"></span>
            <span className="h-3 w-3 bg-primary rounded-full"></span>
            <TerminalIcon className="h-5 w-5 ml-auto text-primary" />
            <span className="font-mono text-sm text-primary">DevConsole</span>
          </div>
          <div
            ref={terminalBodyRef}
            className="p-6 font-mono text-[10px] md:text-xl  leading-relaxed h-60 sm:h-72 overflow-y-auto font-bold"
          >
            <pre className="whitespace-pre-wrap ">
              <span className="text-primary">{L1_KW}</span>
              <span className="text-accent">{L1_CN}</span>
              <span className="text-foreground">{L1_BR_O}</span>
              {"\n"}
              <span className="text-foreground">{L2_IND}</span>
              <span className="text-primary">{L2_KW}</span>
              <span className="text-foreground">{L2_MN}(</span>
              <span className="text-primary">{L2_PARAMS_TYPE}</span>
              <span className="text-foreground">{L2_PARAMS_ARR}</span>
              <span className="text-foreground">{L2_PARAMS_VAR}</span>
              <span className="text-foreground">)</span>
              <span className="text-foreground">{L2_BR_O_PARAMS}</span>
              {"\n"}
              <span className="text-foreground">{L3_IND}</span>
              <span className="text-foreground">{L3_METHOD}</span>
              <span className="text-accent">{L3_STR_O}</span>
              <span className="text-accent">
                {NAME_TO_ANIMATE.substring(0, visibleCharsInName)}
              </span>
              {visibleCharsInName === NAME_TO_ANIMATE.length && (
                <span
                  className={cn(
                    "inline-block text-accent", // Cursor color matches string
                    showCursor ? "opacity-100" : "opacity-0",
                    "animate-pulse duration-700"
                  )}
                >
                  _
                </span>
              )}
              {visibleCharsInName < NAME_TO_ANIMATE.length && (
                <span
                  className={cn(
                    "inline-block text-accent", // Cursor color matches string
                    "animate-pulse"
                  )}
                >
                  _
                </span>
              )}
              <span className="text-accent">{L3_STR_C}</span>
              {"\n"}
              <span className="text-foreground">{L4_IND}</span>
              <span className="text-foreground">{L4_BR_C}</span>
              {"\n"}
              <span className="text-foreground">{L5_BR_C}</span>
            </pre>
          </div>
        </div>
        <div className="mt-10 text-center">
          {/* Removed h1 and p elements here */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            {" "}
            {/* Added mt-8 for spacing */}
            <Button
              variant="outline"
              size="lg"
              className="bg-transparent border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 ease-in-out group text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4"
              onClick={() => {
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Explore My Work{" "}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="default"
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/80 transition-all duration-300 ease-in-out group text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4"
              onClick={() => setIsHireMePopupOpen(true)}
            >
              <Briefcase className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />{" "}
              Hire Me
            </Button>
          </div>
          <p className="text-sm text-muted-foreground/70 mt-12">
            Scroll down to see more or use the navigation menu.
          </p>
        </div>
      </section>
      <HireMePopup
        isOpen={isHireMePopupOpen}
        onOpenChange={setIsHireMePopupOpen}
      />
    </>
  );
}
