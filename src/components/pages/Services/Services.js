import React from "react";
import TopSection from "../../TopSection";
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from "./Data";
import Pricing from "../../Pricing";

function Services() {
  return (
    <>
      <Pricing />
      <TopSection {...homeObjOne} />
      <TopSection {...homeObjThree} />
    </>
  );
}

export default Services;
