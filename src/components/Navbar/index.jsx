"use client";

import { useState } from "react";
import { FiAlignJustify, FiX } from "react-icons/fi";
import NavItem from "./NavItem";
import Link from "next/link";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <header>
      <div className="h-14 md:h-20 fixed w-full md:bg-white md:flex md:items-center md:justify-between md:px-5 lg:px-10 xl:px-20">
        <div className="max-md:relative max-md:bg-white max-md:z-10 max-md:h-14 max-md:w-full max-md:flex max-md:items-center max-md:justify-between max-md:px-5 max-md:my-auto">
          <Link
            href="/"
            onClick={() => {
              window.location.reload();
              window.location.href = "/";
            }}
          >
            <h1 className="text-[1.5rem] lg:text-[1.75rem] text-primary font-bold leading-5">
              MySkill{" "}
              <span className="block font-normal text-content">Residence.</span>
            </h1>
          </Link>
          <div>
            {open ? (
              <FiX
                className="md:hidden text-3xl"
                onClick={() => {
                  setOpen(!open);
                }}
              />
            ) : (
              <FiAlignJustify
                className="md:hidden text-3xl"
                onClick={() => {
                  setOpen(!open);
                }}
              />
            )}
          </div>
        </div>
        <div
          className={`z-50 max-md:absolute max-md:w-full max-md:bg-light ${
            open
              ? "transition translate-x-0 duration-500"
              : "transition translate-x-full md:translate-x-0 duration-500"
          }`}
        >
          <NavItem />
        </div>
      </div>
      <div className="h-14 md:h-20 bg-blue-500"></div>
    </header>
  );
};

export default Navbar;
