import React from "react";
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
    </div>
  );
}
export { Page };

