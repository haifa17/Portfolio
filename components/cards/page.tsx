"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface CardProps {
  title: string;
  description: string;
}
const Card = ({ title, description }: CardProps) => {
  const [ref1, inView1] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const [ref2, inView2] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const [ref3, inView3] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="flex flex-col  bg-gradient-to-r from-[#9A33FF] to-[#FF8660] p-1 w-[400px] h-[280px] rounded-md ">
      <div className="bg-black  w-[392px] h-[270px] p-5">
        <motion.p
          ref={ref2}
          initial="hidden"
          animate={inView2 ? "visible" : "hidden"}
          variants={variants}
          transition={{ ease: "easeInOut", duration: 0.5 }}
          className="font-bold text-2xl mb-5  "
        >
          {title}
        </motion.p>
        <div className="flex flex-col gap-2 justify-start items-start text-start  ">
          <motion.p
            ref={ref3}
            initial="hidden"
            animate={inView3 ? "visible" : "hidden"}
            variants={variants}
            transition={{ ease: "easeInOut", duration: 0.5 }}
            className=" text-[#E1E1E1]  text-sm"
          >
            {" "}
            {description}
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Card;
