"use client";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <section id="" className="">
      <div className="container">
        {/* <SectionTitle title="" paragraph="" center width="0px" /> */}

        <div className="w-full">
          {/* <div className="mb-8 flex justify-center md:mb-12 lg:mb-16">
            <span onClick={() => setIsMonthly(true)} className={`${isMonthly}`}>
              Monthly
            </span>
            <span
              onClick={() => setIsMonthly(false)}
              className={`${!isMonthly}`}
            >
              Yearly
            </span>
          </div> */}
          {/* <OfferList isMonthly={isMonthly} />
          <PricingBox isMonthly={isMonthly} /> */}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
