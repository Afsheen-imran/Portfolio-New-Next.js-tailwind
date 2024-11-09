import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoLogoYoutube } from "react-icons/io";
import Logo from "../public/images/portfolio-image.jpeg";
import { FiAlignJustify } from "react-icons/fi";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  return (
    <div className="bg-blue-800 z-50 sticky top-0">
      <header className="text-white body-font">
        <div className="container mx-auto flex flex-wrap p-4 md:p-2 flex-row items-center justify-between">
          <div className="flex items-center">
            <Image
              src={Logo} 
              alt="Afsheen"
              width={50}
              height={50}
              className="w-[50px] h-[50px] rounded-full"
            />
            <span className="ml-3 text-xl font-extrabold">My Portfolio</span>
          </div>
          
          {/* Desktop Menu */}
          <nav className="hidden md:flex md:ml-auto md:mr-auto flex-wrap items-center text-base justify-center">
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
            <Link href={"#contact"} className="mr-5 hover:text-red-500 font-bold">
              Contact
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            {/* YouTube Button */}
            <button className="hidden md:inline-flex items-center bg-red-500 border-0 py-1 px-3 focus:outline-none hover:bg-red-800 rounded text-base font-bold">
              <Link href={"https://www.youtube.com/@CodewithAfsheen"} target="_blank" rel="noopener noreferrer">
                <IoLogoYoutube className="text-xl" />
              </Link>
            </button>

            {/* Mobile Menu Trigger */}
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <button className="p-2 focus:outline-none">
                    <FiAlignJustify className="text-2xl text-white" />
                  </button>
                </SheetTrigger>
                <SheetContent side="right" className="bg-blue-800 text-white">
                  <SheetHeader>
                    <SheetTitle className="text-xl font-bold">Menu</SheetTitle>
                    <SheetDescription className="flex flex-col mt-4">
                      <Link href={"#home"} className="mb-3 hover:text-red-500 font-bold">
                        Home
                      </Link>
                      <Link href={"#about"} className="mb-3 hover:text-red-500 font-bold">
                        About
                      </Link>
                      <Link href={"#skills"} className="mb-3 hover:text-red-500 font-bold">
                        Skills
                      </Link>
                      <Link href={"#project"} className="mb-3 hover:text-red-500 font-bold">
                        Projects
                      </Link>
                      <Link href={"#contact"} className="mb-3 hover:text-red-500 font-bold">
                        Contact
                      </Link>
                      <Link href={"https://www.youtube.com/@CodewithAfsheen"} target="_blank" rel="noopener noreferrer" className="mt-4 flex items-center justify-center bg-red-500 px-4 py-2 rounded font-bold hover:bg-red-800">
                        <IoLogoYoutube className="text-xl mr-2" /> YouTube
                      </Link>
                    </SheetDescription>
                  </SheetHeader>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
