import React from "react";
import TopSection from "../../TopSection";
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from "./Data";
import Pricing from "../../Pricing";

function Products() {
  return (
    <>
      <TopSection {...homeObjOne} />
      <TopSection {...homeObjTwo} />
    </>
  );
}

export default Products;
