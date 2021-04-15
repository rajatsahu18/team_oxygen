import styled from "styled-components";

const DownloadWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    
    div:nth-child(1) {
        margin-bottom: 10%;
    }

    div:nth-child(2) {
        margin-top: 4%;
        margin-left: 3%;
    }

    div:nth-child(2) > div:nth-child(4) {
        margin-right: 44%;
    }

    h1 {
        color: #3D4853;
    }

    h4 {
        opacity: 0.7;
    }

    button{
        background-color: black;
        outline: none;
        cursor: pointer;
        height: 48px;
        width: 138px;
        border: 1px solid black;
        border-radius: 5px;
        margin: 5px;
    }

    button > img {
        height: 44px;
        width: 130px;
    }

    button: hover {
        transform: scale(1.1);
    }
`

const TextWrapper = styled.div`
    h1 {
        font-size: 40px;
        color: #3D4853;
        font-weight: 380;
    }

    p {
        font-size: 20px;
        color: #5A6B7B;
    }

    div:nth-child(3) > button {
        border: none;
        outline: none;
        cursor: pointer;
        color: #03A9F4;
        background: white;
        font-size: 19px;
    }

    div:nth-child(3) > button:hover {
        text-decoration: underline;
    }

    span {
        visibility: hidden;
        width: 180px;
        
        background: black;
        color: white;
        text-align: left;
        border-radius: 2px;
        padding: 10px 13px;
        position: absolute;
        z-index: 1;
    }

    span > div {
        margin-top: 5px;
        font-size: 10px;
        color: grey;
    }

    div:nth-child(4) > button {
        margin: 1.5% 4px 4px 4px;
        border: none;
        outline: none;
        height: 25px;
        background: #E1F5FE;
        color: #5A6B7B;
    }

    div:nth-child(5) > button {
        margin: 3px 4px 5% 4px;
        border: none;
         outline: none;
        height: 25px;
        background: #E1F5FE;
        color: #5A6B7B;
    }

    div:nth-child(4) > button: hover, div:nth-child(5) > button: hover {
        background: #03A9F4;
        color: white; 
    }

    div:nth-child(4) > button: hover span {
        visibility: visible;
    }

    div:nth-child(5) > button: hover span {
        visibility: visible;
    }
`

export {DownloadWrapper, TextWrapper}