"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import myImage from "../public/images/my-image3.jpeg";

const Hero: React.FC = () => {
  return (
    <div
      className="relative overflow-hidden h-screen bg-gradient-to-r from-indigo-200 via-purple-300 to-pink-300"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1663517768994-a65e6ab3a40a?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      <section className="relative z-10 text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <motion.h1
              className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              I am
              <br className="hidden lg:inline-block" />
              <Typewriter
                options={{
                  strings: [
                    "Web Developer",
                    "Content Writer",
                    "Social Media Marketer",
                    "WordPress Developer",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </motion.h1>
            <div className="w-[100px] h-[2px] bg-white mb-4"></div>
            <motion.p
              className="mb-9 leading-relaxed text-white font-semibold text-justify"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Frontend Web Developer, Passionate Content Creator, Graphic
              Designer, and Social Media Marketer. Certified content writer
              with nearly two years of experience. Dedicated to enhancing
              brand visibility and engagement. Skilled graphic designer crafting
              captivating visuals. Strategizing impactful social media
              campaigns. Proficient WordPress web developer ensuring seamless
              user experiences. Professionally custom-designed pins for
              Pinterest.
            </motion.p>
            <div className="flex justify-center">
              <Link href="#about">
                <motion.button
                  className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-500 rounded text-lg"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                </motion.button>
              </Link>
            </div>
          </div>

          {/* Hero Section Image */}
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mt-8 md:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1.5, delay: 1 }}
              whileHover={{ scale: 1.05, rotate: 5 }}
              className="object-cover object-center rounded mx-auto w-full h-[300px] md:h-[400px] lg:h-[500px]"
            >
              <Image
                className="object-cover object-center rounded mx-auto w-full h-full"
                alt="My Image"
                width={1500}
                height={1500}
                src={myImage}
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
