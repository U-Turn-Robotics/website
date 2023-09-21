"use client";

import { useEffect, useReducer } from "react";

export default function Home() {
  const [dotCount, incrementDotCount] = useReducer<(prev: number) => number>(
    (prev) => (prev + 1) % 4,
    0
  );

  useEffect(() => {
    const i = setInterval(incrementDotCount, 500);
    return () => {
      clearInterval(i);
    };
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-28">
      <img
        src={"U-Turn_Robotics-transparent.svg"}
        width={500}
        height={500}
        className="w-[70vw] max-w-[35em] 
        transition-[filter] duration-500 
        [--logo-drop-shadow-o:0.2] 
        [filter:drop-shadow(0_0_22px_rgb(var(--background-end-rgb),var(--logo-drop-shadow-o)))] 
        hover:[--logo-drop-shadow-o:0.4] active:[--logo-drop-shadow-o:0.4]"
      />
      <h1 className="text-4xl font-medium">U-Turn Robotics</h1>
      <p className="relative text-3xl">
        Site under construction
        <span className="absolute left-full">
          {Array(dotCount)
            .fill(0)
            .map(() => ".")}
        </span>
      </p>
    </main>
  );
}
