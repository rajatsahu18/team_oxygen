import React from 'react'
import { TimeTrackerWrapper } from './TimeTrackerStyles'
import {AiOutlinePlusCircle} from "react-icons/ai"
import {BsTag} from "react-icons/bs"
import {BiDollar} from "react-icons/bi"

export const TimeTracker = () => {
    return (
        <TimeTrackerWrapper>
            <input type="text" placeholder = " What are you working on?"/>
            <button><AiOutlinePlusCircle size = "20px"/> Project </button>
            <h2><BsTag/></h2>
            <h2><BiDollar/></h2>
            <h3>00:00:00</h3>
            <button>START</button>
        </TimeTrackerWrapper>
    )
}
