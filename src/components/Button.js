import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const Button = ({ active, text, contact }) => {
  if (contact) {
    return (
      <button
        className={`px-4 py-1 text-sm md:text-base rounded-xl font-semibold  ${
          active === "true"
            ? " bg-yellow-400 text-black font-semibold "
            : "  text-white   border-2 border-white"
        } flex justify-center items-center gap-2`}
      >
        <p>{text}</p>
        <GoArrowUpRight />
      </button>
    );
  }
  return (
    <button
      className={`px-4 py-2 rounded-xl font-bold ${
        active === "true"
          ? " bg-yellow-400 text-black font-bold"
          : "  text-[#343268] border border-[#343268]"
      } flex justify-center items-center gap-2 hover:scale-95 transition-all ease-linear duration-300`}
    >
      <p>{text}</p>
      <GoArrowUpRight />
    </button>
  );
};

export default Button;
