"use client";

import Hero from "../components/heroSection/hero";
import Projects from "../components/projectsSection/projects";
function trackGradient(e: any) {
  console.log(e);
}

export default function Home() {
  return (
    <div
      onClick={trackGradient}
      className="w-full h-full flex flex-col items-center justify-center "
    >
      <Hero />
      <Projects />
    </div>
  );
}
