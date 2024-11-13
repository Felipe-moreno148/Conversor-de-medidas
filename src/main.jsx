import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import SPA from './SPA/SPA'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SPA />
  </StrictMode>,
)
