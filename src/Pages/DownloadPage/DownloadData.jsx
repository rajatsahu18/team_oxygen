import React from 'react'
import { DownloadCard } from './DownloadCard'

const array = [
    {
        image: "https://clockify.me/assets/images/clockify-browser-app-2.png",
        heading: "Browser extension",
        subHeading: "Download and track time from your computer.",
        image_1: "https://clockify.me/assets/images/chrome-store.svg",        
        image_2: "https://clockify.me/assets/images/firefox-store.svg"
    },
    {
        image: "https://clockify.me/assets/images/clockify-desktop-app-2.png",
        heading: "Desktop app",
        subHeading: "Download and track time from your computer.",
        image_1: "https://clockify.me/assets/images/download-app-linux.svg",        
        image_2: "https://clockify.me/assets/images/download-app-windows.svg"
    },
    {
        image: "https://clockify.me/assets/images/clockify-mobile-app-2.png",
        heading: "Mobile app",
        subHeading: "Download and track time from your phone.",
        image_1: "https://clockify.me/assets/images/app-store-ios.svg",        
        image_2: "https://clockify.me/assets/images/play-store-android.svg"
    }
]
const DownloadData = () => {
    return (
        <div>
            {array.map((item, i) => (
                <DownloadCard data = {item} />
            ))}
        </div>
    )
}

export {DownloadData}
