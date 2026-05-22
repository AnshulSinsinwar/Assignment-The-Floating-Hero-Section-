import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Praava — Legal Work Platform",
  description:
    "A single platform to manage every part of your legal work. Track matters, coordinate schedules, manage clients, centralize documents, and handle communication.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning className="min-h-screen antialiased bg-[#f6f7fb] text-[#0f172a] dark:bg-[#0f1420] dark:text-[#e2e8f0]">
        {children}
      </body>
    </html>
  );
}
