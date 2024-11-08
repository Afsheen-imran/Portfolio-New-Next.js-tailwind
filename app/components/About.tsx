
"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import myImage from "../public/images/my-image.jpeg";

const About = () => {
  return (
    <div 
      id="about" 
      className="bg-cover bg-center h-screen"
      style={{ 
        backgroundImage: "url('https://i0.wp.com/picjumbo.com/wp-content/uploads/dark-black-orange-3d-abstract-wallpaper-free-photo.jpg?w=1500&quality=50') " 
      }}
    >
      <section className="text-white body-font h-full">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center h-full">
          
          {/* Animated Image */}
          <motion.div
            className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0"
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            whileHover={{ scale: 1.05, rotate: 3 }}
          >
            <Image
              className="object-cover object-center rounded mx-auto w-[300px] h-[400px]"
              alt="hero"
              src={myImage}
              width={300}
              height={400}
            />
          </motion.div>

          {/* Animated Text */}
          <motion.div
            className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <motion.h1
              className="title-font sm:text-4xl mt-4 text-3xl mb-2 font-medium text-white"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              About Me
            </motion.h1>
            
            <motion.p
              className="mb-2 leading-relaxed text-white font-semibold text-justify"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.5, delay: 1.2 }}
            >
              I am a frontend web developer, social media marketer, Shopify store specialist, content writer, and graphic designer with over 2 years of experience. I specialize in creating responsive websites using HTML, CSS, JavaScript, TypeScript, React, and Next.js, and I help businesses grow through effective social media campaigns and optimized Shopify stores. My skills in content writing and design allow me to deliver creative, engaging solutions that connect with audiences and elevate brands. Let us work together to bring your vision to life!
            </motion.p>
            
            <motion.p
              className="mb-5 leading-relaxed text-white font-semibold text-justify"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.5, delay: 1.4 }}
            >
              With a comprehensive skill set and a commitment to delivering high-quality work, I am here to help businesses and individuals transform their ideas into reality. Let’s connect and bring your vision to life!
            </motion.p>

            {/* Animated Button */}
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 1.6 }}
            >
              <a
                href="https://www.linkedin.com/in/afsheen-imran-b623a42a2/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.button
                  className="inline-flex text-white bg-blue-500 border-0 py-2 px-5 focus:outline flex-none hover:bg-red-500 rounded text-sm"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  LinkedIn
                </motion.button>
              </a>
            </motion.div>

          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
