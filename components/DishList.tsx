import React from "react";
import RowContainer from "../container/RowContainer";
import DishCard, { Dish } from "./DishCard";

const dishes: Dish[] = [
  {
    id: 1,
    image: "/images/dishes/chessey-pizza.jpg",
    name: "chessey-pizza",
    price: 10.0,
    discount: 13.0,
    feature: "new dish",
    rating: 4.5,
    totalReviews: 1000,
  },
  {
    id: 2,
    image: "/images/dishes/burger.jpg",
    name: "burger",
    price: 10.0,
    discount: 13.0,
    feature: "best selling",
    rating: 4.5,
    totalReviews: 1000,
  },
  {
    id: 3,
    image: "/images/dishes/baryani.jpg",
    name: "baryani",
    price: 10.0,
    discount: 13.0,
    feature: "new dish",
    rating: 4.5,
    totalReviews: 1000,
  },
  {
    id: 4,
    image: "/images/dishes/pizza.jpg",
    name: "pizza",
    price: 10.0,
    discount: 13.0,
    feature: "best selling",
    rating: 3.5,
    totalReviews: 1500,
  },
];

const DishList = () => {
  return (
    <RowContainer title="popular dishes">
      {dishes.map((item, index) => (
        <DishCard key={index} {...item} />
      ))}
    </RowContainer>
  );
};

export default DishList;
