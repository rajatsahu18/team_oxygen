import React from "react";
import { Link } from "react-router-dom";

import {
  Maindivline,
  Plinkone,
  Signbutt,
  Plinksecond,
  Plinthird
} from "./Navbarcss";

function Navbarhome() {
  return (
    <div>
      <Maindivline>
        <Link
          to={`/`}
          style={{
            marginLeft: "10%",
            marginTop: "36px",
            color: "#5A6B7B",
            textDecoration: "none"
          }}
        >
          <img
            src="https://clockify.me/assets/images/clockify-logo.svg"
            alt=""
          />
        </Link>

        <Link
          to={`/features`}
          style={{ textDecoration: "none", marginLeft: "5%" }}
        >
          <Plinkone>Feature</Plinkone>
        </Link>

        <Link
          to={`/downloads`}
          style={{
            textDecoration: "none",
            marginLeft: "5%"
          }}
        >
          <Plinkone>DOWNLOAD</Plinkone>
        </Link>

        <Link
          to={`/login`}
          style={{
            marginLeft: "34%",
            textDecoration: "none"
          }}
        >
          <Plinksecond>LOG IN</Plinksecond>
        </Link>

        <Signbutt>
          <Link
            to={`/signup`}
            style={{
              color: "#03a9f4",
              textDecoration: "none",
              fontSize: "14.4px"
            }}
          >
            <Plinthird>SIGN UP</Plinthird>
          </Link>
        </Signbutt>
      </Maindivline>
    </div>
  );
}

export { Navbarhome };
