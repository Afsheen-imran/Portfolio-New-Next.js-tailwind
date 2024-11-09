// components/About.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import myImage from "../public/images/my-image.jpeg";

const About = () => {
  return (
    <div
      id="about"
      className="bg-cover bg-center min-h-screen h-full"
      style={{
        backgroundImage: "url('https://i0.wp.com/picjumbo.com/wp-content/uploads/dark-black-orange-3d-abstract-wallpaper-free-photo.jpg?w=1500&quality=50')",
      }}
    >
      <section className="text-white body-font h-full py-16 md:py-24 px-4 md:px-8">
        <div className="container mx-auto flex flex-col md:flex-row items-center md:space-x-8 space-y-6 md:space-y-0">
          <motion.div
            className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mx-auto"
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            whileHover={{ scale: 1.05, rotate: 3 }}
          >
            <Image
              className="object-cover object-center rounded w-[250px] h-[350px] mx-auto md:w-[300px] md:h-[400px]"
              alt="Profile Image"
              src={myImage}
            />
          </motion.div>
          <motion.div
            className="lg:flex-grow md:w-1/2 flex flex-col text-center md:text-left"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <motion.h1
              className="text-3xl sm:text-4xl font-medium mb-4"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              About Me
            </motion.h1>
            <motion.p
              className="mb-4 text-white font-semibold text-justify"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.5, delay: 1.2 }}
            >
              I am a frontend web developer, social media marketer, Shopify store specialist, content writer, and graphic designer with over 2 years of experience. I specialize in crafting visually appealing websites, building responsive layouts, and ensuring seamless user experiences across all devices. With expertise in various frontend frameworks and design tools, I deliver high-quality, dynamic, and interactive web pages. I’m also well-versed in e-commerce platforms like Shopify, where I help clients create and manage their online stores effectively.
            </motion.p>
            <motion.div
              className="flex justify-center md:justify-start"
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
                  className="text-white bg-blue-500 border-0 py-2 px-5 focus:outline hover:bg-red-500 rounded text-sm"
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
