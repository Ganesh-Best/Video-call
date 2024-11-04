import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { SocketProvier } from './Context/SocketContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SocketProvier>
    <App />
    </SocketProvier>
  </StrictMode>,
)
