import React, { useContext } from 'react'
import Typography from '@mui/material/Typography'
import { SocketContext } from '../Context/SocketContext'
import Button from '@mui/material/Button'

const Notification = () => {
  const { call ,callEnded,callAccepted ,answerCall} =  useContext(SocketContext)
  return <>
    { !callAccepted &&call.isReceived && !callEnded &&(
   
      <div style={{display:"flex",flexDirection:"row",justifyContent:"space-around"}}> 

      <Typography variant="h6"  sx={{color:'white',padding:"3px"}}>
         
         {call.name + "  is Calling " } 
         </Typography>

         <Button variant="contained" color="primary" onClick={answerCall}>
          Answer Call :  
         </Button> 
    </div>

    ) }
    
    </>
  
}

export default Notification
