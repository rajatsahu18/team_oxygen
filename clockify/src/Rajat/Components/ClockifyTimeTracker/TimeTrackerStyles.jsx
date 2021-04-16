import styled from "styled-components"

export const TimeTrackerWrapper = styled.div`
    display: flex;
    border: 1px solid #CCD7DD;
    height: 70px;
    margin-top: -38%;
    margin-left: 18%;

    input {
        border: 1px solid #CCD7DD;
        outline: #CCD7DD;
        height: 35px;
        width: 55%;
        margin: 15px;
        padding-left: 10px;
    }

    button:nth-child(2) {
        border: none;
        background: none;
        outline: none;
        color: #03A9F4;
        cursor: pointer;
    }

    h2 {
        color: #CCD7DD;
        margin-left: 45px;
    }

    h3 {
        margin:20px 20px 20px 15px;
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