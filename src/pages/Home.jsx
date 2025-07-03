import Header from '../components/global/Header'
import MainHome from '../components/mainpage/Mainhome'
import Footer from '../components/global/Footer'
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