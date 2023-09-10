"use client";
import { motion } from "framer-motion";
import React, { Children, useRef } from "react";
import { Spotify } from "./Spotify";

interface CardsAreaProps {
  children?: React.ReactNode;
}

export const CardsArea = (props: CardsAreaProps) => {
  const constraintsRef = useRef(null);
  return (
    <div className="relative mx-auto">
      <motion.div
        className=" dark:bg-white bg-neutral-500 rounded-3xl w-full h-screen opacity-5"
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
        className="bg-gradient-to-br from-indigo-500 to-emerald-500 rounded-3xl h-96 w-60 absolute top-6 left-6"
        drag
        animate={{ x: 450, y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        dragConstraints={constraintsRef}
      />
      <motion.div
        className="bg-gradient-to-l from-indigo-500 via-purple-500 to-pink-500 rounded-3xl absolute h-96 w-60 top-7 left-7"
        drag
        animate={{ x: 850, y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        dragConstraints={constraintsRef}
      />
    </div>
  );
};
