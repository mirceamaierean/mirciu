"use client";
import { motion } from "framer-motion";
import React, { useRef } from "react";

import cardImage from "@/public/images/card-image.jpeg";
import mirciuMic from "@/public/images/mirciumic.jpeg";
import esentza from "@/public/images/esentza.webp";
import head from "@/public/images/head.png";

import Image from "next/image";
import Link from "next/link";

interface CardsAreaProps {
  children?: React.ReactNode;
}

export const CardsArea = (props: CardsAreaProps) => {
  const getNumberOfYearsThatPassed = () => {
    const today = new Date();
    const birthday = new Date("10-17-2003");
    const difference = today.getTime() - birthday.getTime();
    const days = Math.floor(difference / (1000 * 3600 * 24));
    const years = Math.floor(days / 365);
    return years;
  };

  const isMobile = () => {
    return window.innerWidth <= 640;
  }

  const constraintsRef = useRef(null);
  return (
    <div className="relative flex flex-col-reverse justify-center align-center">
      {/* This is the boards on which the cards are dragged */}
      <motion.div
        className="hidden sm:block mx-auto dark:bg-white bg-neutral-500 rounded-xl w-72 sm:w-full sm:h-[55rem] opacity-5 border-4 border-black dark:border-white scale-125 sm:scale-100 my-20 sm:my-0"
        ref={constraintsRef}
      />
      {/* Spotify Card */}
      <motion.div
        className="w-max mx-auto sm:absolute sm:top-5 sm:right-5 scale-125 sm:scale-100 my-20 sm:my-0"
        {...(isMobile() ? {} : { drag: true })}
        dragConstraints={constraintsRef}
      >
        {props.children}
      </motion.div>
      {/* Mirciu card */}
      {/* TO DO: Refactor this card */}
      <motion.div
        className="bg-gradient-to-bl mx-auto from-[#3546DD] to-[#0B125A] rounded-xl sm:absolute h-[30rem] w-72 sm:top-6 sm:right-6 scale-125 sm:scale-100 my-20 sm:my-0"
        {...(isMobile() ? {} : { drag: true })}
        // animate={{ x: 850, y: 0, opacity: 1 }}
        // transition={{ duration: 1, delay: 0.5 }}
        dragConstraints={constraintsRef}
      >
        <Image
          src={head}
          alt="card-image"
          className="py-4 px-6"
          draggable="false"
          width={300}
          height={300}
        />
        <p className="text-md px-4 text-white">
          Currently, I work at
          <Link href="https://dutyventures.com/" className="underline">
            {" "}
            <strong>Duty Ventures</strong>
          </Link>
          {" "} as a web developer. Ruby on Rails is the main stack we use for app development, but I{"'"}ve also created applications with Next.js, Express, React, and many more. Working remotely gave me the chance to interact with people from all over the world and engage with them, showing me different ways of thinking and working.
        </p>
      </motion.div>
      <motion.div
        className="bg-[#9c1c1c] rounded-xl sm:absolute h-[30rem] w-72 mx-auto sm:top-7 sm:right-7 scale-125 sm:scale-100 my-20 sm:my-0"
        {...(isMobile() ? {} : { drag: true })}
        transition={{ duration: 1, delay: 0.5 }}
        dragConstraints={constraintsRef}
      >
        <Image
          src={esentza}
          alt="card-image"
          className="pt-3 px-6 rounded-full"
          draggable="false"
          width={300}
          height={300}
        />
        <p className="text-md px-4 text-white">
          In high school, I was part of <strong>Esentza Robotics</strong>,
          competing in
          <Link href="https://www.firstinspires.org/robotics/ftc" className="underline">
            {" "}
            FIRST Tech Challenge
          </Link>
          {" "}to promote STEM education. This experience honed my technical skills{" ("}
          <Link href={process.env.NEXT_PUBLIC_RESUME_URL ?? ""} className="underline">
            view my resume
          </Link>{")"} and fostered invaluable soft skills like
          communication, leadership, and teamwork through collaboration with my
          teammates.
        </p>
      </motion.div>
      <motion.div
        className="bg-gradient-to-bl from-[#E5DFDF] to-[#70959E] rounded-xl sm:absolute h-[30rem] w-72 mx-auto sm:top-8 sm:right-8 scale-125 sm:scale-100 my-20 sm:my-0"
        {...(isMobile() ? {} : { drag: true })}
        transition={{ duration: 1, delay: 0.5 }}
        dragConstraints={constraintsRef}
      >
        <Image
          src={mirciuMic}
          alt="card-image"
          className="pt-3 px-6 rounded-full"
          draggable="false"
          width={300}
          height={300}
        />
        <p className="text-md px-4 text-white">
          From a small age, I loved solving puzzles. I was trying to find
          patterns everywhere. As a kid, my favorite puzzle was the{" "}
          <strong>Rubik{"'"}s Cube</strong>. All the alogrithms I{"'"}ve learned
          shaped the way I think, which was key for the first chapter of my
          programming career: <strong>✨Competitive Programming✨</strong>
        </p>
      </motion.div>
      <motion.div
        className="sm:scale-100 bg-gradient-to-br from-indigo-500 to-emerald-500 rounded-xl sm:absolute h-[30rem] w-72 sm:top-9 sm:right-9 mx-auto scale-125 my-20 sm:my-0"
        {...(isMobile() ? {} : { drag: true })}
        dragConstraints={constraintsRef}
      >
        <Image
          src={cardImage}
          alt="card-image"
          className="pt-3 px-6 rounded-full"
          draggable="false"
        />
        <p className="text-md px-4 text-white">
          Greetings! My name is <strong>Măierean Mircea</strong>, but my closest
          friends call me <strong>Mirciu</strong>. I am a
          {` ${getNumberOfYearsThatPassed()}-year-old `} student from{" "}
          <strong>Beclean, Romania</strong> - probably one of the smallest towns
          on earth - pursuing a{" "}
          <strong>Bachelor{"'"}s Degree in Computer Science</strong> at{" "}
          <strong>Babeș-Bolyai University from Cluj Napoca</strong>.
        </p>
      </motion.div>
    </div>
  );
};
