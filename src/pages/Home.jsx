import Header from '../components/Header'
import MainHome from '../components/Mainhome'
import Footer from '../components/Footer'
import '../styles/Global.scss'

function Home() {
  return (
  <div className='page'>
    <Header />
    <MainHome />
    <Footer />
  </div>
  )
}

export default Home