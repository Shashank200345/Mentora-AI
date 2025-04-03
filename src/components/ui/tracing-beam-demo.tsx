"use client";
import React from "react";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { Cover } from "@/components/ui/cover";

export default function TracingBeamDemo() {
  return (
    <div className="relative py-20">
      <div className="max-w-4xl mx-auto px-6 mb-16">
        <h1 className="text-5xl md:text-6xl font-bold text-center mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary-100)] to-[var(--primary-200)]">
            Tech Stack &
          </span>{" "}
          <Cover>Architecture</Cover>
        </h1>
        <p className="text-gray-400 text-center text-lg">
          Explore the technologies and architecture powering Project Shiksha Saarthi
        </p>
      </div>
      
      <TracingBeam className="px-6">
        <div className="max-w-2xl mx-auto antialiased relative">
          {techContent.map((item, index) => (
            <div key={`content-${index}`} className="mb-16">
              <h2 className="bg-gradient-to-br from-[var(--primary-100)] to-[var(--primary-200)] text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
                {item.badge}
              </h2>

              <p className="text-2xl mb-4 font-bold text-white">
                {item.title}
              </p>

              <div className="text-sm prose prose-sm dark:prose-invert">
                {item?.image && (
                  <div className="w-full h-48 relative mb-10 overflow-hidden rounded-lg">
                    <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary-100)]/20 to-[var(--primary-200)]/20" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
                  </div>
                )}
                <div className="text-gray-400 space-y-4">
                  {item.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </TracingBeam>
    </div>
  );
}

const techContent = [
  {
    title: "Frontend Architecture with React & Next.js",
    description: (
      <>
        <p className="text-base leading-relaxed">
          The frontend is built with Next.js 14 and React, utilizing Server Components and the App Router for optimal performance. We've implemented a modern component architecture with custom hooks for state management and reusable UI patterns.
        </p>
        <div className="pl-4 border-l-2 border-[var(--primary-100)]/30">
          <p className="text-base font-medium mb-2">Key features:</p>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>Server-side rendering for improved SEO</li>
            <li>Client-side interactivity with React hooks</li>
            <li>Dynamic routing and page transitions</li>
            <li>Responsive design with Tailwind CSS</li>
          </ul>
        </div>
      </>
    ),
    badge: "Frontend",
    image: true
  },
  {
    title: "Backend Infrastructure with Node.js & Express",
    description: (
      <>
        <p className="text-base leading-relaxed">
          Our backend is powered by Node.js and Express, providing a robust RESTful API architecture. The server handles authentication, real-time communications, and data processing through a microservices architecture.
        </p>
        <div className="pl-4 border-l-2 border-[var(--primary-100)]/30">
          <p className="text-base font-medium mb-2">Infrastructure highlights:</p>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>JWT-based authentication system</li>
            <li>WebSocket integration for real-time features</li>
            <li>Rate limiting and request validation</li>
            <li>API documentation with Swagger</li>
          </ul>
        </div>
      </>
    ),
    badge: "Backend",
    image: true
  },
  {
    title: "Data Management with MongoDB",
    description: (
      <>
        <p className="text-base leading-relaxed">
          MongoDB serves as our primary database, chosen for its flexibility and scalability. We've implemented advanced data modeling techniques and optimization strategies for efficient data retrieval and storage.
        </p>
        <div className="pl-4 border-l-2 border-[var(--primary-100)]/30">
          <p className="text-base font-medium mb-2">Database features:</p>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>Mongoose ODM for structured data models</li>
            <li>Aggregation pipelines for complex queries</li>
            <li>Indexing strategies for performance</li>
            <li>Data replication for reliability</li>
          </ul>
        </div>
      </>
    ),
    badge: "Database",
    image: true
  },
  {
    title: "AI & Machine Learning with Python",
    description: (
      <>
        <p className="text-base leading-relaxed">
          The AI backend is built with Python, utilizing TensorFlow for deep learning models and Flask for API endpoints. This powers our intelligent features like personalized learning paths and attention detection.
        </p>
        <div className="pl-4 border-l-2 border-[var(--primary-100)]/30">
          <p className="text-base font-medium mb-2">AI capabilities:</p>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>Custom neural networks for learning pattern analysis</li>
            <li>Natural Language Processing for doubt solving</li>
            <li>Real-time video processing with OpenCV</li>
            <li>Model training and deployment pipeline</li>
          </ul>
        </div>
      </>
    ),
    badge: "AI/ML",
    image: true
  },
  {
    title: "Computer Vision Integration",
    description: (
      <>
        <p className="text-base leading-relaxed">
          OpenCV powers our advanced computer vision features, enabling real-time video analysis for student engagement tracking and interactive learning experiences.
        </p>
        <div className="pl-4 border-l-2 border-[var(--primary-100)]/30">
          <p className="text-base font-medium mb-2">Vision features:</p>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>Face detection and tracking</li>
            <li>Gesture recognition for interaction</li>
            <li>Attention span analysis</li>
            <li>Real-time video processing optimization</li>
          </ul>
        </div>
      </>
    ),
    badge: "Computer Vision",
    image: true
  }
]; 