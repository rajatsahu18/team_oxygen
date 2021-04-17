
import React, { useContext, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { VscThreeBars } from "react-icons/vsc";
import { BsFillBellFill, BsQuestionCircle } from "react-icons/bs";

import "./LoginNavbar.css";
import { SideBarData, SideBarData22 } from "./SideBarData";
import { Navbarlogin, SignbuttLogin } from "./Navbar2css";
import { Themecontext } from "../Context/ThemeContextProvider";
import { BiUserCircle } from "react-icons/bi";

import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { logoutSuccess } from "../../Pooran/Redux/Login/action";

function LoginNavbar22() {

  var obj1 = {

    department: "",

  };
  const [query, setquery] = useState(obj1);
  const [sidebar, setSidebar] = useState(true);

  const { id, username } = useSelector(state => state.login, shallowEqual)
  const { department } = query

  const { theme, settheme } = useContext(Themecontext);

  const dispatch = useDispatch()
  const [sidebar2, setSidebar2] = useState(false);

  const showsidebar2 = () => {
    setSidebar2(!sidebar2);
  };


  const handlechange = (e) => {
    const { name, value } = e.target;

    setquery({ ...query, [name]: value });




    if (value == "dark") {
      settheme(value)
    }
    else if (value == "logout") {

      dispatch(logoutSuccess())
    }


  }



  const showsidebar = () => {
    setSidebar(!sidebar);
  };



  const depts = [
    {
      value: "DARK",
      name: "dark"
    },
    {
      value: "LOGOUT",
      name: "logout"
    },
  ]




  return (
    <div>

      <Navbarlogin
        style={{ backgroundColor: theme.bodyBackground, color: theme.color }}
      >
        <Link to="#" className="menu-bars">
          <VscThreeBars size="30px" onClick={showsidebar} />
        </Link>
        <img
          src="https://clockify.me/assets/images/clockify-logo.svg"
          alt=""
          style={{ height: "30PX", marginTop: "3PX", marginLeft: "10px" }}
        />

        <div style={{ marginLeft: "54%" }} >
          {`${username} workspace`}
        </div>
        <SignbuttLogin
          style={{ marginLeft: "10px", background: theme.bodyBackgroung, width: "80px" }}
        >
          Upgrade
        </SignbuttLogin>
        <BsFillBellFill
          style={{ marginLeft: "20px", color: theme.color, border: "1px dotted #CCD7DD", padding: "1%", borderTop: "none", borderBottom: "none" }}
        ></BsFillBellFill>
        <BsQuestionCircle style={{ color: theme.color, border: "1px dotted #CCD7DD", padding: "1%", borderTop: "none", borderBottom: "none" }} />
        <div style={{ marginLeft: "20px" }}></div>

        <div style={{ marginLeft: "5px" }}>

          <div>
          </div>

          <div style={{ display: "flex" }}>

            < BiUserCircle size="30px" />
            <select onChange={handlechange}>
              <option disabled selected value>select an option</option>
              {depts.map((de) => (
                <option key={de.value}>{de.name}</option>
              ))}
            </select>


          </div>

        </div>
      </Navbarlogin>


      <nav
        className={sidebar ? `nav-menu.active` : `nav-menu`}
        style={{
          border: "1px solid whitesmoke",
          width: "250px",
          backgroundColor: theme.bodyBackground,
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
                  <Link to={`${item.path}/${id}/${username}`} style={{ color: theme.color }}>
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

