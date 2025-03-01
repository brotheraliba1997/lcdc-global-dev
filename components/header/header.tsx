import React from "react";
import Container from "../container/container";
import CustomButton from "../CustomButton/CustomButton";
import Image from "next/image";
import logo from "@/assets/logo.png";
import { IoIosArrowRoundForward } from "react-icons/io";

function Header() {
  return (
    <Container>
      <div className="flex justify-between items-center my-5">
        <div>
          <Image
            src={logo}
            className="lg:w-[300px] w-[150px] lg:h-[70px] h-[50px] "
            objectFit="contain"
            alt="logo"
          />
        </div>
        <div className="lg:block hidden">
          <ul className="flex gap-4 font-bold">
            <li>Home</li>
            <li>Our Services</li>
            <li>About Us</li>
            <li>Get In Touch</li>
            <li>FAQ’s</li>
          </ul>
        </div>

        <div className="lg:block hidden">
          <CustomButton
            label="Get in Touch Today"
            icon={IoIosArrowRoundForward}
            color="green"
            width={"lg:w-full "}
          />
        </div>
      </div>
    </Container>
  );
}

export default Header;
