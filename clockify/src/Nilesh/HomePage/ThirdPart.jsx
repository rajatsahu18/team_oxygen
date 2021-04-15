import React, { useState } from "react";
import { DarkmodeButton, SECONDPARTSC } from "./Homecss";

function Thirdpart() {


  const [show, setshow] = useState(false);





  return (

    <div>
      <div >
        <img
          src="https://clockify.me/assets/images/customers-light-gray-3.svg"
          alt=""
        />


        {show ? <SECONDPARTSC
          src="https://clockify.me/assets/images/time-tracker-dark-screenshot.svg"
          alt=""
        /> : <SECONDPARTSC
          src="https://clockify.me/assets/images/time-tracker-screenshot.svg"
          alt=""
        />
        }

       
      </div>
      <DarkmodeButton
        
        style={{textAlign:"center",padding:"4px"}}
        onClick={() => setshow(!show)}>
          {!show ? "Dark" : "Light"}
          
        </DarkmodeButton>
    </div>
  );
}

export { Thirdpart };
