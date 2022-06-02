import Link from "next/link";
import React from "react";

const footerlinks = [
  {
    title: "services",
    links: [
      {
        name: "online order",
        href: "/#",
      },
      {
        name: "super chat",
        href: "/#",
      },
      {
        name: "free reservation",
        href: "/#",
      },
      {
        name: "24/7 service",
        href: "/#",
      },
    ],
  },
  {
    title: "Quick links",
    links: [
      {
        name: "categories",
        href: "/#",
      },
      {
        name: "dishes",
        href: "/#",
      },
      {
        name: "pricing",
        href: "/#",
      },
      {
        name: "testimonials",
        href: "/#",
      },
      {
        name: "download app",
        href: "/#",
      },
    ],
  },
  {
    title: "About",
    links: [
      {
        name: "our story",
        href: "/#",
      },
      {
        name: "benefits",
        href: "/#",
      },
      {
        name: "careers",
        href: "/#",
      },
      {
        name: "our chefs",
        href: "/#",
      },
    ],
  },
  {
    title: "Help",
    links: [
      {
        name: "contact us",
        href: "/#",
      },
      {
        name: "support",
        href: "/#",
      },
      {
        name: "faq",
        href: "/#",
      },
    ],
  },
];

const FooterContainer = () => {
  return (
    <section className="footer py-20">
      <div className="grid grid-cols-3 gap-5 container">
        <div className="col-span-3 lg:col-span-1">
          <div className="w-24">
            <img src="/images/logo.png" className="image-cover" alt="" />
          </div>
          <p className="mt-4 text-sm text-gray-600">
            Copyright &copy; {new Date().getFullYear()} by Caferio. Inc. <br />
            All rights reserved
          </p>
        </div>
        <div className="col-span-3 lg:col-span-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {footerlinks.map((item, key) => (
            <div>
              <h2 className="font-bold text-lg capitalize mb-4">
                {item.title}
              </h2>
              <ul className="flex flex-col space-y-5">
                {item.links.map((link, index) => (
                  <li className="capitalize  text-base text-gray-500">
                    <Link href={link.href}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FooterContainer;
