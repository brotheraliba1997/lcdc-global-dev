import React from "react";
import Container from "../container/container";
import Image from "next/image";
import link from "@/assets/image.png";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";

function Faq() {
  return (
    <div className="my-20">
      <Container>
        <h1 className="my-20 text-center text-[40px] font-bold">
          Frequently Asked Question
        </h1>
        <div className="grid grid-cols-2 gap-10 ">
          <div className="relative">
            <div className="bg-[#21D279] w-[65%] h-[500px] rounded-2xl ">
              <div className="absolute top-7 left-[25px]">
                <Image
                  src={link}
                  width={600}
                  height={400}
                  objectFit="contain"
                  alt="logo"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <div className="flex shadow-lg py-6 px-10 rounded-2xl">
              <div>
                <h1 className="text-[20px] font-bold">
                  Received a Proposal From LCDC Global Ltd. What’s Next?
                </h1>

                <p className="text-[18px] text-[#474745]">
                  If you’ve received an email or letter from us, let’s talk! Our
                  initial discovery call will explore potential mutual benefits
                  and help determine the best path forward.
                </p>
              </div>
              <div className="text-[#21D279]">
                {true ? <FaAngleDown /> : <FaAngleUp />}
              </div>
            </div>

            <div className="flex shadow-lg py-6 px-10 rounded-2xl">
              <div>
                <h1 className="text-[20px] font-bold">
                  Received a Proposal From LCDC Global Ltd. What’s Next?
                </h1>

                <p className="text-[18px] text-[#474745]">
                  If you’ve received an email or letter from us, let’s talk! Our
                  initial discovery call will explore potential mutual benefits
                  and help determine the best path forward.
                </p>
              </div>
              <div className="text-[#21D279]">
                {true ? <FaAngleDown /> : <FaAngleUp />}
              </div>
            </div>

            <div className="flex shadow-lg py-6 px-10 rounded-2xl">
              <div>
                <h1 className="text-[20px] font-bold">
                  Received a Proposal From LCDC Global Ltd. What’s Next?
                </h1>

                <p className="text-[18px] text-[#474745]">
                  If you’ve received an email or letter from us, let’s talk! Our
                  initial discovery call will explore potential mutual benefits
                  and help determine the best path forward.
                </p>
              </div>
              <div className="text-[#21D279]">
                {true ? <FaAngleDown /> : <FaAngleUp />}
              </div>
            </div>

            <div className="flex shadow-lg py-6 px-10 rounded-2xl">
              <div>
                <h1 className="text-[20px] font-bold">
                  Received a Proposal From LCDC Global Ltd. What’s Next?
                </h1>

                <p className="text-[18px] text-[#474745]">
                  If you’ve received an email or letter from us, let’s talk! Our
                  initial discovery call will explore potential mutual benefits
                  and help determine the best path forward.
                </p>
              </div>
              <div className="text-[#21D279]">
                {true ? <FaAngleDown /> : <FaAngleUp />}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Faq;
