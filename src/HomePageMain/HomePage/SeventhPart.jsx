import React from "react";
import { Link } from "react-router-dom";
import {
  SECONDPAGE_HOME_H1,
  SECONDPAGE_HOME_H2,
  SECONDPAGE_HOME_BUTTON1,
} from "./Homecss";

function SeventhPart() {
  return (
    <div
      style={{
        marginTop: "650px",
        backgroundColor: "#F7FCFF",
        height: "400px",
      }}
    >
      <br /> <br /> <br />
      <SECONDPAGE_HOME_H1>Start tracking time with Clockify</SECONDPAGE_HOME_H1>
      <SECONDPAGE_HOME_H2
        style={{
          fontSize: "15px",
          fontFamily: "",
        }}
      >
        Unlimited users • Cancel anytime • Free forever
      </SECONDPAGE_HOME_H2>
      <Link to={`/signup`} style={{ textDecoration: "none" }}>
        <SECONDPAGE_HOME_BUTTON1>CREATE FREE ACCOUNT</SECONDPAGE_HOME_BUTTON1>
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

export { SeventhPart };
