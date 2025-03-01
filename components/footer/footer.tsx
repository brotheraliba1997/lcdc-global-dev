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
          <div className="grid grid-cols-4 justify-between items-center">
            <div className="col-span-2">
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
              <p>Home</p>
              <p>Home</p>
              <p>Home</p>
            </div>

            <div className="flex flex-col gap-2">
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
        <div className="flex justify-between items-center py-5">
          <div>© 2025 LCDC Global All rights reserved.</div>
          <div className="flex gap-4">
            <p className="text-[#21D279]">Privacy Policy </p>
            <p className="text-[#21D279]">Terms of Service </p>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
