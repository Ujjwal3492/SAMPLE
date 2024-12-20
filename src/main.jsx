import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter,Routes,Route } from 'react-router'
import Hero from './components/hero.jsx'
import Marketplace from './components/Marketplace.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hero/>} />
        <Route path="/dashboard" element={<App/>}/>
        <Route path="/Marketplace" element={<Marketplace/>}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
