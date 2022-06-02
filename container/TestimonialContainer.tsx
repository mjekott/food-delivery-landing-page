import React from "react";
import TestimonialCard from "../components/TestimonialCard";
import TestimonialImages from "./TestimonialImages";

const temtimonials = [
  {
    name: "Kebe Eyong",
    image: "/images/customer-list/user-1.jpg",
    username: "keyong",
    note: "I recently switched my online meal ordering platform from a big company that was taking 13% of every order to your free online ordering platform. I am VERY PLEASED with your service",
  },
  {
    name: "Filip andress",
    username: "sandress",
    image: "/images/customer-list/user-2.jpg",
    note: "I have been using Caferio for 3 years, the service is great and the food is very tasty, so that's why Caferio is my favorite ",
  },
  {
    name: "ALex white",
    username: "awhite",
    image: "/images/customer-list/user-3.jpg",
    note: "When I received my first food order from Caferio and the food I ate, the food was great and I have been a fan of Caferio ever since.",
  },
  {
    name: "Javed ali",
    username: "javedali",
    image: "/images/customer-list/user-4.jpg",
    note: "Yesterday I ordered food for my party from Caferio. The guests appreciate the food, they said from where you have ordered the food? I told them, Caferio.",
  },
];

function TestimonialContainer() {
  return (
    <section
      id="testimonials"
      className="py-20 container bg-gradient-to-b from-orange-50/70 to-transparent"
    >
      <h2 className="heading ">Testimonial</h2>
      <p className="text-gray-900 font-semibold text-3xl w-full md:w-7/12 lg:w-6/12">
        Caferio is a trusted brand,because we have happy customers
      </p>
      <div className="grid grid-cols-3 gap-5  mt-10">
        <div className="lg:col-span-2 col-span-3 grid grid-cols-2 gap-5">
          {temtimonials.map((item, key) => (
            <TestimonialCard key={key} {...item} />
          ))}
        </div>
        <TestimonialImages />
      </div>
    </section>
  );
}

export default TestimonialContainer;
