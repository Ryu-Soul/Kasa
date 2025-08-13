import '../../styles/global/MainHome.scss'
import Banner from '../global/Banner'
import Card from './Card'
import IMGbanner from '../../assets/images/IMG-banner.png'

function MainHome() {
    return (
        <div className="main">
            <Banner picture={IMGbanner} title={'Chez vous, partout et ailleurs'} />
            <Card />
        </div>
    )
}

export default MainHome
