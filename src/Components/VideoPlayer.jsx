import React, { useContext } from 'react'
import Typography from '@mui/material/Typography'
import { SocketContext } from '../Context/SocketContext'
import Grid from '@mui/material/Grid2'



const VideoPlayer = () => {

   const {myStream,name,stream,callAccepted,callEnded, userStream} = useContext(SocketContext);

  return<div>
     <div style={{marginTop:'1.5rem'}} >
     <Grid container spacing={6} sx={{display:'flex',flexDirection:'row',justifyContent:'center'}} >
        
        { stream && (    
             <Grid size={{ xs: 12, md: 6 }} sx={{display:'flex', flexDirection:'column',alignItems:'center',justifyContent:'center',padding:'20px'}}>
            <Typography variant="h6" color="initial" sx={{color:'white'}}>{name||'Ganesh Singh Bisht'}</Typography>
            <video autoPlay muted playsInline ref={myStream} style={{width:'30rem',height:'auto' , border:'2px solid white'}}  />
            </Grid>
        ) }
        
        
       { callAccepted && !callEnded &&(<Grid size={{ xs: 12, md: 6 }} sx={{display:'flex', flexDirection:'column',alignItems:'center',justifyContent:'center',padding:'20px'}}>
            <Typography variant="h6" color="initial" sx={{color:'white'}}>{name||'Ganesh Singh Bisht'}</Typography>
            <video autoPlay muted playsInline  ref={userStream} style={{width:'30rem',height:'auto' , border:'2px solid white'}}  />
        </Grid>)  
       
      }
        
      </Grid>

        
     </div>
  </div>
}

export default VideoPlayer

