"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface CardProps {
  image: string;
  title: string;
  description: string;
}
const Card = ({ image, title, description }: CardProps) => {
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
    <div className="flex flex-col lg:flex gap-5 items-center">
      <div className=" max-w-20">
        <motion.div
          ref={ref1}
          initial="hidden"
          animate={inView1 ? "visible" : "hidden"}
          variants={variants}
          transition={{ ease: "easeInOut", duration: 0.5 }}
          className=" flex items-center lg:justify-center rounded-full cursor-pointer"
        >
          <Image
            src={image}
            width={200}
            height={20}
            alt=""
            layout="fixed"
            className="hover:scale-125 hover:transition  "
          />
        </motion.div>
      </div>

      <div className="flex flex-col gap-2 justify-start items-start text-start  ">
        <motion.p
          ref={ref2}
          initial="hidden"
          animate={inView2 ? "visible" : "hidden"}
          variants={variants}
          transition={{ ease: "easeInOut", duration: 0.5 }}
          className="font-bold text-2xl   "
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
