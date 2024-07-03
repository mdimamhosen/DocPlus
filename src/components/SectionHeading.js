import React from "react";

const SectionHeading = ({ text }) => {
  return (
    <h1 className="text-base md:text-lg lg:text-2xl w-[70%] font-bold text-[#343268] ">
      {text}
    </h1>
  );
};

export default SectionHeading;
