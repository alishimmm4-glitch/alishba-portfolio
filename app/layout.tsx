import type { Metadata, Viewport } from "next";
import "@fontsource/space-grotesk/500.css";
import "@fontsource/space-grotesk/600.css";
import "@fontsource/space-grotesk/700.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/jetbrains-mono/500.css";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://alishba-shahid.vercel.app"),
  title: "Alishba Shahid — Full Stack Developer",
  description:
    "Alishba Shahid is a Full Stack Developer and BSCS graduate from Lahore, Pakistan, building MERN stack applications like LifeLine, a blood donation management system, and an AI-based Test Generator.",
  keywords: [
    "Alishba Shahid",
    "Full Stack Developer",
    "MERN Stack Developer",
    "React Developer Lahore",
    "BSCS Graduate Portfolio",
  ],
  authors: [{ name: "Alishba Shahid" }],
  openGraph: {
    title: "Alishba Shahid — Full Stack Developer",
    description:
      "Full Stack Developer & BSCS Graduate from Lahore, Pakistan. MERN stack, REST APIs, and product-minded engineering.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col bg-bg text-text">
        <ThemeProvider>
          <Navbar />
          <main className="flex-1 pt-16">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
