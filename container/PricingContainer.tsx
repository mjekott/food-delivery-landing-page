import React from "react";
import PricingCard, { Pricing } from "../components/PricingCard";
const pricing: Pricing[] = [
  {
    discount: 20,
    subtitle: "$299 per month,access limited foods",
    plan: "monthly",
    amount: 299,
    feature: [
      { name: "1 meal per day", included: true },
      { name: "Free Delivery", included: true },
      { name: "Cancel any time", included: true },
      { name: "custom food order", included: false },
    ],
  },
  {
    discount: 30,
    subtitle: "$699 per month,access all foods",
    plan: "annual",
    amount: 699,
    feature: [
      { name: "2 meal per day", included: true },
      { name: "Free Delivery", included: true },
      { name: "Cancel any time", included: true },
      { name: "custom food order", included: true },
    ],
  },
];

const PricingContainer = () => {
  return (
    <section className="container py-20 pb-10">
      <h2 className="heading text-center mb-10">pricing</h2>
      <div className="flex flex-wrap justify-center gap-10">
        {pricing.map((item, index) => (
          <PricingCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default PricingContainer;
