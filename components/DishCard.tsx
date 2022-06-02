import Link from "next/link";
import React, { FC } from "react";
import { Rating } from "react-simple-star-rating";

export type Dish = {
  id: number;
  image: string;
  feature: "best selling" | "new dish";
  name: string;
  rating: number;
  totalReviews: number;
  price: number;
  discount: number;
};

const DishCard: FC<Dish> = ({
  name,
  feature,
  totalReviews,
  rating,
  price,
  discount,
  image,
}) => {
  return (
    <div className="w-full rounded-tl-2xl rounded-tr-2xl overflow-hidden sm:w-6/12 md:w-4/12 lg:w-3/12 xl:w-[20%] mt-3 mg:mt-0 md:mr-3">
      <div className="overflow-hidden h-[190px] w-full relative">
        <img src={image} alt={name} className="image-cover" />
        <div className="absolute inset-0 bg-black/50">
          <p
            className={`absolute top-4 right-4 rounded-full text-white ${
              feature === "best selling" ? "bg-orange-800" : "bg-green-600"
            } px-3 py-1  capitalize text-sm`}
          >
            {feature}
          </p>
        </div>
      </div>
      <div className="mt-3">
        <Link href="/#">
          <p className="text-base sm:text-lg capitalize text-gray-900">
            {name}
          </p>
        </Link>
        <div className="flex items-center">
          <p className=" mr-1 text-base text-orange-600 mt-1 font-bold">
            {rating}
          </p>
          <Rating size={25} ratingValue={rating * 20} readonly />
          <p className=" mr-1 text-base text-gray-400 mt-1 font-bold ml-1">
            ( {totalReviews})
          </p>
        </div>
        <div className="mt-1 flex justify-between">
          <span className="text-base text-orange-600 font-medium">
            ${price}
          </span>
          <span className="text-base line-through text-gray-400">
            ${discount}
          </span>
        </div>
        <div className="mt-2">
          <button className="px-4 py-2 capitalize bg-orange-600 text-white text-sm transition-all duration-200 rounded-lg inline-block focus:ring-2 ring-offset-2 ring-orange-400">
            buy now
          </button>
        </div>
      </div>
    </div>
  );
};

export default DishCard;
