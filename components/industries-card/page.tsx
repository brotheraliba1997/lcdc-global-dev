import Image from "next/image";
import React from "react";
import logo from "@/assets/Mask group (2).png";

function IndustriesCard() {
  const IndustryCard = [
    {
      image: logo,
      text: "Retail, hospitality",
    },
    {
      image: logo,
      text: "Transport, logistics, motorbike",
    },
    {
      image: logo,
      text: "Media, publishing, entertainment",
    },
    {
      image: logo,
      text: "Waste management",
    },
    {
      image: logo,
      text: "Construction, engineering",
    },
    {
      image: logo,
      text: "Tech companies",
    },
    {
      image: logo,
      text: "Timber, joiner and other wood related businesses ",
    },
    {
      image: logo,
      text: "Finances and accounting",
    },
    {
      image: logo,
      text: "Textile, fashion, manufacture companies",
    },
    {
      image: logo,
      text: "Funeral Care",
    },
  ];
  return (
    <div className=" bg-[#E9FBF269] lg:my-20 my-10 lg:p-20 p-10 flex flex-col gap-6">
      <h1 className="text-center lg:text-[40px] text-[20px] font-bold">
        Industries we Love to Work with{" "}
      </h1>
      <p className="text-center lg:text-[18px] text-[12px] text-[#474745]">
        We are passionate about collaborating with diverse industries. Our
        expertise lies in identifying growth opportunities and crafting
        solutions tailored to your business.
      </p>

      <div className="grid lg:grid-cols-5 grid-cols-1  gap-8 py-5">
        {IndustryCard.map((items: any, index: number) => (
          <div className="bg-white flex flex-col gap-8 lg:h-[220px] h-[150px] lg:py-0 py-5 justify-center px-8 rounded-lg">
            <div className="lg:h-[80px] h-[50px] lg:w-[80px] w-[50px] rounded-full lg:p-5 p-2 bg-[#E9FBF2] flex justify-center items-center">
              <Image
                src={items?.image}
                //   width={60}
                //   height={60}
                className="lg:w-[40px] w-[30px] lg:h-[40px] h-[30px]"
                objectFit="contain"
                alt="logo"
              />
            </div>
            <p className="text-[#474745] lg:text-[20px] text-[12px]">
              {" "}
              {items?.text}{" "}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default IndustriesCard;
