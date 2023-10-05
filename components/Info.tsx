"use client";
import React from "react";
import Typewriter from "typewriter-effect";

export const Info = () => {
  return (
    <div className="text-2xl md:text-4xl font-semibold flex flex-row">
      <h2> I am a </h2>
      &nbsp;
      <Typewriter
        options={{
          strings: [
            "Software Developer",
            "Tech Enthusiast",
            "CS Student",
            "Formula 1 Fanatic",
            "Speedcuber",
            "Music Lover",
          ],
          autoStart: true,
          delay: 50,
          loop: true,
        }}
      />
    </div>
  );
};
