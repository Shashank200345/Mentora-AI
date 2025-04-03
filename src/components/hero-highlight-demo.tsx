"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { AnimatedButton } from "@/components/ui/animated-button";
import { AnimatedShinyTextDemo } from "@/components/magicui/animated-shiny-text-demo";

export default function HeroHighlightDemo() {
  return (
    <HeroHighlight>
      <div className="flex flex-col items-center justify-center gap-8 px-4 text-center sm:px-0">
        <AnimatedShinyTextDemo />
        <h1 className="text-4xl font-bold tracking-tight text-[var(--text-100)] sm:text-6xl">
          Revolutionize Your Learning with{" "}
          <Highlight>Mentora-AI</Highlight>
        </h1>
        <div className="flex flex-col items-center gap-6">
          <p className="max-w-2xl text-base text-[var(--text-200)] sm:text-lg">
            Experience a new era of education with our AI-powered learning platform.
            Personalized lessons, real-time feedback, and adaptive learning paths
            designed to accelerate your growth.
          </p>
          <AnimatedButton />
        </div>
      </div>
    </HeroHighlight>
  );
} 