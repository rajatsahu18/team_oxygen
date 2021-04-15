import React from 'react'
import { AppAlignment } from '../../../Nilesh/Navbar/Navbarcss'
import { DownloadData } from './DownloadData'
import { DownloadText } from './DownloadText'

const Download = () => {
    return (
        <AppAlignment>
            <DownloadText/>
            <DownloadData/>
        </AppAlignment>
    )
}

export {Download}
