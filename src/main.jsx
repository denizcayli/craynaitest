import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { BASE } from './lib/paths.js'

// Order matches the original site: Tailwind, Swiper, then the theme overrides.
import './styles/index.css'
import 'swiper/css/bundle'
import './styles/theme.css'
import './styles/talep.css'
import './styles/prose.css'
import './styles/post-row.css'
import './styles/faq.css'
import './styles/mullion.css'
import './styles/menu.css'
import './styles/glass-button.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename={BASE || '/'}>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
