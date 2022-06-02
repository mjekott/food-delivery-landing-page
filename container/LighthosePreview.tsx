import React, { FC, useEffect } from "react";

type Props = {
  image?: string;
  onClick: () => void;
};

const LighthosePreview: FC<Props> = ({ image = "", onClick }) => {
  useEffect(() => {
    image
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "");
  }, [image]);

  return (
    <div
      className={`fixed inset-0 bg-black/80 ${
        image ? "visible" : "invisible"
      }  z-40 flex items-center justify-center transition-all duration-100`}
      onClick={onClick}
    >
      <div
        className={`w-[400px] max-h-[400px] h-full ${
          image ? "visible scale-100" : "invisible scale-0"
        } transition-all duration-500 overflow-hidden `}
        onClick={(e) => e.stopPropagation()}
      >
        <img src={image} className="imgage-cover" />
      </div>
    </div>
  );
};

export default LighthosePreview;
