import React from "react";
import SectionButton from "./SectionButton";
import SectionHeading from "./SectionHeading";
import SectionSubHeading from "./SectionSubHeading";
import Button from "./Button";
import img from "../asstes/Rectangle2.png";

const About = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-8 justify-between items-center  py-8 bg-g ray-100">
      <div className="flex flex-col justify-between lg:w-[40%] space-y-3 lg:space-y-6">
        <div>
          <SectionButton text="Who we are" />
        </div>
        <div>
          <SectionHeading text="We Help To Get Solutions" />
        </div>
        <div>
          <SectionSubHeading text="We are proud to be a trusted healthcare provider in our community, and we look forward to serving you and your family with excellence, integrity, and compassion. Your health is our priority, and we are here for you every step of the way. We believe in treating each patient with dignity, respect, and empathy, ensuring that they receive the attention and care they deserve." />
        </div>
        <div>
          <Button active="true" text="Learn more" />
        </div>
      </div>
      <div className="  lg:w-[60%] w-full">
        <div className="flex flex-col">
          <img
            src={img}
            className="w-full  sm:h-[200px] md:h-[300px] lg:h-auto object-cover rounded-lg "
          />
          <div className="text-white bg-[#343268]  w-full lg:-mt-24 mt-3 lg:-ml-20 lg:w-1/2 p-4  rounded-lg shadow-lg ">
            <h1 className="text-xl font-semibold mb-2">
              Our mission is simple
            </h1>
            <p className="text-sm">
              To provide high-quality healthcare services that are accessible,
              personalized, and patient-centered.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
