const WEBHOOK_URL = process.env.NEXT_PUBLIC_WEBHOOK_URL!;

export interface ChatRequest {
  message: string;
  sessionId: string;
}

export interface ChatResponse {
  response: string;
  sessionId: string;
  showBookingLink?: boolean;
}

export async function sendMessage(request: ChatRequest): Promise<ChatResponse> {
  const res = await fetch(WEBHOOK_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(request),
  });

  if (!res.ok) {
    throw new Error(`Failed to send message: ${res.status}`);
  }

  return res.json();
}
