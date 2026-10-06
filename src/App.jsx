import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Preloader from './components/Preloader.jsx'
import Home from './pages/Home.jsx'
import Talep from './pages/Talep.jsx'
import Hakkimizda from './pages/Hakkimizda.jsx'
import Icerikler from './pages/Icerikler.jsx'
import IcerikDetay from './pages/IcerikDetay.jsx'
import Hizmetler from './pages/Hizmetler.jsx'
import Hizmet from './pages/Hizmet.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  return (
    <>
      <Preloader />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/talep" element={<Talep />} />
          <Route path="/hakkimizda" element={<Hakkimizda />} />
          <Route path="/icerikler" element={<Icerikler />} />
          <Route path="/icerikler/:slug" element={<IcerikDetay />} />
          <Route path="/hizmetler" element={<Hizmetler />} />
          <Route path="/hizmetler/:slug" element={<Hizmet />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}
