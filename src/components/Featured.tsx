"use client";
import React from "react";
import mdata from "../data/mdata.json";
import Link from "next/link";
import { BackgroundGradient } from "./ui/background-gradient";


interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
  image: string;
}
const Featured = () => {
  const featuredCourses = mdata.courses;
  return (
    <div className="py-12 bg-gray-900">
      <div>
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            Featured Courses
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Learn With the Best
          </p>
        </div>
      </div>
      <div className="mt-10">
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {featuredCourses.map((course: Course) => (
            <div key={course.id} className="flex justify-center">
              <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                  <div>
                    <img
                      src={course.image}
                      alt={course.title}
                      className="rounded-lg"
                    />
                  </div>
                  <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                    {course.title}
                  </p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">
                    {course.description}
                  </p>
                  <Link
                    className="group mt-1 inline-block rounded-full bg-gradient-to-r from-blue-500 via-black-500 to-pink-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
                    href="/learnmore"
                  >
                    <span className="block rounded-full bg-black px-8 py-3 text-sm font-medium hover:bg-transparent">
                      Learn More
                    </span>
                  </Link>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20 text-center">
        <Link
          className="group inline-block rounded-full bg-gradient-to-r from-blue-500 via-black-500 to-pink-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
          href="#"
        >
          <span className="block rounded-full bg-black px-8 py-3 text-sm font-medium group-hover:bg-transparent">
            View all courses
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Featured;
