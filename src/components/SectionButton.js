import React from "react";

const SectionButton = ({ text }) => {
  return (
    <button
      className={`rounded-2xl text-[#343268] ${
        text === "Faq" ? "px-3 py-1" : "p-1"
      } border border-[#343268] hover:scale-95 transition-all ease-linear duration-300`}
    >
      {text}
    </button>
  );
};

export default SectionButton;
