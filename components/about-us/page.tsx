import Image from "next/image";
import React from "react";
import link from "@/assets/aboutus.png";
import CustomButton from "../CustomButton/CustomButton";
import { IoIosArrowRoundForward } from "react-icons/io";

function AboutUs() {
  return (
    <div className="py-20">
      <div className="grid grid-cols-2 gap-10 items-center">
        <div className="relative">
          <div className="bg-[#21D279] w-[200px] h-[720px] ">
            <div className="absolute top-17 left-[85px]">
              <Image
                src={link}
                width={650}
                height={400}
                objectFit="contain"
                alt="logo"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-15 pr-30">
          <h1 className="text-[40px] font-bold">About us</h1>
          <p className="text-[18px] text-[#474745]">
            At LCDC Global Ltd, we are a business development company focused on
            mergers and acquisitions (M&A). Our goal is to buy businesses while
            honouring the legacy of their founders. We bring creativity,
            innovation, and a strategic marketing approach to take these
            businesses to the next level. Whether you're looking to sell your
            business or explore new opportunities, we are here to ensure your
            hard work continues to grow and thrive.
          </p>

          <p className="text-[18px] text-[#474745]">
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
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
