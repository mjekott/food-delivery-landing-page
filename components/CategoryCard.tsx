import Link from "next/link";
import React, { FC } from "react";

type Props = {
  src: string;
  name: string;
  link: string;
};

const CategoryCard: FC<Props> = ({ src, name, link }) => {
  return (
    <div className="w-full p-3">
      <Link href={link}>
        <div className="block w-full h-[140px] sm:h-[120px] cursor-pointer overflow-hidden rounded-md relative group">
          <img src={src} alt={name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-orange-600 z-10 rounded-full group-hover:rounded-none scale-0 group-hover:scale-150 origin-top-right transition-all duration-900"></div>
          <div className="absolute inset-0 w-full bg-black/60 h-full flex items-center justify-center">
            <p className="text-white text-lg sm:text-base  font-medium capitalize z-20">
              {name}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CategoryCard;
