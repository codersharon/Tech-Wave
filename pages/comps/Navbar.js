import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div className="bg-black p-1 text-white flex items-center justify-center w-full">
      <div className="hidden md:flex lg:flex-row w-fit md:items-center md:justify-center">
        <Link href={"/tech"}>
          <li className="font-inter list-none mx-5 lg:mx-10 xl:mx-20 cursor-pointer">
            Tech
          </li>
        </Link>
        <Link href={"/business"}>
          <li className="font-inter list-none mx-5 lg:mx-10 xl:mx-20 cursor-pointer">
            Business
          </li>
        </Link>
        <Link href={"/entertainment"}>
          <li className="font-inter list-none mx-5 lg:mx-10 xl:mx-20 cursor-pointer">
            Entertainment
          </li>
        </Link>
      </div>
      <Link href={"/"} className="cursor-default">
        <img src="/Black-White.svg" alt="tech-vave" className="w-32" />
      </Link>
      <div className="hidden md:flex lg:flex-row w-fit md:items-center md:justify-center">
        <Link href={"/register"}>
          <li className="font-inter list-none mx-5 lg:mx-10 xl:mx-20 cursor-pointer">
            Register
          </li>
        </Link>
        <Link href={"/join-us"}>
          <li className="font-inter list-none mx-5 lg:mx-10 xl:mx-20 cursor-pointer">
            Join-Us
          </li>
        </Link>
        <Link href={"/login"}>
          <li className="font-inter list-none mx-5 lg:mx-10 xl:mx-20 cursor-pointer">
            Login
          </li>
        </Link>
      </div>
    </div>
  );
}
