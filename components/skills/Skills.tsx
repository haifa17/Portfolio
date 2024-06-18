"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
const Skills = () => {
  const [ref1, inView1] = useInView({
    triggerOnce: true, 
    threshold: 0.5, 
  });
  const [ref2, inView2] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div id="skills" className="flex flex-col text-white gap-10 lg:gap-20 py-8  items-center justify-center text-center">
      <motion.p
        ref={ref1}
        initial="hidden"
        animate={inView1 ? "visible" : "hidden"}
        variants={variants}
        transition={{ ease: "easeInOut", duration: 0.5 }}
        className="font-bold text-4xl"
      >
        SKILLS
      </motion.p>
      <motion.div
        ref={ref2}
        initial="hidden"
        animate={inView2 ? "visible" : "hidden"}
        variants={variants}
        transition={{ ease: "easeInOut", duration: 0.5 }}
        className="flex flex-wrap lg:flex-row justify-center items-center gap-16 "
      >
        <Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
          width={80}
          height={20}
          alt=""
          className=" cursor-pointer hover:scale-125 transition-all ease-in-out"
        />
        <Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
          width={80}
          height={20}
          alt=""
          className=" cursor-pointer hover:scale-125 transition-all ease-in-out"
        />
        <Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
          width={80}
          height={20}
          alt=""
          className=" cursor-pointer hover:scale-125 transition-all ease-in-out"
        />
        <Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
          width={80}
          height={20}
          alt=""
          className=" cursor-pointer hover:scale-125 transition-all ease-in-out"
        />
        <Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
          width={80}
          height={20}
          alt=""
          className=" cursor-pointer hover:scale-125 transition-all ease-in-out"
        />

        <Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
          width={80}
          height={20}
          alt=""
          className=" cursor-pointer hover:scale-125 transition-all ease-in-out "
        />
        <Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
          width={80}
          height={20}
          alt=""
          className=" cursor-pointer hover:scale-125 transition-all ease-in-out"
        />
      </motion.div>
    </div>
  );
};

export default Skills;
