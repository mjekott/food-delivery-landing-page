import Link from "next/link";
import React from "react";
import CategoryCard from "../components/CategoryCard";

const categories = [
  {
    name: "burger",
    link: "/#",
    src: "/images/categories/burger.jpg",
  },
  {
    name: "chicken",
    link: "/#",
    src: "/images/categories/chicken.jpg",
  },
  {
    name: "fish",
    link: "/#",
    src: "/images/categories/fish.jpg",
  },
  {
    name: "italian",
    link: "/#",
    src: "/images/categories/italian.jpg",
  },
  {
    name: "burger",
    link: "/#",
    src: "/images/categories/meat.jpg",
  },
  {
    name: "pizza",
    link: "/#",
    src: "/images/categories/pizza.jpg",
  },
  {
    name: "spanish",
    link: "/#",
    src: "/images/categories/spanish.jpg",
  },
];

const CategoryContainer = () => {
  return (
    <section className="container my-10">
      <h2 className="heading">Categories</h2>

      <div className="flex flex-wrap -ml-3">
        {categories.map((item, key) => (
          <CategoryCard key={key} {...item} />
        ))}
      </div>
    </section>
  );
};

export default CategoryContainer;
