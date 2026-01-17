import { Message } from "./ChatInterface";

interface MessageBubbleProps {
  message: Message;
}

export function MessageBubble({ message }: MessageBubbleProps) {
  const isUser = message.role === "user";

  return (
    <div className={`flex items-start gap-3 ${isUser ? "flex-row-reverse" : ""}`}>
      {/* Avatar */}
      <div
        className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
          isUser ? "bg-blue-500" : "bg-fitness-accent"
        }`}
      >
        <span className={`text-sm font-bold ${isUser ? "text-white" : "text-fitness-dark"}`}>
          {isUser ? "Y" : "C"}
        </span>
      </div>

      {/* Message Bubble */}
      <div
        className={`max-w-[80%] md:max-w-[70%] rounded-2xl px-4 py-3 ${
          isUser
            ? "bg-blue-500 text-white rounded-tr-sm"
            : "bg-white/10 text-white rounded-tl-sm"
        }`}
      >
        <p className="whitespace-pre-wrap text-sm md:text-base leading-relaxed">
          {message.content}
        </p>
        <p
          className={`text-xs mt-2 ${
            isUser ? "text-blue-100" : "text-white/50"
          }`}
        >
          {message.timestamp.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </p>
      </div>
    </div>
  );
}
