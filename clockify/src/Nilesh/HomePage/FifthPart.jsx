import React from "react"
import { Link } from "react-router-dom"
import { FIFTH_HOME_H3ONE, FIFTH_HOME_H4ONE, FIFTH_HOME_AINH4, SECONDPAGE_HOME_BUTTON1 } from "./Homecss"



function FifthPage() {
    return (
        <div >

            <div style={{ display: "flex", marginLeft: "16%" }}>
                <div style={{ marginTop: "60px", marginLeft: "30px", width: "600px" }}>
                    <FIFTH_HOME_H3ONE>TIMEKEEPING</FIFTH_HOME_H3ONE>
                    <FIFTH_HOME_H4ONE><FIFTH_HOME_AINH4 >✓</FIFTH_HOME_AINH4> Track hours using a timer</FIFTH_HOME_H4ONE>
                    <FIFTH_HOME_H4ONE><FIFTH_HOME_AINH4 >✓</FIFTH_HOME_AINH4> Log time in a timesheet</FIFTH_HOME_H4ONE>
                    <FIFTH_HOME_H4ONE><FIFTH_HOME_AINH4 >✓</FIFTH_HOME_AINH4> Manage time in calendar</FIFTH_HOME_H4ONE>
                    <FIFTH_HOME_H4ONE><FIFTH_HOME_AINH4 >✓</FIFTH_HOME_AINH4> Categorize time by project</FIFTH_HOME_H4ONE>


                </div>
                <div>
                    <img src="https://clockify.me/assets/images/feature-time-tracker.svg" alt="" style={{ marginRight: "90px"  ,height:"400px"}} />

                </div>
            </div>

            <br />  <br />  <br /><br />

            <div style={{ display: "flex", marginLeft: "16%" }}>

                <div>
                    <img src="https://clockify.me/assets/images/feature-time-report.svg" alt="" style={{ marginRight: "90px" ,height:"450px" }} />

                </div>
                <div style={{ marginTop: "100px", marginLeft: "30px", width: "600px" }}>
                    <FIFTH_HOME_H3ONE>TIMEKEEPING</FIFTH_HOME_H3ONE>
                    <FIFTH_HOME_H4ONE><FIFTH_HOME_AINH4>✓</FIFTH_HOME_AINH4> Track hours using a timer</FIFTH_HOME_H4ONE>
                    <FIFTH_HOME_H4ONE><FIFTH_HOME_AINH4>✓</FIFTH_HOME_AINH4> Log time in a timesheet</FIFTH_HOME_H4ONE>
                    <FIFTH_HOME_H4ONE><FIFTH_HOME_AINH4>✓</FIFTH_HOME_AINH4> Manage time in calendar</FIFTH_HOME_H4ONE>
                    <FIFTH_HOME_H4ONE><FIFTH_HOME_AINH4>✓</FIFTH_HOME_AINH4> Categorize time by project</FIFTH_HOME_H4ONE>


                </div>

            </div>

            <br />  <br />  <br /><br />
            <div style={{ display: "flex", marginLeft: "16%" }}>
                <div style={{ marginTop: "100px", marginLeft: "30px", width: "600px" }}>
                    <FIFTH_HOME_H3ONE>TEAM ACTIVITY</FIFTH_HOME_H3ONE>
                    <FIFTH_HOME_H4ONE><FIFTH_HOME_AINH4 >✓</FIFTH_HOME_AINH4> Invite whole team</FIFTH_HOME_H4ONE>
                    <FIFTH_HOME_H4ONE><FIFTH_HOME_AINH4 >✓</FIFTH_HOME_AINH4>  Set hourly rates</FIFTH_HOME_H4ONE>
                    <FIFTH_HOME_H4ONE><FIFTH_HOME_AINH4 >✓</FIFTH_HOME_AINH4> See current activity</FIFTH_HOME_H4ONE>
                    <FIFTH_HOME_H4ONE><FIFTH_HOME_AINH4 >✓</FIFTH_HOME_AINH4> Integrate with other apps</FIFTH_HOME_H4ONE>



                </div>
                <div>
                    <img src="https://clockify.me/assets/images/feature-team-activity.svg" alt="" style={{ marginRight: "90px" ,height:"450px"}} />

                </div>
            </div>

            <br />  <br />  <br /><br />

            <Link to={`/features`} style={{ textDecoration: "none" }}>
            <SECONDPAGE_HOME_BUTTON1>
                
                SEE ALL FEATURES
            </SECONDPAGE_HOME_BUTTON1>
                    </Link>
  
        </div>
    )
}

export { FifthPage }