import styled from "styled-components";

const FeatureWrapper = styled.div`

    h1 {
        font-size: 40px;
        color: #3D4853;
        font-weight: 380;
    }

    p {
        font-size: 20px;
        color: #5A6B7B;
    }

    div:nth-child(4) {
        display: flex; 
        flex-direction: row;
        margin-left: 15%;
        gap:17%;
    }

    div:nth-child(5) {
        display: flex; 
        flex-direction: row;
        margin-left: 15%;
        gap:5%;
    }

    h3 {
        color: #3D4853; 
        font-weight: 380;     
    }

    h4 {
        color: #5A6B7B;
        font-weight: 380;
        margin-bottom: 10%;
    }
`

const FeatureWrapper2 = styled.div`
    img{
        margin-bottom: 10%;
    }

    h1 {
        font-size: 40px;
        color: #3D4853;
        font-weight: 380;
    }

    p {
        font-size: 20px;
        color: #5A6B7B;
    }
`
export {FeatureWrapper, FeatureWrapper2}