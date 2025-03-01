import React from "react";
import logo from "@/assets/logo.png";
import link from "@/assets/linkedin.png";
import twitter from "@/assets/twitter.png";
import Image from "next/image";
import Container from "../container/container";
import { MdOutlineForwardToInbox } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { IoLocation } from "react-icons/io5";

function Footer() {
  return (
    <div>
      <div className="bg-[#F6F7F9]  py-20">
        <Container>
          <div className="grid lg:grid-cols-4 grid-cols-1 lg:gap-0 gap-4 justify-between items-center">
            <div className="lg:col-span-2 col-span-0">
              <div>
                <Image
                  src={logo}
                  width={300}
                  height={50}
                  objectFit="contain"
                  alt="logo"
                />
              </div>
              <div className="flex gap-2 pt-10 ">
                <div>
                  <Image
                    src={link}
                    width={30}
                    height={30}
                    objectFit="contain"
                    alt="logo"
                  />
                </div>

                <div className="bg-black h-[30px] w-[30px] p-2 flex justify-center items-center rounded-full ">
                  <Image
                    src={twitter}
                    width={20}
                    height={20}
                    objectFit="contain"
                    alt="logo"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <h1 className="text-[20px] font-bold">Quick Links</h1>
              <p className="font-normal">Home</p>
              <p>About Us</p>
              <p>Services</p>
              <p>Get In Touch</p>
              <p>FAQ’s</p>
            </div>

            <div className="flex flex-col gap-5">
              <h1 className="text-[20px] font-bold">Contact us</h1>

              <div className="flex gap-2">
                <div className="text-[#21D279] text-[20px]">
                  <MdOutlineForwardToInbox />{" "}
                </div>
                <p>david.heller@itex.net</p>
              </div>

              <div className="flex gap-2">
                <div className="text-[#21D279] text-[20px]">
                  <IoCallSharp />{" "}
                </div>

                <p>702.796.0755</p>
              </div>

              <div className="flex gap-2">
                <div className="text-[#21D279] text-[20px]">
                  <IoLocation />{" "}
                </div>

                <p>
                  David Heller ITEX Vegas 1452 W. Horizon Ridge Pkwy #125 Las
                  Vegas, NV 89012
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <Container>
        <div className="flex lg:flex-row flex-col gap-3 justify-between items-center py-5">
          <div className="lg:text-[20px] text-[14px]">© 2025 LCDC Global All rights reserved.</div>
          <div className="flex gap-4">
            <p className="text-[#21D279] lg:text-[16px] text-[12px]">Privacy Policy </p>
            <p className="text-[#21D279] lg:text-[16px] text-[12px]">Terms of Service </p>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
