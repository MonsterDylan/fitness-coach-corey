"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    Cal?: any;
  }
}

interface CalEmbedProps {
  calLink?: string;
}

export function CalEmbed({ calLink = "dylan-j-watkins/30min" }: CalEmbedProps) {
  const calInitialized = useRef(false);
  const embedRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (calInitialized.current) return;

    const initCal = () => {
      if (!window.Cal || !embedRef.current) return;

      calInitialized.current = true;

      // Use the default namespace approach
      window.Cal("init", { origin: "https://cal.com" });

      window.Cal("inline", {
        elementOrSelector: embedRef.current,
        calLink: calLink,
        config: {
          layout: "month_view",
        },
      });

      window.Cal("ui", {
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    };

    // Check if Cal is already loaded
    if (window.Cal) {
      initCal();
      return;
    }

    // Load Cal.com embed script
    const existingScript = document.querySelector(
      'script[src="https://app.cal.com/embed/embed.js"]'
    );

    if (existingScript) {
      // Script exists, wait for it to load
      const checkCal = setInterval(() => {
        if (window.Cal) {
          clearInterval(checkCal);
          initCal();
        }
      }, 100);

      return () => clearInterval(checkCal);
    }

    const script = document.createElement("script");
    script.src = "https://app.cal.com/embed/embed.js";
    script.async = true;
    document.head.appendChild(script);

    script.onload = initCal;

    return () => {
      // Don't remove script on cleanup - it causes issues with re-renders
    };
  }, [calLink]);

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
      <div className="bg-fitness-primary text-white px-4 py-3">
        <h3 className="font-semibold">Book Your Free Consultation</h3>
        <p className="text-sm text-fitness-light/80">
          30-minute session with Coach Corey
        </p>
      </div>
      <div
        ref={embedRef}
        style={{ width: "100%", height: "500px", overflow: "auto" }}
      />
    </div>
  );
}
