import Image from "next/image";
import { Tabs } from "./ui/tabs";
import React from "react";

interface DummyContentProps {
  imageUrl: string; 
}

export function TabsDemo() {
  const tabTitles = ["Product", "Services", "Playground", "Content", "Random"];
  const imageUrls = [
    "https://images.unsplash.com/photo-1592609930961-219235eded71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1564865878688-9a244444042a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1672307974995-cd253f7f7eeb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1672309046475-4cce2039f342?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  const tabs = tabTitles.map((title, index) => ({
    title: title,
    value: title.toLowerCase(),
    content: (
      <div
        key={index}
        className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-green-700 to-violet-900"
      >
        <p>{title} Tab</p>
        <DummyContent imageUrl={imageUrls[index]} />
      </div>
    ),
  }));

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
      <Tabs tabs={tabs} />
    </div>
  );
}

const DummyContent: React.FC<DummyContentProps> = ({ imageUrl }) => {
  return (
    <Image
      src={imageUrl}
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover cursor-pointer object-left-top h-[60%] md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};
