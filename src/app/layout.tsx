import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Akash Anumolu | Full Stack Developer",
  description:
    "Full Stack Developer specializing in Golang, React, Flutter, and scalable backend systems. Building modern, production-ready applications.",
  keywords: [
    "Full Stack Developer",
    "Golang",
    "React",
    "Flutter",
    "Backend Developer",
    "Akash Anumolu",
  ],
  authors: [{ name: "Akash Anumolu" }],
  openGraph: {
    title: "Akash Anumolu | Full Stack Developer",
    description:
      "Full Stack Developer specializing in Golang, React, Flutter, and scalable backend systems.",
    url: "https://akash-anumolu.vercel.app",
    siteName: "Akash Anumolu Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Akash Anumolu | Full Stack Developer",
    description:
      "Full Stack Developer specializing in Golang, React, Flutter, and scalable backend systems.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        <main className="min-h-screen pt-[72px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}