import React from "react";
import Container from "../container/container";
import link from "@/assets/Mask group (1).png";
import Image from "next/image";

function BussinesCard() {
  return (
    <div className="">
      <h1 className="py-15 text-center text-[50px] font-bold">What We Do ?</h1>
      <Container>
        <div className="grid grid-cols-3  gap-10 py-10">
          <div className="w-full flex flex-col gap-8 justify-center items-center py-10 px-12 bg-[#E9FBF2] rounded-2xl">
            <div className="bg-white h-[80px] w-[80px] rounded-full p-4">
              <Image
                src={link}
                width={50}
                height={50}
                objectFit="contain"
                alt="logo"
              />
            </div>

            <h1 className=" text-center text-[24px] font-bold">What We Do ?</h1>
            <p className="text-center text-[#474745CC] text-[18px]">
              We create the best brands in the world—and we do it with
              confidence and results. Whether starting from scratch or through
              M&A, we transform visions into thriving businesses. We call it
              business development.
            </p>
          </div>
          <div className="w-full flex flex-col gap-8 justify-center items-center py-10 px-12 bg-[#E9FBF2] rounded-2xl">
            <div className="bg-white h-[80px] w-[80px] rounded-full p-4">
              <Image
                src={link}
                width={50}
                height={50}
                objectFit="contain"
                alt="logo"
              />
            </div>

            <h1 className=" text-center text-[24px] font-bold">What We Do ?</h1>
            <p className="text-center text-[#474745CC] text-[18px]">
              We create the best brands in the world—and we do it with
              confidence and results. Whether starting from scratch or through
              M&A, we transform visions into thriving businesses. We call it
              business development.
            </p>
          </div>

          <div className="w-full flex flex-col gap-8 justify-center items-center py-10 px-12 bg-[#E9FBF2] rounded-2xl">
            <div className="bg-white h-[80px] w-[80px] rounded-full p-4">
              <Image
                src={link}
                width={50}
                height={50}
                objectFit="contain"
                alt="logo"
              />
            </div>

            <h1 className=" text-center text-[24px] font-bold">What We Do ?</h1>
            <p className="text-center text-[#474745CC] text-[18px]">
              We create the best brands in the world—and we do it with
              confidence and results. Whether starting from scratch or through
              M&A, we transform visions into thriving businesses. We call it
              business development.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default BussinesCard;
