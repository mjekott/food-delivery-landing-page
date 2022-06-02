import React from "react";

const DownloadContainer = () => {
  return (
    <section
      id="downloads"
      className="bg-[url('/images/download/app-bg.png')] w-full h-[450px] bg-cover bg-no-repeat "
    >
      <div className="flex justify-center flex-col items-start container h-full">
        <h2 className="heading">download</h2>
        <h2 className="text-3xl font-bold mb-5">
          Get access to our mobile app.
        </h2>
        <p className="text-base text-gray-600 ">
          Easily order food through your mobile app,and get order at your home
        </p>
        <div className="flex space-x-2 mt-5">
          <div>
            <img
              src="/images/download/apple.png"
              alt=""
              className="image-cover"
            />
          </div>
          <div>
            <img
              src="/images/download/google.png"
              alt=""
              className="image-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadContainer;
