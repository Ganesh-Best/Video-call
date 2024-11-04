import React, { useContext, useState } from 'react'
import Typography from '@mui/material/Typography' 
import Grid from '@mui/material/Grid2'
import TextField from '@mui/material/TextField'

import Button from '@mui/material/Button'
import {CopyToClipboard} from 'react-copy-to-clipboard';

import { SocketContext } from '../Context/SocketContext'
import Notification from './Notification'


const Option = ({children}) => {
   const [idToCall,setIdToCall] = useState();
  const {name ,setName, callAccepted ,callEnded  ,leaveCall , callUser  , me} = useContext(SocketContext);
  
    return (
    <div style={{ width:'30%',margin:'auto'}}>
     
     <Grid container sx={{ flexDirection:"row",textAlign:'center'}}  >
        
     <Grid size={{ xs:12,md:6}} sx={{ flexDirection:'column' , padding:'10px'}}>
                     
                     <Typography variant="h6" color="initial"> Account Info </Typography>
                     <TextField
                       id="name"
                       label="Name"
                       value={name}
                       onChange={e=>setName(e.target.value)}
                       
                       
                     /> <br/>
                     <CopyToClipboard text={me} >
                     <Button sx={{width:'210px', maxWidth:'100%'}}  variant="contained" color="primary" >
                        Copy ID
                     </Button>
                     </CopyToClipboard>
         
     </Grid>
     <Grid size={{ xs:12,md:6}} sx={{ flexDirection:'column',padding:'10px'}}>
     <Typography variant="h6" color="initial"> Make a Call </Typography>
                     <TextField
                       id="idToCall"
                       label="ID To Call"
                       
                       sx={{text:"white"}}
                       onChange={e=>setIdToCall(e.target.value)}
                       
            
                     /> <br/>
                  
                   
                      
                      { console.log(callAccepted,"call accepted status ") }

                    { callAccepted&&!callEnded ? ( 
                        <Button sx={{width:'210px',maxWidth:'100%',color:"white"}} onClick={leaveCall}  variant="contained" color="primary" >
                           Hang Up
                        </Button>
                        
                    ):(
                       <Button sx={{width:'210px',maxWidth:'100%' ,color:"white"}} onClick={()=>callUser(idToCall)}  variant="contained" color="primary" >
                          Call                          
                       </Button>
                      )}          
                     
         
     </Grid>        

      </Grid>
   {children}
            
    </div>
  )
}

export default Option

