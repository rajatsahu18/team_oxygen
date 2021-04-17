import styled from "styled-components"

export const TimeTrackerWrapper = styled.div`
    display: flex;
    border: 1px solid #CCD7DD;
    height: 70px;
    margin-top: -40%;
    margin-left: 18%;
    margin-right: 1%;

    input {
        border: 1px solid #CCD7DD;
        outline: #CCD7DD;
        height: 35px;
        width: 45%;
        margin: 15px;
        padding-left: 10px;
    }

    div > button:nth-child(1) {
        border: none;
        background: none;
        outline: none;
        color: #03A9F4;
        cursor: pointer;
    }

    div > select:nth-child(1) {
        margin-top: 20px;
        width: 120px;
        height: 30px;
    }

    h2 {
        color: #CCD7DD;
        margin-left: 30px;
        margin-top: 23px;
    }
    
 
    h3 {
        margin:20px 20px 20px 10px;
        font-size: 25px;
    }

    button {
        border: 1px solid #03A9F4;
        outline: none;
        width: 120px;
        margin: 12px 0;
        background: #03A9F4;
        color: white;
        font-size: 16px;
        cursor: pointer;
    }
`
