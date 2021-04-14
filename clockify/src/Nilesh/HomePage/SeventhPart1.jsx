import React, { useState } from "react"
import { SECONDPAGE_HOME_H2, SECONDPAGE_HOME_H1, SEVENTHPART1_DATA } from "./Homecss"
import axios from "axios";


function SeventhPart1() {

    const [data,setData] = useState([])

    const getdata = ()=> {
  
    axios
    .get(`http://localhost:3004/todo`)
    .then((res) => {
      console.log(res);

      setData(res.data);
    })
    .catch((err) => {});
    }

    React.useEffect(()=>{
        getdata()
    },[])

    console.log(data)

    return (
        <div>
            <SECONDPAGE_HOME_H1>
                Join millions who track time with Clockify
             </SECONDPAGE_HOME_H1>
            <img src="https://clockify.me/assets/images/four-seven-rating-stars.svg" alt="" />
            <SECONDPAGE_HOME_H2 style={{ fontSize: "13px" }}>
                4.7 CUSTOMER RATING<br />
                1,400+ REVIEWS

            </SECONDPAGE_HOME_H2>
            <br/>
            <br/>

            <div>
                <div>
                    {data?.map((item)=>
                    <SEVENTHPART1_DATA >
                        <div style={{marginLeft:"5px"}}>
                            <h3 style={{fontSize:"13px",color:" #3D4853",marginRight:"80px"}}>{item.titile}</h3>
                            <h4 style={{fontSize:"16px",marginRight:"80px"}}>{item.img}</h4>
                            <p style={{fontSize:"13px",color:"#718191",fontWeight:"bold"}}>{item.desc}</p>
                            <h5 style={{fontSize:"10px", color:"#718191", marginRight:"150px"}}> —  {item.name}</h5>
                        </div>
                    </SEVENTHPART1_DATA>
                    
                    )}

                </div>
            </div>


        </div>
    )
}

export { SeventhPart1 }