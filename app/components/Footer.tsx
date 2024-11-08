import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="bg-blue-900">
      <footer className="text-white body-font">
        <div className="container px-5 py-5 mx-auto mt-6 flex items-center sm:flex-row flex-col">
          {/* Logo Section */}
          <a className="flex title-font font-extrabold items-center md:justify-start justify-center text-white">
            <Image
              src="/images/portfolio-image.jpeg" 
              alt="My Logo"
              width={50} 
              height={50} 
              className="w-30 h-30" 
            />
            <span className="ml-3 text-xl">Afsheen</span>
          </a>

          {/* Footer Text Section */}
          <p className="text-sm text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-white sm:py-2 sm:mt-0 mt-2">
            © 2024 My Portfolio. All rights reserved
          </p>

          {/* Social Media Icon */}
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/afsheen-imran-b623a42a2/"
              className="text-white font-extrabold"
            >
              <AiFillLinkedin className="text-xl hover:text-red-500" />
            </Link>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
