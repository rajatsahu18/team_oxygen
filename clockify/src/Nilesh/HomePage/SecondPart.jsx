import React from "react";
import {Secondpage_Home_H1,Secondpage_Home_H2,Secondpage_Home_Button1} from "./Homecss"



function SecondPart() {
  return (
    <div>
      <Secondpage_Home_H1>
        The most popular free time tracker for teams
      </Secondpage_Home_H1>
      <Secondpage_Home_H2>
        Time tracking software used by millions. Clockify is a simple time
        <br />
        tracker and timesheet app that lets you and your team track work <br />
        hours across projects. Unlimited users, free forever.
      </Secondpage_Home_H2>
      <Secondpage_Home_Button1>
        START TRACING TIME-IT'S FREE!
      </Secondpage_Home_Button1>
      <br />
      <br />
      <a
        style={{ textDecoration: "none" }}
        href="https://clockify.me/customers"
      >
        <img
          src="https://clockify.me/assets/images/signed-up-icon.svg"
          alt=""
        />
        103,466 people signed up last month
      </a>
    </div>
  );
}

export { SecondPart };
