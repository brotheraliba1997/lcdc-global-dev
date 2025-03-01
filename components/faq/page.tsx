"use client"
import React, { useState } from "react";
import Container from "../container/container";
import Image from "next/image";
import link from "@/assets/image.png";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";

function Faq() {

    


  const faqsArray = [
    {
      question: "Received a Proposal From LCDC Global Ltd. What’s Next?",
      answer:
        "If you’ve received an email or letter from us, let’s talk! Our initial discovery call will explore potential mutual benefits and help determine the best path forward.",
    },

    {
      question: "How can you help me grow my business?",
      answer:
        "If you’ve received an email or letter from us, let’s talk! Our initial discovery call will explore potential mutual benefits and help determine the best path forward.",
    },

    {
      question: "What if I’m just starting my business?",
      answer:
        "If you’ve received an email or letter from us, let’s talk! Our initial discovery call will explore potential mutual benefits and help determine the best path forward.",
    },

    {
      question: "How quickly will I see results?",
      answer:
        "If you’ve received an email or letter from us, let’s talk! Our initial discovery call will explore potential mutual benefits and help determine the best path forward.",
    },

    {
      question: "What support do you provide?",
      answer:
        "If you’ve received an email or letter from us, let’s talk! Our initial discovery call will explore potential mutual benefits and help determine the best path forward.",
    },
  ];

  const [faqs, setFaqs] = useState<any>(false)

  const handlerChange = (index:any) => {
    setFaqs((prevIndex:any) => (prevIndex === index ? null : index));  
  }

  console.log(faqs, "faqs")
  return (
    <div className="my-20">
      <Container>
        <h1 className="my-20 text-center lg:text-[40px] text-[20px] font-bold">
          Frequently Asked Question
        </h1>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 ">
          <div className="lg:relative">
            <div className="lg:bg-[#21D279] lg:w-[65%] lg:h-[500px] rounded-2xl ">
              <div className="lg:absolute lg:top-7 lg:left-[25px]">
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
            {faqsArray?.map((items: any, index: number) => (
              <div className="flex justify-between shadow-lg py-6 px-10 rounded-2xl" onClick={()=> handlerChange(index) }>
                <div>
                  <h1 className="lg:text-[20px] text-[12px] font-bold">{items?.question}</h1>
                  {faqs === index ?  <p className="lg:text-[18px] text-[10px] py-2 text-[#474745]">{items?.answer}</p> : null }

                 
                </div>
                <div className="text-[#21D279]">
                  {faqs === index ? <FaAngleDown /> : <FaAngleUp />}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Faq;
