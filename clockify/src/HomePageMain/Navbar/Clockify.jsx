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

import { NavbarF } from "../Footer/NavbarF";

function Clockify() {
  return (
    <AppAlignment>
      <SecondPart />

      <Thirdpart />

      <FourthPart />

      <FifthPage />

      <SixthPart />

      <SixthPart2 />

      <SeventhPart1 />

      <SeventhPart />

      <NavbarF />
    </AppAlignment>
  );
}

export { Clockify };
