import Image from "next/image";
import React from "react";
import logo from "@/assets/Mask group (2).png";

function IndustriesCard() {

    const IndustryCard = [
        {
            image: logo,
            text: "Retail, hospitality"
        },
        {
            image: logo,
            text: "Transport, logistics, motorbike"
        },
        {
            image: logo,
            text: "Media, publishing, entertainment"
        },
        {
            image: logo,
            text: "Waste management"
        },
        {
            image: logo,
            text: "Construction, engineering"
        },
        {
            image: logo,
            text: "Tech companies"
        },
        {
            image: logo,
            text: "Timber, joiner and other wood related businesses "
        },
        {
            image: logo,
            text: "Finances and accounting"
        },
        {
            image: logo,
            text: "Textile, fashion, manufacture companies"
        },
        {
            image: logo,
            text: "Funeral Care"
        },
    ]
  return (
    <div className=" bg-[#E9FBF269] my-20 p-20 flex flex-col gap-6">
      <h1 className="text-center text-[40px] font-bold">Industries we Love to Work with </h1>
      <p className="text-center text-[18px] text-[#474745]">
        We are passionate about collaborating with diverse industries. Our
        expertise lies in identifying growth opportunities and crafting
        solutions tailored to your business.
      </p>

      <div className="grid grid-cols-5 gap-8 py-5">
        {IndustryCard.map((items:any, index:number) => (
            <div className="bg-white flex flex-col gap-8 h-[220px] justify-center px-8 rounded-lg">
          <div className="h-[80px] w-[80px] rounded-full p-5 bg-[#E9FBF2] flex justify-center items-center">
            <Image
              src={items?.image}
              width={60}
              height={60}
              objectFit="contain"
              alt="logo"
            />
          </div>
          <p className="text-[#474745] text-[20px]"> {items?.text} </p>
        </div>

        ))}
        
      </div>
    </div>
  );
}

export default IndustriesCard;
