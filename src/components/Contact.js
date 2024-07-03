import React from "react";
import Button from "./Button";
import sectionimage from "../asstes/Rectangle32.png";
import logo from "../asstes/logolight.png";

const Contact = () => {
  return (
    <div className="relative py-8 lg:py-16  ">
      <div className="absolute  right-0 mt-3 px-3 z-20">
        <img src={logo} alt="Logo" className="w-14 lg:w-24" />
      </div>
      <div className=" mx-auto   relative z-10">
        <div className="relative">
          <img
            src={sectionimage}
            alt="Contact Us"
            className="w-full h-64 lg:h-96 object-cover rounded-lg shadow-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#03022e] via-[#04024cd8] to-[#706bff5b] opacity-85 rounded-lg"></div>
          <div className="absolute inset-0 flex flex-col  top-[30%] left-[5%]  text-white px-4 z-10">
            <h1 className="text-2xl lg:text-4xl font-semibold mb-4">
              Get Your <br /> First Appointment
              <br /> at 50% Off
            </h1>
            <div className=" flex gap-2">
              <Button text="Appointment" contact={true} active="true" />
              <Button text="Learn More" contact={true} active="false" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
