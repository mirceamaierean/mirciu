"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const DotBackground: React.FC = () => {
  const numDots = 20;
  const initialDots = Array.from({ length: numDots }, (_, index) => ({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
  }));
  const [dots, setDots] = useState(initialDots);

  return (
    <div className="absolute w-full h-full overflow-hidden bg-inherit">
      {dots.map((dot, index) => (
        <motion.div
          key={index}
          className="absolute w-2 h-2 bg-blue-500 rounded-full"
          animate={{
            x: dot.x,
            y: dot.y,
            transition: {
              duration: Math.random() * 10 + 5,
              yoyo: Infinity,
              ease: "easeInOut",
            },
            transitionEnd: {
              // come back to where you started
              x: dot.x,
              y: dot.y,
            },
          }}
        />
      ))}
    </div>
  );
};

export default DotBackground;
