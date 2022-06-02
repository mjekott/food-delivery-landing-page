import React from "react";
import RowContainer from "../container/RowContainer";
import CategoryCard from "./CategoryCard";

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

const CategoryList = () => {
  return (
    <RowContainer title="categories" id="categories">
      {categories.map((item, key) => (
        <CategoryCard key={key} {...item} />
      ))}
    </RowContainer>
  );
};

export default CategoryList;
