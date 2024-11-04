import { createContext ,useEffect, useRef, useState } from "react";
import {io} from 'socket.io-client';
import { backend } from "./backend";
import  Peer from 'simple-peer';

export const SocketContext = createContext(null);

const  socket =  io(backend);

export const SocketProvier = ({children}) =>{
   
    const [stream , setStream] = useState(null);
    const [me,setMe] = useState()
    const [call ,setCall] = useState({});
    const [callAccepted,setCallAccepted] = useState(false);
    const [callEnded,setCallEnded] = useState(false);
    const [name,setName] = useState('G S Bisht');

    const myStream  = useRef(null);
    const userStream = useRef(null);
    const connectionRef = useRef();
    
    
      
    useEffect(() => {
           
        navigator.mediaDevices.getUserMedia({video:true,audio:true}).then((currentStream)=>{
              setStream(currentStream);
             
              if(myStream.current)
              myStream.current.srcObject = currentStream;

        })


        socket.on('me',({id})=>{
            setMe(id)
            console.log('My id',id)
        })

        socket.on('callUser',({from,name ,signal,})=>{
          setCall({isReceived:true,from , name,signal})
        })

        
    }, []);

    const answerCall = ()=>{
        
         setCallAccepted(true);
        
        const peer =   new Peer({initiator:false,trickle:false,stream})

        peer.on('signal',(data)=>{
            socket.emit('answerCall',{signal:data,to:call.from})
           
        })

        peer.on('stream',(currentStream)=>{
            
                if(userStream.current){

                    userStream.current.srcObject = currentStream;
               
                
                }
            
            })

        peer.signal(call.signal);


        connectionRef.current = peer;

        console.log('call accepted status:',callAccepted,callEnded)

    }

    const callUser= (id)=>{

             

            const peer   =   new Peer({initiator:true,trickle:false,stream})

            peer.on('signal',(data)=>{

                  socket.emit('callUser',({userToCall:id,from:me,name,signalData:data}))

                  
            })

            peer.on('stream',(currentStream)=>{
               
               if(userStream.current) 
    
                   userStream.current.srcObject = currentStream;
        
            })

            socket.on('callAccepted',({signal})=>{
                setCallAccepted(true);

                console.log('call accpeted event run')


              peer.signal(signal);

              



            })

            connectionRef.current = peer;

    }

    const leaveCall = ()=>{
          
         setCallEnded(true);
         connectionRef.current.destroy(); 

         window.location.reload()
    
    }

    return  <SocketContext.Provider value={{stream,me,call,myStream,userStream,name,setName,userStream,callUser,answerCall,leaveCall,callAccepted,callEnded }} >
             {children}
    </SocketContext.Provider>


}