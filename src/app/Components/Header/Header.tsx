"use client";
import { motion, Variants } from "framer-motion";
import "./landing_page.scss";

import Image from "next/image";
import { useState } from "react";
const easing = [0.6, -0.05, 0.01, 0.9];
const defaultDuration = 1; // Set a default duration for transitions

const defaultTransition = { duration: defaultDuration, ease: "easeInOut" };

const stagger = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
};

const fadeInUp: Variants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 2.5,
      ...defaultTransition,
    },
  },
};

const header: Variants = {
  initial: {
    y: -60,
    opacity: 0,
    transition: { ...defaultTransition, ease: easing },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.8,
      ...defaultTransition,
      ease: easing,
    },
  },
};

const h3: Variants = {
  initial: {
    top: "-20%",
    opacity: 0,
    transition: { ...defaultTransition, ease: easing },
  },
  animate: {
    top: "50%",
    opacity: 0.1,
    transition: {
      delay: 1.2,
      ...defaultTransition,
      ease: easing,
    },
  },
};

const dots: Variants = {
  initial: {
    x: -400,
  },
  animate: {
    x: 0,
    transition: {
      ...defaultTransition,
      duration: 0.2,
    },
  },
};

const letter: Variants = {
  initial: {
    opacity: 1,
    x: -550,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      ...defaultTransition,
      duration: 1,
    },
  },
};

const person_bg: Variants = {
  initial: {
    opacity: 1,
    x: 100,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: { delay: 1.2, ...defaultTransition, duration: 0.2 },
  },
};

const bottom: Variants = {
  initial: {
    opacity: 0,
    y: 160,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: { delay: 1.5, ...defaultTransition, duration: 0.2 },
  },
};

const Header = () => {
  const [activeDot, setActiveDot] = useState(2); // Set the default active dot

  const handleDotClick = (index: number) => {
    setActiveDot(index);
    // You can add logic here to update content and image based on the active dot
  };
  const dotData = [
    {
      name: "Kaumil Patel",
      role: "Frontend Developer",
      portfolio: "Frontend Portfolio",
      description:
        "I specialize in frontend development, creating user interfaces with a focus on user experience and performance.",
      image: "/images/Front_END.png",
    },
    {
      name: "Kaumil Patel",
      role: "Backend Developer",
      portfolio: "Backend Portfolio",
      description:
        "I am an expert in backend development, building robust and scalable server-side applications for various industries.",
      image: "/images/nodejs.png",
    },
    {
      name: "Kaumil Patel",
      role: "Cross-Platform Mobile Developer",
      portfolio: "Mobile Development Portfolio",
      description:
        "I specialize in cross-platform mobile development, creating seamless and efficient mobile applications for a wide range of platforms.",
      image: "/images/APP_IMG.png",
    },
    {
      name: "Kaumil Patel",
      role: "UI/UX Designer",
      portfolio: "UI/UX Portfolio",
      description:
        "I have a passion for designing beautiful and intuitive user interfaces, creating delightful user experiences for web and mobile applications.",
      image: "/images/FG1.png",
    },
    {
      name: "Kaumil Patel",
      role: "Web and Mobile Speed Optimization Expert",
      portfolio: "Speed Optimization Portfolio",
      description:
        "I specialize in improving the speed and performance of web and mobile applications, ensuring a smooth and efficient user experience.",
      image: "/images/person_bg.png",
    },
  ];

  return (
    <motion.div
      className={`container`}
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "100vh" }}
      transition={{ duration: 1, ease: easing }}
    >
      <motion.div className="wrapper" initial="initial" animate="animate">
        <motion.div className="pos_abs top_nav" variants={stagger}>
          <motion.span className="logo" variants={header}>
            KP
          </motion.span>
        </motion.div>
        <motion.div className="pos_abs bottom_nav" variants={stagger}>
          <motion.span variants={bottom}>
            <i className="fa fa-github"></i>
          </motion.span>
          <motion.span className="nav_arrow" variants={bottom}>
            <i className="fa fa-chevron-down"></i>
          </motion.span>

          <motion.span variants={bottom}>
            <i className="fa fa-linkedin"></i>
          </motion.span>
        </motion.div>
        <motion.div className="content_left" variants={stagger}>
          <motion.h3 className="back_content" variants={h3}>
            Blog
          </motion.h3>
          <motion.div className="dots" variants={stagger}>
            {[...Array(5)].map((_, index) => (
              <motion.span
                key={index}
                variants={dots}
                className={index === activeDot ? "active" : ""}
                onClick={() => handleDotClick(index)}
              ></motion.span>
            ))}
          </motion.div>
          <motion.h2 variants={stagger}>
            <motion.span variants={letter}>
              {dotData[activeDot].name}
            </motion.span>
            <motion.span variants={letter}>
              {dotData[activeDot].role}
            </motion.span>
            <motion.span variants={letter}>
              {dotData[activeDot].portfolio}
            </motion.span>
          </motion.h2>
          <motion.p variants={fadeInUp}>
            {dotData[activeDot].description}
          </motion.p>
        </motion.div>
        <motion.div className="image_container" variants={stagger}>
          <motion.div variants={person_bg}>
            <Image
              src={dotData[activeDot].image}
              alt={`${dotData[activeDot].name} Image`}
              width={512}
              height={512}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Header;
