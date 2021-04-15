import React from 'react'
import {TextWrapper} from "./DownloadStyles"


const DownloadText = () => {
    return (
        <TextWrapper>
            <h1>Time tracking apps </h1>
            <p>Install Clockify and track time from anywhere — everything is synced online.</p>
            <div>
                <button>Chrome</button>
                <button>Firefox</button>
                <button>Edge</button>
                <button>Mac</button>
                <button>Windows</button>
                <button>Linux</button>
                <button>Android</button>
                <button>iOS</button>
            </div>
            <div>
                <button>Idle detection <span>Stop timer from tracking time <br/> you spent away from your <br/> computer. <br/> <div>Mac, Chrome</div>  </span></button>
                <button>Auto start/stop <span>Automatically start or stop the <br/>timer when you turn on your <br/>computer or browser. <br/> <div>Mac, Chrome</div></span> </button>
                <button>Offline mode <span>Track time even while offline. <br/> <div>Mac, Windows, Linux, Android, iOS</div></span> </button>
                <button>Default project <span>Automatically preselect some <br/> project when starting the timer.<div>Mac, Windows, Linux, Android, iOS</div> </span></button>
            </div>
            <div>
                <button>Reminders <span>Get notification when you <br/> forget to start the timer. <br/> <div>Mac, Chrome</div> </span> </button>
                <button>Promodoro timer <span>Get notification when it's time <br/> to take a break. <br/> <div>Mac, Chrome</div></span> </button>
                <button>Auto tracker <span>Track how much time you <br/> spend on other apps on your <br/> computer. <br/> <div>Mac, Chrome</div></span> </button>
            </div>
        </TextWrapper>
    )
}

export {DownloadText}
