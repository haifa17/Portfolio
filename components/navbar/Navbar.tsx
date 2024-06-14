"use client";
import { Menu } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div className="bg-[#222222] flex justify-end lg:justify-center  py-8  ">
      <div className="hidden text-white lg:flex items-center gap-10 mx-auto max-w-7xl">
        <Link
          href="#home"
          className=" font-semibold hover:bg-gradient-to-r from-[#FF8660] to-[#9A33FF] hover:inline-block hover:text-transparent hover:bg-clip-text "
        >
          Home
        </Link>
        <Link
          href="#skills"
          className=" font-semibold hover:bg-gradient-to-r from-[#FF8660] to-[#9A33FF] hover:inline-block hover:text-transparent hover:bg-clip-text "
        >
          Skills
        </Link>
        <Link
          href="#experience"
          className=" font-semibold hover:bg-gradient-to-r from-[#FF8660] to-[#9A33FF] hover:inline-block hover:text-transparent hover:bg-clip-text "
        >
          Experience
        </Link>
        <Link
          href="#projects"
          className=" font-semibold hover:bg-gradient-to-r from-[#FF8660] to-[#9A33FF] hover:inline-block hover:text-transparent hover:bg-clip-text "
        >
          Projects
        </Link>

        <Link
          href="#contact"
          className=" font-semibold hover:bg-gradient-to-r from-[#FF8660] to-[#9A33FF] hover:inline-block hover:text-transparent hover:bg-clip-text "
        >
          Contact
        </Link>
      </div>
      <div className="flex mr-10 lg:hidden  " onClick={handleClick}>
        <Menu size={30} className="text-white" />
        {open && (
          <div className=" fixed inset-0 z-50 flex">
            <div className="ml-auto w-full h-[30%] mt-20 bg-white   p-4 shadow-lg z-10  ">
              <div className="flex flex-col gap-5  ">
                <Link
                  href="#home"
                  className=" curosr-pointer text-xl font-semibold hover:bg-gradient-to-r from-[#FF8660] to-[#9A33FF] hover:inline-block hover:text-transparent hover:bg-clip-text"
                >
                  Home
                </Link>
                <Link
                  href="#skills"
                  className="text-xl curosr-pointer font-semibold hover:bg-gradient-to-r from-[#FF8660] to-[#9A33FF] hover:inline-block hover:text-transparent hover:bg-clip-text "
                >
                  Skills
                </Link>
                <Link
                  href="#experience"
                  className="text-xl curosr-pointer font-semibold hover:bg-gradient-to-r from-[#FF8660] to-[#9A33FF] hover:inline-block hover:text-transparent hover:bg-clip-text "
                >
                  Experience
                </Link>
                <Link
                  href="#projects"
                  className=" text-xl curosr-pointer  font-semibold hover:bg-gradient-to-r from-[#FF8660] to-[#9A33FF] hover:inline-block hover:text-transparent hover:bg-clip-text "
                >
                  Projects
                </Link>

                <Link
                  href="#contact"
                  className=" text-xl curosr-pointer font-semibold hover:bg-gradient-to-r from-[#FF8660] to-[#9A33FF] hover:inline-block hover:text-transparent hover:bg-clip-text "
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
