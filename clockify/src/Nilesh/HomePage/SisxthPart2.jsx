import React from "react"
import {FIFTH_HOME_AINH4, FIFTH_HOME_H3ONE, FIFTH_HOME_H4ONE } from "./Homecss"


function SixthPart2() {
    return (
        <div style={{marginLeft:"100px"}}>

            <div style={{ display: "flex", marginLeft: "16%" }}>

                <div>
                    <img src="https://clockify.me/assets/images/free-forever-clock-4.svg" alt="" style={{ marginRight: "90px", height: "450px" }} />

                </div>
                <div style={{ marginTop: "30px", marginLeft: "30px", width: "600px" }}>
                    <FIFTH_HOME_H3ONE style={{fontSize:"54px",color:"#03A9F4"}}>FREE <br/>FOREVER!</FIFTH_HOME_H3ONE>
                    <FIFTH_HOME_H4ONE><FIFTH_HOME_AINH4>✓</FIFTH_HOME_AINH4> Unlimited users</FIFTH_HOME_H4ONE>
                    <FIFTH_HOME_H4ONE><FIFTH_HOME_AINH4>✓</FIFTH_HOME_AINH4>  Unlimited tracking</FIFTH_HOME_H4ONE>
                    <FIFTH_HOME_H4ONE><FIFTH_HOME_AINH4>✓</FIFTH_HOME_AINH4> Unlimited projects</FIFTH_HOME_H4ONE>
                 
                </div>


            </div>
        </div>
    )
}

export { SixthPart2 }