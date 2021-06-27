import React from "react";
import { Link } from "react-router-dom";
import {
  SECONDPAGE_HOME_H1,
  SECONDPAGE_HOME_H2,
  SECONDPAGE_HOME_BUTTON1,
} from "./Homecss";

function SecondPart() {
  return (
    <div style={{ marginTop: "60px" }}>
      <SECONDPAGE_HOME_H1>
        The most popular free time tracker for teams
      </SECONDPAGE_HOME_H1>
      <SECONDPAGE_HOME_H2>
        Time tracking software used by millions. Clockify is a simple time
        <br />
        tracker and timesheet app that lets you and your team track work <br />
        hours across projects. Unlimited users, free forever.
      </SECONDPAGE_HOME_H2>

      <Link to={`/signup`} style={{ textDecoration: "none" }}>
        <SECONDPAGE_HOME_BUTTON1>
          START TRACING TIME-IT'S FREE!
        </SECONDPAGE_HOME_BUTTON1>
      </Link>

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
