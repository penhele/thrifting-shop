import React from "react";
import Navlink from "./navlink";
import {
  IoCartOutline,
  IoPersonOutline,
  IoShirtOutline,
} from "react-icons/io5";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-2">
      <div className="flex justify-between items-center">
        <Link href={"/"} className="flex gap-3 items-center cursor-pointer">
          <IoShirtOutline />
          <span>Thrifting</span>
        </Link>

        <Navlink />

        <div className="flex gap-3 items-center">
          <IoCartOutline />
          <IoPersonOutline />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
