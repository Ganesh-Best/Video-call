import React from 'react'
import Typography from '@mui/material/Typography'

const Navbar = () => {
  return (
    <div style={{border:"2px solid white",textAlign:'center',padding:"1.5rem",borderRadius:".8rem",width:'350px' ,margin:'auto',backgroundColor:"black"}}>
         <Typography variant="h4" color="initial" sx={{color:'white'}} >Video Chat APP</Typography>
    </div>
  )
}

export default Navbar
