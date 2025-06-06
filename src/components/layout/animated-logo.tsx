
"use client";

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const LOGO_TEXT = "PRADEEP";

const AnimatedLogo = () => {
  const [visibleChars, setVisibleChars] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (visibleChars < LOGO_TEXT.length) {
      const timeoutId = setTimeout(() => {
        setVisibleChars((v) => v + 1);
      }, 150); // Typing speed
      return () => clearTimeout(timeoutId);
    } else {
      // Once typing is complete, start blinking cursor
      const cursorInterval = setInterval(() => {
        setShowCursor((s) => !s);
      }, 500); // Cursor blink speed
      return () => clearInterval(cursorInterval);
    }
  }, [visibleChars]);

  return (
    <div className="font-mono text-2xl md:text-3xl font-bold text-primary fixed top-4 left-4 z-50 select-none">
      {LOGO_TEXT.split('').map((char, index) => (
        <span
          key={index}
          className={cn(
            'transition-opacity duration-100 ease-in-out', // Faster reveal per char
            index < visibleChars ? 'opacity-100' : 'opacity-0'
          )}
        >
          {char}
        </span>
      ))}
      <span
        className={cn(
          'inline-block',
          showCursor ? 'opacity-100' : 'opacity-0',
           // Slightly different animation for a finished cursor
          visibleChars === LOGO_TEXT.length ? 'animate-pulse duration-700' : 'animate-pulse' 
        )}
      >
        _
      </span>
    </div>
  );
};

export default AnimatedLogo;
