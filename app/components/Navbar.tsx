import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoLogoYoutube } from "react-icons/io";
import Logo from "../public/images/portfolio-image.jpeg";

const Navbar = () => {
  return (
    <div className="bg-blue-800 z-50 sticky top-0">
      <header className="text-white body-font">
        <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
            <Image
              src={Logo} 
              alt="Afsheen"
              width={100}
              height={100}
              className="w-[50px]"
            />
            <span className="ml-3 text-xl font-extrabold">My Portfolio</span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link href={"#home"} className="mr-5 hover:text-red-500 font-bold">
              Home
            </Link>
            <Link href={"#about"} className="mr-5 hover:text-red-500 font-bold">
              About
            </Link>
            <Link href={"#skills"} className="mr-5 hover:text-red-500 font-bold">
              Skills
            </Link>
            <Link href={"#project"} className="mr-5 hover:text-red-500 font-bold">
              Projects
            </Link>
            <Link href={"#Contact"} className="mr-5 hover:text-red-500 font-bold">
              Contact
            </Link>
          </nav>
          <button className="inline-flex items-center bg-red-500 border-0 py-1 px-3 focus:outline-none hover:bg-red-800 rounded text-base mt-4 md:mt-0 font-bold ">
            <Link href={"https://www.youtube.com/@CodewithAfsheen"}>
              
              <IoLogoYoutube className="text-xl ml-1" />
            </Link>
          </button>
        </div>
      </header>
    </div>
  );
};

export default Navbar;