import type { Metadata } from "next";
import CVView from "@/components/CVView";

export const metadata: Metadata = {
  title: "Alishba Shahid — CV",
  description: "Full resume preview and PDF download for Alishba Shahid, Full Stack Developer.",
};

export default function CVPage() {
  return <CVView />;
}
