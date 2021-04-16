import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { VscThreeBars } from "react-icons/vsc";


import "./LoginNavbar.css";
import { SideBarData } from "./SideBarData";
import { Navbarlogin, Signbutt, Plinthird } from "./Navbar2css";
import { Themecontext } from "../Context/ThemeContextProvider";

function LoginNavbar22() {
  const [sidebar, setSidebar] = useState(false);

  const { theme, toogleTheme, currentTheme } = useContext(Themecontext);
  const showsidebar = () => {
    setSidebar(!sidebar);
  };
  return (
    <div>
      <Navbarlogin style={{ background: theme.bodyBackgroung }}>
        <Link to="#" className="menu-bars">
          <VscThreeBars size="30px" onClick={showsidebar} />
        </Link>

        <img
          src="https://clockify.me/assets/images/clockify-logo.svg"
          alt=""
          style={{ height: "30PX", marginTop: "3PX" }}
        />

        <button onClick={toogleTheme}>
          {currentTheme === "light" ? "DARK" : "LIGHT"}
        </button>
      </Navbarlogin>

      <nav
        className={sidebar ? `nav-menu.active` : `nav-menu`}
        style={{
          border: "1px solid whitesmoke",
          width: "250px",
          backgroundColor: theme.bodyBackgroung,
          color: theme.color,
          marginTop: "-1px"
        }}
      >
        <ul className="class-menu-items">
          {SideBarData.map((item, index) => {
            return (
              <div>
                <h4 style={{ color: theme.color }}> {item.Head}</h4>
                <li key={index} className={item.cName}>
                  <Link to={item.path} style={{ color: theme.color }}>
                    {item.icon}
                    <span style={{ marginLeft: "5px", color: theme.color }}>
                      {item.titile}
                    </span>
                  </Link>
                </li>
              </div>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

export { LoginNavbar22 };
