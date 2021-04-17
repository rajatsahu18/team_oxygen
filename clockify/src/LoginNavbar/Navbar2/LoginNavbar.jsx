import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { VscThreeBars } from "react-icons/vsc";
import { BsFillBellFill, BsQuestionCircle } from "react-icons/bs";

import "./LoginNavbar.css";
import { SideBarData } from "./SideBarData";
import { Navbarlogin, SignbuttLogin } from "./Navbar2css";
import { Themecontext } from "../Context/ThemeContextProvider";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { logoutSuccess } from "../../Pooran/Redux/Login/action";

function LoginNavbar22() {
  var obj12 = {
    optionsd: ""
  };

  const [query, setquery] = useState(obj12);
  const {id, username} = useSelector(state => state.login, shallowEqual)
  const dispatch = useDispatch()
  const { optionsd } = query;

  const handlechange = (e) => {
    const { name, value } = e.target;

    setquery({ ...query, [name]: value });
  };

  const [sidebar, setSidebar] = useState(true);
  const { theme, toogleTheme } = useContext(Themecontext);
  const showsidebar = () => {
    setSidebar(!sidebar);
  };

  const depts = [
    {
      value: "",
      name: "Dark"
    },
    {
      value: "LOGOUT",
      name: "Logout"
    }
  ];

  const handleLogout = () => {
    dispatch(logoutSuccess())
  }

  return (
    <div>
      <Navbarlogin
        style={{ background: theme.bodyBackgroung, color: theme.color }}
      >
        <Link to="#" className="menu-bars">
          <VscThreeBars size="30px" onClick={showsidebar} />
        </Link>
        <img
          src="https://clockify.me/assets/images/clockify-logo.svg"
          alt=""
          style={{ height: "30PX", marginTop: "3PX", marginLeft: "10px" }}
        />
        <div style={{ marginLeft: "54%"}} >
          {`${username} workspace`}
        </div>
        <SignbuttLogin
          style={{ marginLeft: "10px", background: theme.bodyBackgroung, width: "80px" }}
        >
          UPGRADE
        </SignbuttLogin>
        <BsFillBellFill
          style={{ marginLeft: "20px", color: theme.color, border: "1px dotted #CCD7DD", padding: "1%", borderTop: "none", borderBottom: "none"}}
        ></BsFillBellFill>
        <BsQuestionCircle style={{color: theme.color, border: "1px dotted #CCD7DD", padding: "1%", borderTop: "none", borderBottom: "none" }} />
        <div style={{ marginLeft: "20px" }}></div>
        <img
          src="https://www.twenty10.org.au/wp-content/uploads/2018/06/avatar-1577909_640.png"
          alt=""
          style={{ height: "25px", borderRadius: "15px" }}
        />
        <div style={{ marginLeft: "5px" }}>
          <select
            onClick={toogleTheme}
            value={optionsd}
            name="optionsd"
            onChange={handlechange}
          >
            {depts.map((de) => (
              <option key={de.value}>{de.name}</option>
            ))}
          </select>
        </div>
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
                  <Link to = {`${item.path}/${id}/${username}`} style={{ color: theme.color }}>
                    {item.icon}
                    <span style={{ color: theme.color }}>{item.titile}</span>
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
