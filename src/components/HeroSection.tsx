import React from "react";
import Link from "next/link";
import { SparklesCore } from "./ui/Sparkles";

const HeroSection = () => {
  return (
    <div className="h-auto md:h-[45rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <div className="w-full absolute h-screen inset-0">
        <video
          className="object-center object-cover"
          src={require("../../public/video1.mp4")}
          autoPlay
          muted
          loop
        />
      </div>
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.1}
          maxSize={6}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#e80ce8"
        />
      </div>
      <div className="p-4 relative z-10 w-full text-center">
        <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-[#2a00fb] via-cyan-300 to-[#fa2af0]">
          VRVerse
          <br />
          Where Reality Meets Virtuality
        </h1>

        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
          Step into VRVerse, where imagination knows no bounds. Explore endless
          worlds, forge new experiences, and redefine reality.
        </p>
        <div className="mt-4">
          <Link
            className="group inline-block rounded-full bg-gradient-to-r from-blue-500 via-black-500 to-pink-500 p-[2px] hover:text-black focus:outline-none focus:ring active:text-opacity-75"
            href="#"
          >
            <span className="block rounded-full bg-black px-8 py-3 text-sm font-medium group-hover:bg-transparent">
              Explore
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
