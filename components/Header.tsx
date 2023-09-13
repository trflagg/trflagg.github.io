import * as React from "react";
import Link from "next/link";

import BlogLogo from "./BlogLogo";

function Header() {
  return (
    <header className="content-center bg-star-command-blue-500 text-white border-gray-200 px-4 lg:px-6 py-2.5">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
        <Link href="/">
          <div className="flex items-center hover:cursor-pointer">
            <BlogLogo fill="#FFFFFF" stroke="#FFFFFF" height={45} />
          </div>
        </Link>
        <Link href="https://wrdie.com/">
          <h1 className="text-white font-arvo hover:underline hover:cursor-pointer">
            Go to Wrdie.com
          </h1>
        </Link>
      </div>
    </header>
  );
}

export default Header;
