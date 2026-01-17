"use client";

interface CalEmbedProps {
  calLink?: string;
}

export function CalEmbed({ calLink = "dylan-j-watkins/30min" }: CalEmbedProps) {
  return (
    <div className="bg-fitness-surface rounded-2xl overflow-hidden shadow-2xl border border-white/10">
      <div className="bg-gradient-to-r from-fitness-primary to-fitness-accent text-white px-4 py-3">
        <h3 className="font-semibold">Book Your Free Consultation</h3>
        <p className="text-sm text-white/80">
          30-minute session with Coach Corey
        </p>
      </div>
      <iframe
        src={`https://cal.com/${calLink}?embed=true&theme=dark&layout=month_view`}
        width="100%"
        height="500"
        frameBorder="0"
        style={{ background: "transparent" }}
        allow="payment"
      />
    </div>
  );
}
