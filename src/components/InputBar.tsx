"use client";

import { useState, KeyboardEvent } from "react";

interface InputBarProps {
  onSend: (message: string) => void;
  isLoading: boolean;
}

export function InputBar({ onSend, isLoading }: InputBarProps) {
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    if (input.trim() && !isLoading) {
      onSend(input);
      setInput("");
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="flex items-end gap-3">
      <div className="flex-1 relative">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask about workouts, nutrition, or your fitness goals..."
          disabled={isLoading}
          rows={1}
          className="w-full resize-none bg-white/10 text-white placeholder-white/40 rounded-2xl px-4 py-3 pr-12 focus:outline-none focus:ring-2 focus:ring-fitness-accent/50 disabled:opacity-50 transition-all"
          style={{ minHeight: "48px", maxHeight: "120px" }}
        />
      </div>
      <button
        onClick={handleSubmit}
        disabled={!input.trim() || isLoading}
        className="w-12 h-12 bg-fitness-accent hover:bg-fitness-primary disabled:bg-white/10 disabled:cursor-not-allowed rounded-full flex items-center justify-center transition-colors"
      >
        <svg
          className={`w-5 h-5 ${
            input.trim() && !isLoading ? "text-fitness-dark" : "text-white/40"
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
          />
        </svg>
      </button>
    </div>
  );
}
