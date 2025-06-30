import Header from '../components/Header'
import MainHome from '../components/Mainhome'
import Footer from '../components/Footer'
import '../styles/Home.scss'

function Home() {
  return (
  <div className='home'>
    <Header />
    <MainHome />
    <Footer />
  </div>
  )
}

export default Home