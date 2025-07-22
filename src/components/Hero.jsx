import React, { useEffect, useState } from "react";
import { HERO_CONTENT } from "../constants";
import { motion } from "framer-motion";
import resume from "../assets/Ravishankar.pdf";
import Particle from "./Particle";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="relative pt-20" id="home">
      <div className="flex w-full">
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start">
          <motion.h1
            variants={container(0)}
            initial="hidden"
            whileInView="visible"
            className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
          >
            M A Ravishankar
          </motion.h1>
          <motion.span
            variants={container(0.5)}
            initial="hidden"
            whileInView="visible"
            className="bg-gradient-to-r from-blue-400 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"
          >
            Full Stack Developer
          </motion.span>
          <motion.p
            variants={container(1)}
            initial="hidden"
            whileInView="visible"
            className={`my-2 max-w-xl py-6 font-light tracking-tighter text-xl ${
              isMobile ? "text-center" : ""
            }`}
          >
            {HERO_CONTENT.description}
          </motion.p>
          <div>
            <motion.a
              className="bg-stone-50 text-stone-900 p-3 lg:p-4 mt-8 mr-8 inline-block rounded-2xl font-semibold"
              href={resume}
              download
              rel="noopener noreferrer"
              target="_blank"
              variants={container(1.5)}
              initial="hidden"
              whileInView="visible"
            >
              {HERO_CONTENT.resumeLinkText}
            </motion.a>
            <motion.a
              className="bg-stone-50 text-stone-900 p-3 lg:p-4 mt-8 inline-block rounded-2xl font-semibold"
              href="https://cv.rav3.me/"
              rel="noopener noreferrer"
              target="_blank"
              variants={container(1.5)}
              initial="hidden"
              whileInView="visible"
            >
              {HERO_CONTENT.cvText}
            </motion.a>
          </div>
        </div>
        {!isMobile && <Particle />}
      </div>
    </section>
  );
};

export default Hero;
