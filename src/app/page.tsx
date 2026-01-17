"use client";

import { ChatInterface } from "@/components/ChatInterface";

export default function Home() {
  return (
    <main className="min-h-screen bg-fitness-dark">
      <div className="max-w-4xl mx-auto h-screen flex flex-col">
        {/* Header */}
        <header className="p-4 md:p-6 text-center">
          <div className="inline-flex items-center gap-3 bg-fitness-surface border border-white/10 backdrop-blur-sm rounded-full px-6 py-3 glow-red">
            <div className="w-10 h-10 bg-gradient-to-br from-fitness-primary to-fitness-accent rounded-full flex items-center justify-center">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <div className="text-left">
              <h1 className="text-xl font-bold text-white">Coach Corey</h1>
              <p className="text-sm text-white/60">
                Your Personal Fitness Coach
              </p>
            </div>
          </div>
        </header>

        {/* Chat Interface */}
        <div className="flex-1 overflow-hidden">
          <ChatInterface />
        </div>
      </div>
    </main>
  );
}
