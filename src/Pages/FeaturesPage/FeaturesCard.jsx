import React from 'react'
import {FeatureWrapper} from "./FeaturesStyles"

const FeaturesCard = ({data}) => {

    const {image, 
        heading, 
        description, 
        subHeading_1, 
        subHeadingDesc_1, 
        subHeading_2, 
        subHeadingDesc_2, 
        subHeading_3, 
        subHeadingDesc_3, 
        subHeading_4, 
        subHeadingDesc_4 }= data
    return (
        <FeatureWrapper>
            <div>
                <h1>{heading}</h1>
                <p>{description}</p>
                <img src= {image} alt="Image1"/>             
                <div>
                    <h3>{subHeading_1}</h3>
                    <h3>{subHeading_2}</h3>
                    <h3>{subHeading_3}</h3>
                    <h3>{subHeading_4}</h3>
                </div>
                <div>
                    <h4>{subHeadingDesc_1}</h4>                      
                    <h4>{subHeadingDesc_2}</h4>
                    <h4>{subHeadingDesc_3}</h4>
                    <h4>{subHeadingDesc_4}</h4>
                </div>                              
            </div>      
        </FeatureWrapper>   
    )
}

export { FeaturesCard }
