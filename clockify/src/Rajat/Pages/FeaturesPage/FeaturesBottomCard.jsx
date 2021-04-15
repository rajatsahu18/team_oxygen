import React from 'react'
import {FeatureWrapper2} from "./FeaturesStyles"

const FeaturesBottomCard = ({data}) => {

    const {image, 
        heading, 
        description
        }= data
    return (
        <FeatureWrapper2>
            <div>
                <h1>{heading}</h1>
                <p>{description}</p>
                <img src= {image} alt="Image1"/>
            </div>      
        </FeatureWrapper2>   
    )
}

export { FeaturesBottomCard }
