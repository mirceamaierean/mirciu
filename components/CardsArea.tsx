"use client";
import { motion } from "framer-motion";
import React, { useRef } from "react";
import cardImage from "@/public/images/card-image.jpeg";
import Image from "next/image";

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
      <motion.div
        className=" dark:bg-white bg-neutral-500 rounded-xl w-full h-screen opacity-5"
        ref={constraintsRef}
      />
      <motion.div
        className=" w-max absolute top-5 left-5"
        drag
        dragConstraints={constraintsRef}
      >
        {props.children}
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
      <motion.div
        className="bg-gradient-to-l from-indigo-500 via-purple-500 to-pink-500 rounded-xl absolute h-96 w-60 top-7 left-7"
        drag
        // animate={{ x: 850, y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        dragConstraints={constraintsRef}
      />
    </div>
  );
};
