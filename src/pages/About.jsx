import Header from '../components/global/Header'
import Footer from '../components/global/Footer'
import '../styles/global/Global.scss'
import Mainabout from '../components/aboutpage/Mainabout'

function About() {
  return (
    <div className="page">
      <Header />
      <Mainabout />
      <Footer />
    </div>
  )
}

export default About