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
    <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
      <img
        src={"U-Turn_Robotics-2.svg"}
        width={500}
        height={500}
        className="mix-blend-difference"
      />
      <h1 className="text-4xl font-medium">U-Turn Robotics</h1>
      <p className="text-3xl">
        Site in progress.
        {Array(dotCount)
          .fill(0)
          .map(() => ".")}
      </p>
    </main>
  );
}
