import React, { useState } from "react";
import { Menu } from "@headlessui/react";
import Button from "./Button";
import logo from "../asstes/logodark.png";
import { IoMenuSharp } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white w-full z-10  ">
      <div className="flex justify-between   items-center py-1 lg:py-3">
        <div>
          <img
            className=" hover:scale-105 cursor-pointer transition-all duration-300 ease-linear  object-cover"
            src={logo}
            alt="Logo"
          />
        </div>
        <div className="hidden  md:flex md:space-x-8">
          <a
            href="#"
            className="  inline-flex items-center text-lg text-[#343268]  border-transparent border-b-2 hover:border-[#343268]  font-medium  transition-all ease-linear duration-300"
          >
            Home
          </a>
          <a
            href="#"
            className="  inline-flex items-center text-lg text-[#343268] border-b-2 border-transparent   font-medium hover:border-[#343268]  transition-all ease-linear duration-300"
          >
            Services
          </a>
          <a
            href="#"
            className="  inline-flex items-center text-lg text-[#343268] border-b-2 border-transparent  font-medium hover:border-[#343268]  transition-all ease-linear duration-300"
          >
            Blog
          </a>
          <a
            href="#"
            className="  inline-flex items-center text-lg text-[#343268] border-b-2 border-transparent font-medium hover:border-[#343268] transition-all ease-linear duration-300"
          >
            About Us
          </a>
        </div>
        <div className="flex items-center">
          <div className="hidden md:block">
            <Button active="false" text={"Appointment"} />
          </div>
          <div className=" flex md:hidden">
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="inline-flex justify-center w-full rounded-md     text-sm font-medium text-gray-700 hover:bg-gray-50">
                  <IoMenuSharp style={{ fontSize: "48px" }} />
                </Menu.Button>
              </div>
              <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    <a
                      href="#"
                      className={` font-semibold  block px-4 py-2 text-sm`}
                    >
                      Home
                    </a>
                  </Menu.Item>
                  <Menu.Item>
                    <a
                      href="#"
                      className={` font-semibold  block px-4 py-2 text-sm`}
                    >
                      Service
                    </a>
                  </Menu.Item>
                  <Menu.Item>
                    <a
                      href="#"
                      className={` font-semibold  block px-4 py-2 text-sm`}
                    >
                      Blog
                    </a>
                  </Menu.Item>
                  <Menu.Item>
                    <a
                      href="#"
                      className={` font-semibold  block px-4 py-2 text-sm`}
                    >
                      About Us
                    </a>
                  </Menu.Item>
                  <Menu.Item>
                    <a href="#" className={`  block px-4 py-2 text-sm`}>
                      <Button active="false" text={"Appointment"} />
                    </a>
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Menu>
          </div>
        </div>{" "}
      </div>
    </nav>
  );
};

export default Navbar;
