import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/Global.scss'
import Mainabout from '../components/Mainabout'

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