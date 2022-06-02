import React from "react";
import TestimonialImages from "./TestimonialImages";

function TestimonialContainer() {
  return (
    <section className="py-20 container bg-gradient-to-b from-orange-50/70 to-transparent">
      <h2 className="heading ">Testimonial</h2>
      <p className="text-gray-900 font-semibold text-3xl w-full md:w-7/12 lg:w-6/12">
        Caferio is a trusted brand,because we have happy customers
      </p>
      <div className="grid grid-cols-3 gap-5  mt-10">
        <div className="lg:col-span-2 col-span-3 grid grid-cols-2 gap-5">
          <div className="flex flex-col col-span-2 md:col-span-1">
            <div className="flex gap-3 items-center">
              <div className="rounded-full overflow-hidden w-[60px] h-[60px]">
                <img
                  src="/images/customer-list/user-1.jpg"
                  alt=""
                  className="image-cover"
                />
              </div>
              <div>
                <p className="capitalize font-medium text-slate-600  text-sm  ">
                  Kebe Eyong
                </p>
                <span className="text-xs text-orange-600 font-medium block ">
                  @eyong
                </span>
              </div>
            </div>
            <div className="text-base text-gray-600 leading-[28px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam sapiente debitis porro sed nihil iure, impedit officiis
              esse necessitatibus explicabo officia eius corporis ipsam. Facilis
              sapiente numquam voluptatibus non quas.
            </div>
          </div>
          <div className="flex flex-col col-span-2 md:col-span-1">
            <div className="flex gap-3 items-center">
              <div className="rounded-full overflow-hidden w-[60px] h-[60px]">
                <img
                  src="/images/customer-list/user-1.jpg"
                  alt=""
                  className="image-cover"
                />
              </div>
              <div>
                <p className="capitalize font-medium text-slate-600  text-sm  ">
                  Kebe Eyong
                </p>
                <span className="text-xs text-orange-600 font-medium block ">
                  @eyong
                </span>
              </div>
            </div>
            <div className="text-base text-gray-600 leading-[28px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam sapiente debitis porro sed nihil iure, impedit officiis
              esse necessitatibus explicabo officia eius corporis ipsam. Facilis
              sapiente numquam voluptatibus non quas.
            </div>
          </div>
          <div className="flex flex-col col-span-2 md:col-span-1">
            <div className="flex gap-3 items-center">
              <div className="rounded-full overflow-hidden w-[60px] h-[60px]">
                <img
                  src="/images/customer-list/user-1.jpg"
                  alt=""
                  className="image-cover"
                />
              </div>
              <div>
                <p className="capitalize font-medium text-slate-600  text-sm  ">
                  Kebe Eyong
                </p>
                <span className="text-xs text-orange-600 font-medium block ">
                  @eyong
                </span>
              </div>
            </div>
            <div className="text-base text-gray-600 leading-[28px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam sapiente debitis porro sed nihil iure, impedit officiis
              esse necessitatibus explicabo officia eius corporis ipsam. Facilis
              sapiente numquam voluptatibus non quas.
            </div>
          </div>
          <div className="flex flex-col col-span-2 md:col-span-1">
            <div className="flex gap-3 items-center">
              <div className="rounded-full overflow-hidden w-[60px] h-[60px]">
                <img
                  src="/images/customer-list/user-1.jpg"
                  alt=""
                  className="image-cover"
                />
              </div>
              <div>
                <p className="capitalize font-medium text-slate-600  text-sm  ">
                  Kebe Eyong
                </p>
                <span className="text-xs text-orange-600 font-medium block ">
                  @eyong
                </span>
              </div>
            </div>
            <div className="text-base text-gray-600 leading-[28px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam sapiente debitis porro sed nihil iure, impedit officiis
              esse necessitatibus explicabo officia eius corporis ipsam. Facilis
              sapiente numquam voluptatibus non quas.
            </div>
          </div>
        </div>
        <TestimonialImages />
      </div>
    </section>
  );
}

export default TestimonialContainer;
