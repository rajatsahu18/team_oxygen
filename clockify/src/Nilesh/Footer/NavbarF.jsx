import React from "react"
import { Link } from "react-router-dom"
import { LastPart } from "../HomePage/LastPart"

import { FOOTER_HOME_H3F, Plinkone2 } from "./FooterCss"


function NavbarF() {
    return (
        <div style={{ backgroundColor: "white" }}>

            <div style={{ display: "flex" }}>
                <div style={{ marginLeft: "15%" }}>
                    <div style={{ marginTop: "22px" }}>
                        <Link to={`/`} style={{ textDecoration: "none" }}>
                            <img src="https://clockify.me/assets/images/clockify-logo.svg" alt="" />
                        </Link>

                    </div>

                    <div>
                        <Link to={`/login`} style={{ textDecoration: "none" }}>
                            <Plinkone2>LOG IN</Plinkone2>
                        </Link>

                    </div>

                    <div>
                        <Link to={`/signup`} style={{ textDecoration: "none" }}>
                            <Plinkone2>SIGN UP</Plinkone2>
                        </Link>

                    </div>
                </div>
                <div style={{ marginLeft: "17%" }}>
                    <div style={{ marginTop: "30px" }}>
                        <FOOTER_HOME_H3F>PRODUCT</FOOTER_HOME_H3F>
                    </div>

                    <div>

                        <Link to={`/features`} style={{ textDecoration: "none" }}>
                            <Plinkone2>Features</Plinkone2>
                        </Link>
                    </div>
                    <div>
                        <Link to={`/downloads`} style={{ textDecoration: "none" }}>
                            <Plinkone2>Download</Plinkone2>
                        </Link>
                    </div>

                    <div>
                        <Link to={`/intergrations`} style={{ textDecoration: "none" }}>
                            <Plinkone2>Integration</Plinkone2>
                        </Link >
                    </div>

                    <div>
                        <Link to={`/extras`} style={{ textDecoration: "none" }}>
                            <Plinkone2>Extras</Plinkone2>
                        </Link>
                    </div>

                </div>
                <div style={{ marginLeft: "8%" }}>
                    <div style={{ marginTop: "30px" }}>
                        <FOOTER_HOME_H3F>Soluation</FOOTER_HOME_H3F>
                    </div>

                    <div>
                        <Link to={`/timeclock`} style={{ textDecoration: "none" }}>
                            <Plinkone2>Time Clock</Plinkone2>
                        </Link>
                    </div>

                    <div>
                        <Link to={`/timesheet`} style={{ textDecoration: "none" }}>
                            <Plinkone2>TimeSheet</Plinkone2>
                        </Link>
                    </div>

                    <div>

                        <Link to={`/timecalculator`} style={{ textDecoration: "none" }}>
                            <Plinkone2>Time Calculator</Plinkone2>
                        </Link >
                    </div>

                    <div>
                        <Link to={`/selfhoisting`} style={{ textDecoration: "none" }}>
                            <Plinkone2>Self-hoisting</Plinkone2>
                        </Link>

                    </div>


                </div>
                <div style={{ marginLeft: "8%" }}>
                    <div style={{ marginTop: "30px" }}>
                        <FOOTER_HOME_H3F>Company</FOOTER_HOME_H3F>
                    </div>

                    <div>
                        <Link to={`/aboutus`} style={{ textDecoration: "none" }}>
                            <Plinkone2>About Us</Plinkone2>
                        </Link>
                    </div>
                    <div>
                        <Link to={`/Customers`} style={{ textDecoration: "none" }}>
                            <Plinkone2>Customer</Plinkone2>
                        </Link>
                    </div>

                    <div>

                        <Link to={`/resources`} style={{ textDecoration: "none" }}>
                            <Plinkone2>Resources</Plinkone2>
                        </Link >
                    </div>

                    <div>

                        <Link to={`/blog`} style={{ textDecoration: "none" }}>
                            <Plinkone2>Blog</Plinkone2>
                        </Link>
                    </div>



                </div>
                <div style={{ marginLeft: "8%" }}>
                    <div style={{ marginTop: "30px" }}>
                        <FOOTER_HOME_H3F>Support</FOOTER_HOME_H3F>
                    </div>

                    <div>
                        <Link to={`/help`} style={{ textDecoration: "none" }}>
                            <Plinkone2>Help</Plinkone2>
                        </Link>
                    </div>

                    <div>

                        <Link to={`/tutorials`} style={{ textDecoration: "none" }}>
                            <Plinkone2>Tutorials</Plinkone2>
                        </Link>
                    </div>

                    <div>
                        <Link to={`/api`} style={{ textDecoration: "none" }}>
                            <Plinkone2>Api</Plinkone2>
                        </Link>
                    </div>

                    <div>
                        <Link to={`/contact`} style={{ textDecoration: "none" }}>
                            <Plinkone2>Contact</Plinkone2>
                        </Link >
                    </div>

                </div>
                
            </div>
            <br/>
            <br/>
            <LastPart />
        </div>

    )
}


export { NavbarF }