import Image from "next/image";
import React from "react";
import link from "@/assets/aboutus.png";
import CustomButton from "../CustomButton/CustomButton";
import { IoIosArrowRoundForward } from "react-icons/io";

function AboutUs() {
  return (
    <div className="py-20">
      <div className="grid lg:grid-cols-2 grid-cols-1 justify-center gap-10 items-center">
        <div className="lg:relative">
          <div className="lg:bg-[#21D279] bg-none lg:w-[200px] lg:h-[650px] ">
            <div className="lg:absolute lg:top-12  lg:left-[85px] lg:px-0 px-5">
              <Image
                src={link}
                // width={650}
                // height={400}
                className="lg:w-[750px] w-[600px] lg:h-[600px] h-[300px]"
                objectFit="contain"
                alt="logo"
              />
            </div>
          </div>
        </div>

<div className="flex flex-col lg:justify-start justify-center lg:items-start items-center gap-15 w-full lg:pr-30 pr-0 lg:px-0 px-4">
          <h1 className="lg:text-[40px] text-[25px] font-bold">About us</h1>
          <p className="lg:text-[18px] text-[14px] text-[#474745]">
            At LCDC Global Ltd, we are a business development company focused on
            mergers and acquisitions (M&A). Our goal is to buy businesses while
            honouring the legacy of their founders. We bring creativity,
            innovation, and a strategic marketing approach to take these
            businesses to the next level. Whether you're looking to sell your
            business or explore new opportunities, we are here to ensure your
            hard work continues to grow and thrive.
          </p>

          <p className="lg:text-[18px] text-[14px] text-[#474745]">
            At LCDC Global Ltd, we are a business development company focused on
            mergers and acquisitions (M&A). Our goal is to buy businesses while
            honouring the legacy of their founders. We bring creativity,
            innovation, and a strategic marketing approach to take these
            businesses to the next level. Whether you're looking to sell your
            business or explore new opportunities, we are here to ensure your
            hard work continues to grow and thrive.
          </p>
          <div>
            <CustomButton
              label="Get in Touch Today"
              icon={IoIosArrowRoundForward}
              color="green"
              width={"lg:w-full w-full"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
