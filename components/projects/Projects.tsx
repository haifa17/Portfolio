"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Card from "../cards/page";

const Projects = () => {
  const [ref1, inView1] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const cards1 = [
    {
      image: "/projects/bello.webp",
      title: "Bello Poultry Market",
      description:
        "Developed e-commerce web application using Next.js framework, including a dashboard for managing products, categories, users, and other aspects of the e- commerce platform,providing comprehensive control over the platform's functionalities and store interface for both admin and customer use",
    },
    {
      image: "/projects/future.png",
      title: "Future Poultry Market",
      description:
        "Developed e-commerce web application using Next.js framework, including a dashboard for managing products, categories, users, and other aspects of the e- commerce platform,providing comprehensive control over the platform's functionalities and store interface for both admin and customer use",
    },
    {
      image: "/projects/muslim.jpg",
      title: "Muslim Guide",
      description:
        "Developed a seamless and responsive landing page using React.js ,mplemented an advanced translation feature using i18n internationalization, allowing users to easily switch between multiple languages. This enhancement significantly improved the app's accessibility and usability for a diverse, global audience.  ",
    },
    {
      image: "/projects/logo.webp",
      title: "XpresFood",
      description:
        "Created an admin dashboard using Next.js framework ,for managing products, categories, users, and other aspects of the e-commerce platform, providing comprehensive control over the platform's functionalities.  Designed a customer dashboard to enhance the shopping experience, enabling users to manage their accounts, track orders, and interact with the platform's features seamlessly. Implemented advanced filtering functionalities allowing users to filter products by name, category, subcategory, and price,",
    },
  ];

  return (
    <div id="projects" className="flex flex-col px-10 lg:px-20 text-white gap-10 lg:gap-20 py-8  items-center justify-center text-center">
      <motion.p
        ref={ref1}
        initial="hidden"
        animate={inView1 ? "visible" : "hidden"}
        variants={variants}
        transition={{ ease: "easeInOut", duration: 0.5 }}
        className="font-extrabold text-4xl bg-gradient-to-r from-[#9A33FF] to-[#FF8660] inline-block text-transparent bg-clip-text uppercase shadow-md"
      >
        Projects
      </motion.p>
      <div className="flex flex-col gap-5 ">
        {cards1.map((card, index) => (
          <div key={index}>
            <Card
              title={card.title}
              description={card.description}
              image={card.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
