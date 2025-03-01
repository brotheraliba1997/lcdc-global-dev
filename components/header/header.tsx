"use client"
import React, { useState } from "react";
import Container from "../container/container";
import CustomButton from "../CustomButton/CustomButton";
import Image from "next/image";
import logo from "@/assets/logo.png";
import { IoIosArrowRoundForward } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCancelCircle } from "react-icons/im";


function Header() {

    const [open , setOpen] = useState<Boolean>(false)
  return (

    <>
    <Container>
      <div className="flex justify-between items-center my-5">
        <div>
          <Image
            src={logo}
            className="lg:w-[300px] w-[220px] lg:h-[70px] h-[50px] "
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

        <div className="lg:hidden block text-[#21D279] text-[24px]" onClick={() => setOpen(!open)}>
            {!open ? <GiHamburgerMenu/> : <ImCancelCircle /> }
            

        </div>


       
      </div>


      
    </Container>
    {open ? <div className=" shadow-lg px-8 py-6 lg:hidden block">
          <ul className="flex flex-col gap-4 font-bold   ">
            <li className="text-[12px] font-medium">Home</li>
            <li className="text-[12px] font-medium">Our Services</li>
            <li className="text-[12px] font-medium">About Us</li>
            <li className="text-[12px] font-medium">Get In Touch</li>
            <li className="text-[12px] font-medium">FAQ’s</li>
          </ul>

          <div className="lg:hidden block py-4">
          <CustomButton
            label="Get in Touch Today"
            icon={IoIosArrowRoundForward}
            color="green"
            width={"lg:w-full "}
          />
        </div>
        </div> : null}
    </>
    

    
  );
}

export default Header;
