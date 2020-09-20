import React from "react";
import TopSection from "../../TopSection";
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from "./Data";
import Pricing from "../../Pricing";

function home() {
  return (
    <div>
      <TopSection {...homeObjOne} />
      <TopSection {...homeObjTwo} />
      <Pricing />
      <TopSection {...homeObjThree} />
      <TopSection {...homeObjFour} />
    </div>
  );
}

export default home;
