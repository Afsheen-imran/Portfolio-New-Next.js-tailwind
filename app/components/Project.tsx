import Image from "next/image";
import Link from "next/link";
import React from "react";


import proj1 from "../public/images/proj_1.jpg calculator.jpg";
import proj2 from "../public/images/proj_2 number.jpg";
import proj3 from "../public/images/proj_3.jpg";
import proj4 from "../public/images/proj_4.jpg";
import proj5 from "../public/images/hackthon image.webp";
import proj6 from "../public/images/pizza-parlour.jpg";

const Project = () => {
  return (
    <div
      id="project"
      className="bg-cover bg-center max-h-fit"
      style={{
        backgroundImage:
          "url('https://i0.wp.com/picjumbo.com/wp-content/uploads/dark-black-orange-3d-abstract-wallpaper-free-photo.jpg?w=1500&quality=50')",
      }}
    >
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col w-full mb-20 text-center">
          <h1 className="mb-4 text-2xl font-extrabold sm:text-3xl title-font text-white">
            My Projects
          </h1>
        </div>
        <div className="flex flex-wrap -m-5">
          {/* Project 1 */}
          <div className="p-4 cursor-pointer lg:w-1/3 sm:w-1/2">
            <div className="relative flex">
              <Image
                alt="CLI Calculator"
                className="absolute inset-0 object-cover object-center w-full h-full"
                src={proj1} 
              />
              <div className="relative z-10 w-full px-8 py-10 bg-white border-4 border-blue-500 opacity-0 hover:opacity-100">
                <h2 className="mb-1 text-sm font-bold tracking-widest text-blue-500 title-font">
                  CLI Calculator
                </h2>
                <p className="leading-relaxed align-middle line-clamp-2">
                  Transform Your Command Line Interface with Our CLI Calculator.
                  Introducing our CLI Calculator: a sleek and efficient tool
                  crafted with TypeScript and Node.js, featuring an intuitive
                  interface powered by Inquirer. Ideal for developers,
                  mathematicians, students, and anyone in need of quick math
                  solutions.
                </p>
                <Link
                  target="_blank"
                  href={"https://github.com/Afsheen-imran/Simple-Calculator.git"}
                >
                  <p className="leading-relaxed text-blue-500 hover:underline">
                    View Project..
                  </p>
                </Link>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="p-4 cursor-pointer lg:w-1/3 sm:w-1/2">
            <div className="relative flex">
              <Image
                alt="CLI Number Guessing Game"
                className="absolute inset-0 object-cover object-center w-full h-full"
                src={proj2} // Use the imported image
              />
              <div className="relative z-10 w-full px-8 py-10 bg-white border-4 border-gray-200 opacity-0 hover:opacity-100">
                <h1 className="mb-3 text-lg font-medium text-gray-900 title-font">
                  CLI Number Guessing Game
                </h1>
                <p className="leading-relaxed line-clamp-2">
                  Number Guessing Fun: Play in Your Terminal! Welcome to our CLI
                  Number Guessing Game! Test your skills as you try to guess the
                  secret number. Follow the prompts in your terminal and see if
                  you can figure it out. Let the guessing begin!
                </p>
                <Link
                  target="_blank"
                  href={"https://github.com/Afsheen-imran/Number-Guessing-Game.git"}
                >
                  <p className="leading-relaxed text-blue-500 hover:underline">
                    View Project..
                  </p>
                </Link>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="p-4 cursor-pointer lg:w-1/3 sm:w-1/2">
            <div className="relative flex">
              <Image
                alt="CLI ATM Machine"
                className="absolute inset-0 object-cover object-center w-full h-full"
                src={proj3} // Use the imported image
              />
              <div className="relative z-10 w-full px-8 py-10 bg-white border-4 border-gray-200 opacity-0 hover:opacity-100">
                <h2 className="mb-1 text-sm font-medium tracking-widest text-blue-500 title-font">
                  CLI ATM Machine
                </h2>
                <p className="leading-relaxed line-clamp-2">
                  CLI ATM Machine: Convenient Banking in Your Terminal. Step
                  into the future of banking with our CLI ATM Machine! Designed
                  with TypeScript, Node.js, and Inquirer, this application offers
                  a streamlined banking experience directly from your terminal.
                  Whether you need to check your balance, withdraw, or use Fast
                  Cash option, our CLI ATM Machine has you covered.
                </p>
                <Link
                  target="_blank"
                  href={"https://github.com/Afsheen-imran/ATM-Machine.git"}
                >
                  <p className="leading-relaxed text-blue-500 hover:underline">
                    View Project..
                  </p>
                </Link>
              </div>
            </div>
          </div>

          {/* Project 4 */}
          <div className="p-4 cursor-pointer lg:w-1/3 sm:w-1/2">
            <div className="relative flex">
              <Image
                alt="CLI To Do List"
                className="absolute inset-0 object-cover object-center w-full h-full"
                src={proj4} // Use the imported image
              />
              <div className="relative z-10 w-full px-8 py-10 bg-white border-4 border-gray-200 opacity-0 hover:opacity-100">
                <h2 className="mb-1 text-sm font-medium tracking-widest text-blue-500 title-font">
                  CLI To Do List
                </h2>
                <p className="leading-relaxed line-clamp-2">
                  Managing Tasks: Building a CLI To-Do List. Our CLI To-Do List
                  is a powerful task management tool designed for your command
                  line interface. With this application, you can easily create,
                  organize, and track your tasks without ever leaving your
                  terminal. Stay productive and focused by managing your to-do
                  list directly within your command line environment.
                </p>
                <Link
                  target="_blank"
                  href={"https://github.com/Afsheen-imran/To-do-list-app.git"}
                >
                  <p className="leading-relaxed text-blue-500 hover:underline">
                    View Project..
                  </p>
                </Link>
              </div>
            </div>
          </div>

          {/* Project 5 */}
          <div className="p-4 cursor-pointer lg:w-1/3 sm:w-1/2">
            <div className="relative flex">
              <Image
                alt="Dynamic Resume Builder"
                className="absolute inset-0 object-cover object-center w-full h-full"
                src={proj5} // Use the imported image
              />
              <div className="relative z-10 w-full px-8 py-10 bg-white border-4 border-gray-200 opacity-0 hover:opacity-100">
                <h2 className="mb-1 text-sm font-medium tracking-widest text-blue-500 title-font">
                  Dynamic Resume Builder
                </h2>
                <p className="leading-relaxed line-clamp-2">
                  I built a Dynamic Resume Builder using HTML, CSS, and
                  TypeScript, enabling users to generate and edit resumes in
                  real-time with live previews. The app features toggleable
                  sections, inline editing, and a fully responsive design,
                  optimized for both mobile and desktop devices.
                </p>
                <Link
                  target="_blank"
                  href={"https://m-ilestone-3-dynamic-resume-builder.vercel.app/"}
                >
                  <p className="leading-relaxed text-blue-500 hover:underline">
                    View Project..
                  </p>
                </Link>
              </div>
            </div>
          </div>

          {/* Project 6 */}
          <div className="p-4 cursor-pointer lg:w-1/3 sm:w-1/2">
            <div className="relative flex">
              <Image
                alt="Pizza Delight Website"
                className="absolute inset-0 object-cover object-center w-full h-full"
                src={proj6} // Use the imported image
              />
              <div className="relative z-10 w-full px-8 py-10 bg-white border-4 border-gray-200 opacity-0 hover:opacity-100">
                <h2 className="mb-1 text-sm font-medium tracking-widest text-blue-500 title-font">
                  Pizza Delight Website
                </h2>
                <p className="leading-relaxed line-clamp-2">
                  Check out my dynamic pizza website project, built using
                  Next.js, Tailwind CSS, and TypeScript. It showcases the
                  flavors of pizza, an attractive UI/UX design, and smooth
                  transitions for a delightful user experience.
                </p>
                <Link
                  target="_blank"
                  href={"https://pizza-parlour-website.vercel.app/"}
                >
                  <p className="leading-relaxed text-blue-500 hover:underline">
                    View Project..
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
