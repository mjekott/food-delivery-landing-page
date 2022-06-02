import React, { useState } from "react";
import LighthosePreview from "./LighthosePreview";

const images = [
  "/images/testimonials/1.jpg",
  "/images/testimonials/2.jpg",
  "/images/testimonials/3.jpg",
  "/images/testimonials/4.jpg",
  "/images/testimonials/5.jpg",
  "/images/testimonials/6.jpg",
  "/images/testimonials/7.jpg",
  "/images/testimonials/8.jpg",
  "/images/testimonials/9.jpg",
];

const TestimonialImages = () => {
  const [currentImage, setCurrentImage] = useState<string>("");
  return (
    <div className="col-span-3 lg:col-span-1 gap-5 grid grid-cols-3 md:grid-cols-6 lg:grid-cols-3 ">
      {images.map((item, key) => (
        <div
          className="overflow-hidden rounded"
          key={key}
          onClick={() => setCurrentImage(item)}
        >
          <img
            src={item}
            alt={item}
            className="imgage-cover hover:scale-110 transition-all duration-700 cursor-pointer"
          />
        </div>
      ))}

      <LighthosePreview
        image={currentImage}
        onClick={() => setCurrentImage("")}
      />
    </div>
  );
};

export default TestimonialImages;
