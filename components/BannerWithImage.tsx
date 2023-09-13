import * as React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
import { SiDevdotto } from "react-icons/si";

export default function BannerWithImage() {
  return (
    <div className="h-32 sm:h-40 bg-header-blue ">
      <div className="p-10 flex space-x-8 max-w-7xl">
        <div className="flex min-w-24 sm:min-w-32">
          <img
            className="h-24 w-24  rounded-full ring-4 ring-white sm:h-32 sm:w-32"
            src="/MeHeadshotCropped.JPG"
            alt=""
          />
        </div>
        <div className=" flex-1 space-y-2 -mt-5">
          <Link href="/">
            <span className="link">
              <h1 className="truncate text-3xl sm:text-6xl font-bold text-gray-800 drop-shadow-sm pb-1 ">
                Taylor R. Flagg
              </h1>
            </span>
          </Link>
          <p className="text-gray-700 font-thin text-md sm:text-xl">
            Professional Front-end Developer
          </p>
          <div className=" text-lg sm:text-2xl space-x-4 flex text-gray-700">
            <a
              className="text-gray-700"
              href="https://twitter.com/TaylorFromWrdie"
              target="_new"
            >
              <FaTwitter />
            </a>
            <a
              className="text-gray-700"
              href="https://www.instagram.com/taylorfromwrdie/"
              target="_new"
            >
              <FaInstagram />
            </a>
            <a
              className="text-gray-700"
              href="https://linkedin.com/in/trflagg"
              target="_new"
            >
              <FaLinkedin />
            </a>
            <a
              className="text-gray-700"
              href="https://github.com/trflagg"
              target="_new"
            >
              <FaGithub />
            </a>
            <a
              className="text-gray-700"
              href="https://dev.to/taylorfromwrdie"
              target="_new"
            >
              <SiDevdotto />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
