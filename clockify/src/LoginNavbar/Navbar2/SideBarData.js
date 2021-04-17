import React from "react";

import { BsClock, BsBarChart, BsPerson } from "react-icons/bs";
import { FaRegCalendarAlt } from "react-icons/fa";
import { RiDashboardLine, RiTeamLine } from "react-icons/ri";
import { IoPricetagsOutline } from "react-icons/io5";
import { FiSettings } from "react-icons/fi";
import { CgNotes } from "react-icons/cg";


export const SideBarData = [
  {
    titile: "TIME TRACKER",
    path: "/timetracker",
    icon: <BsClock />,
    cName: "nav-text"
  },
  {
    titile: "CALENDER",
    path: "/calender",
    icon: <FaRegCalendarAlt />,
    cName: "nav-text"
  },
  {
    Head: "ANALYZE",
    titile: "DASHBOARD",
    path: "/dashboard",
    icon: <RiDashboardLine />,
    cName: "nav-text"
  },
  {
    titile: "REPORTS",
    path: "/reports",
    icon: <BsBarChart />,
    cName: "nav-text"
  },
  {
    Head: "MANAGE",
    titile: "PROJECTS",
    path: "/projects",
    icon: <CgNotes />,
    cName: "nav-text"
  },
  {
    titile: "TEAM",
    path: "/team",
    icon: <RiTeamLine />,
    cName: "nav-text"
  },
  {
    titile: "CLIENTS",
    path: "/clients",
    icon: <BsPerson />,
    cName: "nav-text"
  },
  {
    titile: "TAGS",
    path: "/tags/:id/:username",
    icon: <IoPricetagsOutline />,
    cName: "nav-text"
  },
  {
    titile: "SETTING",
    path: "/setting/:id/:username",
    icon: <FiSettings />,
    cName: "nav-text"
  }
];


export const SideBarData22 = [
  {
    titile: "DARK",
    icon: <BsClock />,
    cName: "nav-text"
  },
  {
    titile: "LOGOUT",
    icon: <BsClock />,
    cName: "nav-text"
  }
]
