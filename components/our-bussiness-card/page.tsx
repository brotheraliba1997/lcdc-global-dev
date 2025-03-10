import Image from "next/image";
import React from "react";
import logo from "@/assets/bities.png";
import lord from "@/assets/lord.png";
import CustomButton from "../CustomButton/CustomButton";
import { IoIosArrowRoundForward } from "react-icons/io";
import Container from "../container/container";


function OurBussinessCard() {
  return (
    <div className="my-20">
      <h1 className="my-20 text-center lg:text-[40px] text-[20px] font-bold">
        Our Businesses
      </h1>
      <div className="mx-auto lg:w-[60%] w-[90%]">

      
      <div className="my-20 flex lg:flex-row flex-col justify-center items-center gap-16">
        <div className="border border-gray-300 py-12 px-8 rounded-2xl shadow-lg">
          <div className="flex flex-col justify-center items-center gap-8">
            <div>
              <Image
                src={logo}
                width={300}
                height={200}
                objectFit="contain"
                alt="logo"
              />
            </div>
            <p className="text-center lg:text-[18px] text-[12px]">
            Lorem ipsum dolor sit amet consectetur. Parturient integer commodo lacus fusce tortor quam. Purus fermentum nam egestas vehicula cursus vel. Commodo eget porta fermentum eget vehicula. Auctor ultrices habitasse amet tellus netus montes sagittis viverra.
            </p>
            <div className="w-full">
            <CustomButton width="w-full" label="View Details" icon={IoIosArrowRoundForward} color="green"/>

            </div>
          </div>

          
        </div>
        <div className="border border-gray-300 py-12 px-8 rounded-2xl shadow-lg">
          <div className="flex flex-col justify-center items-center gap-8">
            <div>
              <Image
                src={logo}
                width={300}
                height={200}
                objectFit="contain"
                alt="logo"
              />
            </div>
            <p className="text-center lg:text-[18px] text-[12px]">
            Lorem ipsum dolor sit amet consectetur. Parturient integer commodo lacus fusce tortor quam. Purus fermentum nam egestas vehicula cursus vel. Commodo eget porta fermentum eget vehicula. Auctor ultrices habitasse amet tellus netus montes sagittis viverra.
            </p>
            <div className="w-full">
            <CustomButton width="w-full" label="View Details" icon={IoIosArrowRoundForward} color="green"/>

            </div>
          </div>

          
        </div>
      </div>
      </div>
    </div>
  );
}

export default OurBussinessCard;
