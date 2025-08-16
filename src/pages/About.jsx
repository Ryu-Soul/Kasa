import './../styles/global/MainHome.scss'
import './../styles/aboutpage/About.scss'
import Banner from '../components/global/Banner'
import IMGabout from './../assets/images/IMGabout.jpg'
import DropdownAbout from '../components/aboutpage/DropdownAbout'
import '../styles/global/Global.scss'


function About() {
  return (
    <>
      <div className="main">
            <Banner picture={IMGabout} title={''} />
            <DropdownAbout />
      </div>
    </>
  )
}

export default About