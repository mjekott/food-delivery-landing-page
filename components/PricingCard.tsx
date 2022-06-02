import React, { FC } from "react";

type Feature = {
  name: string;
  included: boolean;
};

export type Pricing = {
  plan: string;
  amount: number;
  subtitle: string;
  discount: number;
  feature: Feature[];
  color?: string;
};

const PricingCard: FC<Pricing> = ({
  plan,
  amount,
  subtitle,
  discount,
  feature,
  color = "bg-yellow-100",
}) => {
  return (
    <div className="w-full sm:w-8/12 md:w-7/12 lg:w-5/12 xl:w-4/12">
      <div
        className={`${color} px-10 py-20 rounded-lg border border-yellow-300 border-dashed relative`}
      >
        <span className="absolute  top-5 -right-[16px] py-2 px-5 bg-yellow-500 font-bold uppercase text-gray-800 text-xs after:absolute after:top-[5px] after:right-[4px] after:h-full after:w-10 after:bg-yellow-800 after:rotate-[60deg] after:-z-10 ">
          Student {discount}%
        </span>
        <h3 className="text-center uppercase text-xl font-semibold text-orange-600">
          {plan}
        </h3>
        <div className="text-center">
          <span className="text-2xl mr-2 text-gray-700">$</span>
          <span className="text-gray-700 text-[62px] font-semibold">
            {amount}
          </span>
        </div>
        <p className="text-base text-gray-700 text-center">{subtitle}</p>
        <ul className="mt-5 flex flex-col space-y-3">
          {feature.map((item, key) => (
            <li className="flex">
              <div className=" text-orange-500 rounded-full mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 stroke-current"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  {item.included ? (
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  ) : (
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clipRule="evenodd"
                    />
                  )}
                </svg>
              </div>
              <p className="capitalize text-gray-700">1 meal per day</p>
            </li>
          ))}
        </ul>
        <div className="mt-4">
          <button className="btn capitalize bg-orange-500 focus:ring ring-offset-2 flex gap-2 text-center text-white">
            Order now
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
