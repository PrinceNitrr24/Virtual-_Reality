"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp";
import Image from "next/image";

export function LampDemo() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        Prince <br /> Kumar
      </motion.h1>
      <Image
        src="/img.jpg"
        alt="image"
        width={500}
        height={500}
        className="absolute rounded-full max-w-full h-auto sm:max-w-2xl sm:max-h-2xl shadow-lg transition duration-300 hover:shadow-xl"
      />
    </LampContainer>
  );
}
