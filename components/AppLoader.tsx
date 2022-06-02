import React from "react";

const AppLoader = () => {
  return (
    <div className="fixed inset-0 z-50  bg-orange-50 flex justify-center items-center h-screen ">
      <div className="w-10 h-10 border-4 rounded-full border-orange-800 animate-ping "></div>
    </div>
  );
};

export default AppLoader;
