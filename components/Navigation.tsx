import Link from "next/link";
import React, { FC, useEffect, useState } from "react";

const navvlinks = [
  { name: "home", link: "/#" },
  { name: "categories", link: "/#categories" },
  { name: "dishes", link: "/#dishes" },
  { name: "testimonials", link: "/#testimonials" },
  { name: "downloads", link: "/#downloads" },
];

const Navigation = () => {
  const [showNav, setShowNav] = useState(false);
  const toggleNav = () => setShowNav((prev) => !prev);

  useEffect(() => {
    showNav
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "");
  }, [showNav]);

  return (
    <>
      <button
        className="fixed top-6 z-30 right-6 bg-orange-600 rounded-full p-2 text-white"
        onClick={toggleNav}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      <nav
        className={`fixed top-0 z-40 h-full w-full ${
          showNav ? "right-0" : "-right-full"
        } bg-black/40 transition-all duration-300  `}
      >
        <div className="absolute top-0 right-0 w-full sm:w-6/12 lg:w-4/12 xl:w-3/12 h-full bg-orange-50 flex items-center">
          <button
            className="absolute left-4 top-7 text-orange-600 outline-none h-5 w-5 overflow-hidden"
            onClick={toggleNav}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <ul className="w-full">
            {navvlinks.map((item, key) => (
              <li
                key={key}
                onClick={toggleNav}
                className="block px-4 py-3 w-full text-orange-800 capitalize text-base hover:bg-orange-700 hover:pl-6 transition-all duration-300"
              >
                <Link href={item.link}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
