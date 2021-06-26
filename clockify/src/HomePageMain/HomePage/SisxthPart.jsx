import React from "react";

import { SECONDPAGE_HOME_H2, SECONDPAGE_HOME_H1, Signbutt2 } from "./Homecss";

function SixthPart() {
  return (
    <div style={{ marginTop: "160px" }}>
      <div>
        <SECONDPAGE_HOME_H1>Time tracking apps</SECONDPAGE_HOME_H1>
        <SECONDPAGE_HOME_H2>
          Clockify works across devices. Track time from anywhere — all <br />
          data is synced online.
        </SECONDPAGE_HOME_H2>
      </div>

      <div style={{ display: "flex" }}>
        <div>
          <img
            src="https://clockify.me/assets/images/app-desktop-new.png"
            alt=""
          />
          <h3>DESKTOP APP</h3>
          <Signbutt2>
            <a
              href="https://clockify.me/windows-time-tracking"
              style={{ textDecoration: "none" }}
            >
              Windows
            </a>
          </Signbutt2>
          <Signbutt2>
            <a
              href="https://clockify.me/mac-time-tracking"
              style={{ textDecoration: "none" }}
            >
              Mac
            </a>
          </Signbutt2>
          <Signbutt2>
            <a
              href="https://clockify.me/linux-time-tracking"
              style={{ textDecoration: "none" }}
            >
              Linux
            </a>
          </Signbutt2>
        </div>
        <div>
          <img
            src="https://clockify.me/assets/images/app-mobile-new.png"
            alt=""
          />
          <h3>MOBILE APP</h3>
          <Signbutt2>
            <a
              href="https://clockify.me/android-time-tracking"
              style={{ textDecoration: "none" }}
            >
              Android
            </a>
          </Signbutt2>
          <Signbutt2>
            <a
              href="https://clockify.me/iphone-time-tracking"
              style={{ textDecoration: "none" }}
            >
              ios
            </a>
          </Signbutt2>
        </div>
        <div>
          <img src="https://clockify.me/assets/images/app-web-new.png" alt="" />
          <h3>BROWSER APP</h3>
          <Signbutt2>
            <a
              href="https://clockify.me/edge-time-tracking"
              style={{ textDecoration: "none" }}
            >
              Edge
            </a>
          </Signbutt2>
          <Signbutt2>
            <a
              href="https://clockify.me/chrome-time-tracking"
              style={{ textDecoration: "none" }}
            >
              Chrome
            </a>
          </Signbutt2>
          <Signbutt2>
            <a
              href="https://clockify.me/firefox-time-tracking"
              style={{ textDecoration: "none" }}
            >
              FireFox
            </a>
          </Signbutt2>
        </div>
      </div>
    </div>
  );
}

export { SixthPart };
