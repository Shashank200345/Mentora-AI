import React from 'react';
import HeroHighlightDemo from "./components/hero-highlight-demo";
import NavbarDemo from "./components/resizable-navbar-demo";
import FeaturesSectionDemo2 from "@/components/ui/features-section-demo-2";
import TracingBeamDemo from "@/components/ui/tracing-beam-demo";
import SVGMaskEffectDemo from "@/components/ui/svg-mask-effect-demo";
import { motion } from "framer-motion";
import { GridBackground } from "@/components/ui/grid-background";


export default function App() {
  return (
    <div className="min-h-screen bg-[var(--bg-100)] text-[var(--text-100)]">
      {/* Navbar */}
      <NavbarDemo />

      {/* Hero Section */}
      <HeroHighlightDemo />

      {/* Features Section */}
      <FeaturesSectionDemo2 />

      {/* Tech Stack Section */}
      <div className="py-32">
        <TracingBeamDemo />
      </div>

      {/* CTA Section with SVG Mask Effect */}
      <GridBackground height="h-[50rem]">
        <SVGMaskEffectDemo />
      </GridBackground>

      {/* Footer */}
      
        <div className="relative z-20 flex flex-col items-center justify-center gap-4 px-4 text-center">
          <h3 className="text-2xl font-bold">Project Mentora-AI</h3>
          <p className="text-muted-foreground">
            Created by Team Tech Titans
          </p>
        </div>
      
    </div>
  );
}