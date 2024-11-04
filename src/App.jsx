import { useState } from 'react'
import { Typography } from '@mui/material'
import VideoPlayer from './Components/VideoPlayer'
import Option from './Components/Options'
import Navbar from './Components/Navbar'
import Notification from './Components/Notification'
function App() {


  return (
    <>
        <div >
             <Navbar/>
             <VideoPlayer/>
             <Option>
              <Notification/>
            </Option>
             
            
    </div>

    </>
  )
}

export default App
