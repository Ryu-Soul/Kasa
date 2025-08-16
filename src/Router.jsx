import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/Error'
import LocationsPage from './pages/LocationsPage'
import Header from './components/global/Header'
import Footer from './components/global/Footer'

function AppRouter() {
  return (
    <div className='page'>
      <Header />
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/locationPage/:id" element={<LocationsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        </>
      <Footer />
    </div>
  )
}

export default AppRouter