import React from "react";

const customerList = [
  "/images/customer-list/user-1.jpg",
  "/images/customer-list/user-2.jpg",
  "/images/customer-list/user-3.jpg",
  "/images/customer-list/user-4.jpg",
  "/images/customer-list/user-5.jpg",
  "/images/customer-list/user-6.jpg",
];

const Header = () => {
  return (
    <header>
      <div className="container relative">
        <div className="absolute top-6 left-4 w-auto h-[40px]">
          <img
            src="/images/logo.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-wrap items-center pt-28 xl:pt-20">
          <div className="w-full  md:w-6/12 ">
            <h4 className="text-xs uppercase font-medium bg-amber-100 px-3 py-2 rounded-3xl inline-block text-orange-800">
              drink, food & enjoy
            </h4>
            <h1 className="mt-5 text-4xl sm:text-5xl capitalize font-bold ">
              most fastest food <br />
              <span className="bg-orange-600 text-white rotate-3 inline-block px-2 py-1 mr-1">
                delivery
              </span>
              service
            </h1>
            <p className="mt-4 text-gray-500 text-base">
              Food is any substance consumed to provide nutritional support for
              an organism
            </p>
            <div className="flex items-center mt-5">
              <ul className="flex">
                {customerList.map((item, index) => (
                  <li
                    key={index}
                    className="w-[40px] h-[40px] rounded-full border-[3.5px] overflow-hidden -ml-3 first:ml-0"
                  >
                    <img
                      src={item}
                      alt="customer-images"
                      className="w-full h-full object-cover"
                    />
                  </li>
                ))}
              </ul>
              <p className="text-xs ml-3 sm:text-sm font-medium text-orange-800">
                3500+ happy customers
              </p>
            </div>
          </div>
          <div className="hidden md:block md:w-6/12">
            <img
              src="/images/foods.png"
              alt=""
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
