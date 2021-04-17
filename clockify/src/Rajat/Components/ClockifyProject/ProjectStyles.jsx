import styled from "styled-components";

export const ProjectWrapper = styled.div`
    background-color: white;
    margin-top: -43%;
    width: 80%;
    margin-left: 18%;
    position: absolute;

    h2 {
        margin-left: -2%;
        color: #666666;
    }

    div:nth-child(1) {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin:20px;
    }

    div:nth-child(1) > button {
        height: 40px;
        width: 17%;
        margin-top: 20px;
        margin-right: -18px; 
        background: white;
        color: #03A9F4;
        border: 1px solid #03A9F4;
        outline: none;
        cursor: pointer;
    }

    div:nth-child(2) {
        border: 1px solid #CCD7DD;
        display: flex;
        flex-direction: row;
        height: 75px;
    }

    div:nth-child(2) > h4 {
        margin: 28px 15px 25px 5px;
        color: #9999A6;
    }

    div:nth-child(2) > select {
        height: 46px;
        width: 90px;
        margin: 15px 0 15px 0 ;
        border: none;
        background: white;
        color: #666666;
        border-right: 1px dotted #CCD7DD;
        border-left: 1px dotted #CCD7DD;
    }

    h1 {
        margin-left: 1%;
        margin-right:1%;
        color: #CCD7DD;
    }

    div:nth-child(2) > input {
        height: 40px;
        width: 48%;
        margin: 15px 15px 15px 0 ;
        padding-left: 5px;
        border: 1px solid #CCD7DD;
        outline: none;
    }

    div:nth-child(2) > button {
        height: 42px;
        width: 8.5%;
        margin-top: 16px;
        background: #03A9F4;
        color: white;
        border: 1px solid #03A9F4;
        outline: none;
        cursor: pointer;
    }
`
export const ProjectDataWrapper = styled.div``