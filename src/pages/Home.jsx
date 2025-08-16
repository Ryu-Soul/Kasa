import '../styles/global/MainHome.scss'
import Banner from '../components/global/Banner'
import Card from '../components/mainpage/Card'
import IMGbanner from './../assets/images/IMG-banner.png'
import '../styles/global/Global.scss'

function Home() {
  return (
  <>
    <div className="main">
            <Banner picture={IMGbanner} title={'Chez vous, partout et ailleurs'} />
            <Card />
    </div>
  </>
  )
}

export default Home