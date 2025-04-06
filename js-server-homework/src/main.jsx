import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import { App } from './App.jsx'
// import { App } from './AppTodosJSONServer'
import { App } from './AppFireBase'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
