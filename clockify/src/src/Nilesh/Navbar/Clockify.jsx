import React from "react";
import { SecondPart } from "../HomePage/SecondPart";
import { Thirdpart } from "../HomePage/ThirdPart";
import { FourthPart } from "../HomePage/FourthPart";
import { FifthPage } from "../HomePage/FifthPart";
import { SixthPart } from "../HomePage/SisxthPart";
import { SixthPart2 } from "../HomePage/SisxthPart2";
import { SeventhPart1 } from "../HomePage/SeventhPart1";
import { SeventhPart } from "../HomePage/SeventhPart";
import { AppAlignment } from "./Navbarcss";
import { RoutesF} from "../Footer/RoutesF";
import { NavbarF } from "../Footer/NavbarF";

function Clockify() {
  return <AppAlignment>
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
      <br />
      <br />
      <br />
      <br />
      <SixthPart />
      <br />
      <br />
      <br />
      <br />
    <SixthPart2 />
    <br />
      <br />
      <br />
      <br />
      <SeventhPart1 />
      <br />
      <br />
      <br />
      <br />
      <br />
      < SeventhPart />
      <br />
      <br />
      <br />
      <NavbarF/>

  </AppAlignment>;
}

export { Clockify };
