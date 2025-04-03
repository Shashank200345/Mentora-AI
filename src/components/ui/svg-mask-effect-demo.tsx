"use client";
import { MaskContainer } from "@/components/ui/svg-mask-effect";

export default function SVGMaskEffectDemo() {
  return (
    <div className="flex h-[50rem] w-full items-center justify-center overflow-hidden">
      <MaskContainer
        revealText={
          <p className="mx-auto max-w-4xl text-center text-4xl font-bold text-white dark:text-white">
            Join the revolution in education. Experience learning like never before with AI-powered personalized education.
          </p>
        }
        className="h-[40rem] rounded-md text-black dark:text-black"
      >
        Transform your learning journey with{" "}
        <span className="text-blue-500">Shiksha Saarthi</span> - where{" "}
        <span className="text-blue-500">AI meets education</span> to create the future of learning.
      </MaskContainer>
    </div>
  );
} 