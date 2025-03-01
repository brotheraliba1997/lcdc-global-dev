import Image from "next/image";
import React from "react";
import logo from "@/assets/dots.png";
import CustomButton from "../CustomButton/CustomButton";
import { IoIosArrowRoundForward } from "react-icons/io";

function GetInTouch() {
  return (
    <div className="w-full bg-gradient-to-l from-[#179355] to-[#21D279]">
      <div className="flex flex-col gap-8 justify-center items-center lg:p-20 p-5 relative">
        <div className="absolute top-4 left-4 lg:block hidden">
          <Image
            src={logo}
            width={50}
            height={50}
            objectFit="contain"
            alt="logo"
          />
        </div>
        <p className="text-[#FFFFFF] lg:text-[40px] text-[20px] text-center font-bold  ">
          Are You a Small Business Owner?
        </p>

        <div className="absolute bottom-5 right-5 lg:block hidden">
          <Image
            src={logo}
            width={70}
            height={50}
            objectFit="contain"
            alt="logo"
          />
        </div>

        <p className="text-[#FFFFFF] lg:text-[18px] text-[12px] text-center font-bold lg:w-[50%] w-full ">
          Running a retail shop, off-license, or restaurant can be demanding.
          Are you tired of always being on the floor? We offer solutions that
          allow you to enjoy your dividends while watching your business grow
          under our expert guidance.
        </p>

        <div>
          <CustomButton
            label="Get in Touch Today"
            icon={IoIosArrowRoundForward}
            color="white"
            width={"w-full"}
          />
        </div>
      </div>
    </div>
  );
}

export default GetInTouch;
