"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

interface CircleProps {
  rotationAngle?: number;
  translateX?: number;
  translateY?: number;
  textContent?: string;
}

export const Circle = (props: CircleProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="flex flex-row"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        className={`w-16 text-black dark:text-white`}
      >
        <motion.path
          d="M 50, 10 a 40,40 0 0,1 0,80 a 40,40 0 0,1 0,-80"
          className="stroke-current z-50 text-neutral-500"
          strokeWidth="4"
          fill="transparent"
          initial={{ pathLength: 1, opacity: 1 }}
        />
        <motion.path
          d="M 50, 10 a 40,40 0 0,1 0,80 a 40,40 0 0,1 0,-80"
          className="stroke-current z-50"
          strokeWidth="4"
          fill="transparent"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={
            isHovered
              ? { pathLength: 1, opacity: 1 }
              : { pathLength: 0, opacity: 0 }
          }
          transition={{
            default: { duration: 0.5 },
          }}
        />
        <motion.path
          d="M 49.5 40.5 V 58.1094 L 43.9011 52.4095 L 42.6481 53.6619 L 50.4862 61.5 L 58.352 53.6342 L 57.0996 52.3817 L 51.3725 58.1094 V 40.5 H 49.601 Z"
          className="fill-current z-50 text-black dark:text-white"
          initial={{ opacity: 1, scale: 1.5, rotate: props.rotationAngle }}
          animate={
            isHovered
              ? { translateX: props.translateX, translateY: props.translateY }
              : { translateX: 0, translateY: 0 }
          }
          transition={{
            default: { duration: 0.2 },
          }}
        />
      </motion.svg>
      {props.textContent && (
        <h1 className="text-2xl my-auto pl-2">{props.textContent}</h1>
      )}
    </div>
  );
};
