"use client";
import React from "react";
import { motion } from "framer-motion";

export const CircleIcon = ({
  delay = 0,
  className,
  style,
}: {
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.2,
        delay,
      }}
      className={`h-2 w-2 rounded-full bg-[var(--primary-100)] ${className}`}
      style={style}
    />
  );
}; 