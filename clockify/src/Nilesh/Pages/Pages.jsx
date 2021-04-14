import React from "react";
import { FifthPage } from "../HomePage/FifthPart";
import { FourthPart } from "../HomePage/FourthPart";
import { SecondPart } from "../HomePage/SecondPart";
import { Thirdpart } from "../HomePage/ThirdPart";
import { Routes } from "../Navbar/Routes";


function Page() {
  return (
    <div>
      <Routes />
      <br />
      <SecondPart />
      <br />
      <br />
      <br />

      <Thirdpart />
      <br />
      <br />

      <FourthPart/> 
      <br />
      <br />
      <FifthPage />
    </div>
  );
}
export { Page };

