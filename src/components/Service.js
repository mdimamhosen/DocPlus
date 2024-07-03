import React from "react";
import SectionButton from "./SectionButton";
import SectionHeading from "./SectionHeading";
import SectionSubHeading from "./SectionSubHeading";
import Button from "./Button";
import TextImage from "./TextImage";
import image1 from "../asstes/Rectangle3.png";
import image2 from "../asstes/Rectangle4.png";
import image3 from "../asstes/Rectangle5.png";

const Service = () => {
  return (
    <div className="">
      <div className=" mx-auto grid grid-cols-1 grid-rows-1 p-6 gap-8  lg:grid-cols-2 lg:grid-rows-2 ">
        <div className=" flex flex-col justify-evenly space-y-4 lg:space-y-0 ">
          <div>
            <SectionButton text="Service" />
          </div>
          <div>
            <SectionHeading text="Empowering Health, Enriching Lives" />
          </div>
          <div>
            <SectionSubHeading text="We are committed to providing high-quality, compassionate care to every patient we serve. Whatever your healthcare needs may be, you can trust us to be your partner in health and wellness." />
          </div>
          <div>
            <Button text="Appointment" active="true" />
          </div>
        </div>

        <TextImage
          image={image1}
          text1="Advanced Technology"
          text2="Our surgeons are trained in the latest robotic surgical techniques and technology."
        />
        <TextImage
          image={image2}
          text1="Online Doctor Meet"
          text2="Consult with our healthcare professionals online from the comfort of your home."
        />
        <TextImage
          image={image3}
          text1="Consultancy your health"
          text2="Get expert consultation and guidance for your health concerns."
        />
      </div>
    </div>
  );
};

export default Service;
