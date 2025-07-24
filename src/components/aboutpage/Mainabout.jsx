import '../../styles/MainHome.scss'
import '../../styles/aboutpage/About.scss'
import Banner from '../global/Banner'
import IMGabout from '../../assets/images/IMGabout.jpg'
import DropdownAbout from './DropdownAbout'

function Mainabout() {
    return (
        <div className="main">
            <Banner picture={IMGabout} title={''} />
            <DropdownAbout />
        </div>
    )
}

export default Mainabout