import React from 'react'
import {DownloadWrapper} from "./DownloadStyles"

const DownloadCard = ({data}) => {

    const {image, heading, subHeading, image_1, image_2, image_3 } = data
    return (
        <DownloadWrapper>
            <div>
                <img src= {image} alt="Image0"/>
            </div>
            <div>
                <h1>{heading}</h1>
                <h4>{subHeading}</h4>
                <div>
                    <button><img src= {image_1} alt="Image1"/></button> 
                    <button><img src= {image_2} alt="Image2"/></button>
                </div>
            </div>
        </DownloadWrapper>
        
    )
}

export { DownloadCard }
