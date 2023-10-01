"use client";
import { motion } from "framer-motion";
import React, { useRef } from "react";
import cardImage from "@/public/images/card-image.jpeg";
import mirciuMic from "@/public/images/mirciumic.jpeg";
import esentza from "@/public/images/esentza.webp";
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

  const constraintsRef = useRef(null);
  return (
    <div className="relative mx-auto">
      {/* This is the boards on which the cards are dragged */}
      <motion.div
        className=" dark:bg-white bg-neutral-500 rounded-xl w-full h-[95vh] opacity-5 border-4 border-black dark:border-white"
        ref={constraintsRef}
      />
      {/* Spotify Card */}
      <motion.div
        className=" w-max absolute top-5 left-5"
        drag
        dragConstraints={constraintsRef}
      >
        {props.children}
      </motion.div>
      {/* Mirciu card */}
      {/* TO DO: Refactor this card */}
      <motion.div
        className="bg-[#9c1c1c] rounded-xl absolute h-[30rem] w-72 top-7 left-7"
        drag
        // animate={{ x: 850, y: 0, opacity: 1 }}
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
        className="bg-gradient-to-bl from-[#E5DFDF] to-[#70959E] rounded-xl absolute h-[30rem] w-72 top-7 left-7"
        drag
        // animate={{ x: 850, y: 0, opacity: 1 }}
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
          From a small age, I{"'"}ve loved puzzles. I was trying to find
          patterns everywhere. As a kid, my favorite puzzle was the{" "}
          <strong>Rubik{"'"}s Cube</strong>. All the alogrithms I{"'"}ve learned
          shaped the way I think, which was key for the first chapter of my
          programming career: <strong>✨Competitive Programming✨</strong>
        </p>
      </motion.div>
      <motion.div
        className="bg-gradient-to-br from-indigo-500 to-emerald-500 rounded-xl h-[30rem] w-72 absolute top-6 left-6"
        drag
        // animate={{ x: 450, y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
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
          <strong>Beclean, Romania</strong>, probably one of the smallest towns
          on earth, pursuing a{" "}
          <strong>Bachelor{"'"}s Degree in Computer Science</strong> at{" "}
          <strong>Babeș-Bolyai University from Cluj Napoca</strong>.
        </p>
      </motion.div>
    </div>
  );
};
