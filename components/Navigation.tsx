import Link from "next/link";
import React from "react";

const Navigation = () => {
  return (
    <nav className="fixed inset-0 bg-black/40 ">
      <div className="absolute top-0 right-0 w-full sm:w-6/12 lg:w-4/12 xl:w-3/12 h-full bg-orange-50 flex items-center">
        <ul className="w-full">
          <li className="block px-4 py-3 w-full text-orange-800 capitalize text-base hover:bg-orange-700 hover:pl-6 transition-all duration-300">
            <Link href="/">home</Link>
          </li>
          <li className="block px-4 py-3 w-full text-orange-800 capitalize text-base hover:bg-orange-700 hover:pl-6 transition-all duration-300">
            <Link href="/categories">categories</Link>
          </li>
          <li className="block px-4 py-3 w-full text-orange-800 capitalize text-base hover:bg-orange-700 hover:pl-6 transition-all duration-300">
            <Link href="/recipies">recipes</Link>
          </li>
          <li className="block px-4 py-3 w-full text-orange-800 capitalize text-base hover:bg-orange-700 hover:pl-6 transition-all duration-300">
            <Link href="/">pricing</Link>
          </li>
          <li className="block px-4 py-3 w-full text-orange-800 capitalize text-base hover:bg-orange-700 hover:pl-6 transition-all duration-300">
            <Link href="/">testimonials</Link>
          </li>
          <li className="block px-4 py-3 w-full text-orange-800 capitalize text-base hover:bg-orange-700 hover:pl-6 transition-all duration-300">
            <Link href="/">download app</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
