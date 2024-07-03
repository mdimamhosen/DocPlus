import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const TextImage = ({ image, text1, text2 }) => {
  return (
    <div className="flex flex-col borderb h-[300px]   border-red-800">
      <img
        src={image}
        alt={text1}
        className="w-full h-full  object-cover rounded-lg mb-4"
      />
      <div className="text-white bg-[#343268]   -mt-[150px] lg:w-1/2 w-[90%] md:w-[65%] mx-auto md:ml-6 opacity-85 p-4 rounded-lg shadow-lg ">
        <h1 className="text-xl font-semibold mb-2">{text1}</h1>
        <div className="flex  justify-center items-end  ">
          <p className="text-sm">{text2}</p>
          <div className="bg-yellow-400 text-black p-2 rounded-full">
            <GoArrowUpRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextImage;
