import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/Error'
import LocationsPage from './pages/LocationsPage'

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/locationPage/:id" element={<LocationsPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default AppRouter