import Featured from "@/components/Featured";
import Footer from "@/components/Footer";
import { products } from "@/components/HeroParallaxDemo";
import HeroSection from "@/components/HeroSection";
import { LampDemo } from "@/components/LampDemo";
import { TabsDemo } from "@/components/TabsDemo";
import { HeroParallax } from "@/components/ui/hero-parallax";

import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <HeroParallax products={products} />
      <Featured />
      <TabsDemo />
      <LampDemo />
      <Footer />
      
    </div>
  );
}
