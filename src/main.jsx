import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

//CSS
import './css/styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';

//Componentes
import LandingPage from './LandingPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LandingPage />
  </StrictMode>,
)
