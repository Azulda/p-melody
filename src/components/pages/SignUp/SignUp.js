import React from "react";
import TopSection from "../../TopSection";
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from "./Data";
import Pricing from "../../Pricing";

function SignUp() {
  return (
    <>
      <TopSection {...homeObjOne} />
      <TopSection {...homeObjThree} />
    </>
  );
}

export default SignUp;
