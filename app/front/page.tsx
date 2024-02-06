"use client";

import Hero from "../components/heroSection/hero";
import Projects from "../components/projectsSection/projects";

export default function Home() {
  return (
    <>
      <link rel="icon" href="/favicon.ico" sizes="any" />

      <div className="w-full h-full flex flex-col items-center justify-center ">
        <Hero />
      </div>
    </>
  );
}
