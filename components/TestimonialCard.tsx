import React, { FC } from "react";

type Props = {
  name: string;
  username: string;
  image: string;
  note: string;
};

const TestimonialCard: FC<Props> = ({ name, username, note, image }) => {
  return (
    <div className="flex flex-col col-span-2 md:col-span-1">
      <div className="flex gap-3 items-center">
        <div className="rounded-full overflow-hidden w-[60px] h-[60px]">
          <img src={image} alt="" className="image-cover" />
        </div>
        <div>
          <p className="capitalize font-medium text-slate-600  text-sm  ">
            {name}
          </p>
          <span className="text-xs text-orange-600 font-medium block ">
            @{username}
          </span>
        </div>
      </div>
      <div className="text-base text-gray-600 leading-[28px]">{note}</div>
    </div>
  );
};

export default TestimonialCard;
