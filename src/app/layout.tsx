import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Coach Corey - Your Personal Fitness Coach",
  description:
    "Get personalized training programs and fitness advice from Coach Corey",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
