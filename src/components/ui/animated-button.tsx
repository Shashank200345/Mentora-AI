import React from 'react';

export const AnimatedButton = () => {
  return (
    <button className="relative inline-flex h-12 active:scale-95 transition overflow-hidden rounded-full p-[1.5px] focus:outline-none">
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,var(--primary-100)_25%,var(--primary-200)_50%,var(--primary-100)_75%,transparent_100%)]">
      </span>
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-[var(--bg-100)] px-7 text-sm font-medium text-[var(--text-100)] backdrop-blur-3xl gap-2">
        Start Learning From AI
        <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
          <path d="M429.6 92.1c4.9-11.9 2.1-25.6-7-34.7s-22.8-11.9-34.7-7l-352 144c-14.2 5.8-22.2 20.8-19.3 35.8s16.1 25.8 31.4 25.8H224V432c0 15.3 10.8 28.4 25.8 31.4s30-5.1 35.8-19.3l144-352z" />
        </svg>
      </span>
    </button>
  );
}; 