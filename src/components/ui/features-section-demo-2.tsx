import React from "react";
import { motion } from "framer-motion";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { GridBackground } from "./grid-background";

const features = [
  {
    title: "Live Teaching",
    description:
      "Attend AI-powered lectures on any topic with real-time interaction and personalized pace.",
    icon: <IconTerminal2 />,
  },
  {
    title: "Instant Doubt Solving ",
    description:
      "Get step-by-step solutions to your problems in real-time through natural conversations.",
    icon: <IconEaseInOut />,
  },
  {
    title: "Interactive Learning",
    description:
      "Experience dynamic explanations that adapt to your understanding level.",
    icon: <IconCurrencyDollar />,
  },
  {
    title: "Focus Tracker",
    description: "Stay concentrated during study sessions with AI-powered focus monitoring.",
    icon: <IconCloud />,
  },
  {
    title: "Quick Revision",
    description: "Access AI-generated video summaries and flashcards for efficient revision.",
    icon: <IconRouteAltLeft />,
  },
  {
    title: "Voice & Text Interaction",
    description:
      "Interact with AI using voice commands or text messages, making learning more natural and accessible.",
    icon: <IconHelp />,
  },
  {
    title: "Technical Support",
    description:
      "Share your screen for instant debugging and coding assistance from AI.",
    icon: <IconAdjustmentsBolt />,
  },
  {
    title: "AI Emotion & Attention Detection",
    description: "Understands engagement levels and adjusts teaching",
    icon: <IconHeart />,
  },
];

export default function FeaturesSectionDemo2() {
  return (
    <GridBackground height="h-[60rem]">
      <div className="relative flex flex-col gap-32">
        <div className="flex flex-col items-center gap-16 pt-24">
          <div className="text-center max-w-3xl mx-auto px-4">
            <h2 className="text-4xl font-bold tracking-tight mb-4 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              Packed with Features
            </h2>
            <p className="text-lg text-gray-400">
              Experience the future of learning with our AI-powered platform. From personalized teaching to real-time doubt solving, we've got everything you need to accelerate your learning journey.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 w-full max-w-7xl mx-auto">
            {features.map((feature, index) => (
              <Feature key={feature.title} {...feature} index={index} />
            ))}
          </div>
        </div>
      </div>
    </GridBackground>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-30 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-30 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-gray-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
          {title}
        </span>
      </div>
      <p className="text-sm text-gray-400 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
}; 