import React from 'react'
import { Inject, ScheduleComponent, Day, Week, WorkWeek, Month, Schedule } from "@syncfusion/ej2-react-schedule"
export const Calender = () => {
    return ( 
   <div>
       
    <ScheduleComponent
     style={{width:"80%",
     marginLeft:"17%",
     marginTop:"-42%",
     height:"700px",
    
    }}
     
     >
           <Inject services={[Day, Week, WorkWeek, Month]} />
    </ScheduleComponent>
   </div>
    )
}
