import AboutUs from "@/components/about-us/page";
import Banner from "@/components/banner/banner";
import BussinesCard from "@/components/bussines-card/page";
import Faq from "@/components/faq/page";
import GetInTouch from "@/components/get-in-touch/page";
import IndustriesCard from "@/components/industries-card/page";
import OurBussinessCard from "@/components/our-bussiness-card/page";
import SmallBusinessOwner from "@/components/small-business-owner/page";


export default function Home() {
  return (
    <>
     {/* <Banner /> */}
     <BussinesCard />
     <AboutUs />
     <IndustriesCard />
     <OurBussinessCard />
     {/* <SmallBusinessOwner /> */}
     <Faq />
     <GetInTouch />
    </>
   
  );
}
