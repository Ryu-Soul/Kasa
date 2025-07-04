import '../../styles/MainHome.scss'
import Banner from '../global/Banner'
import IMGabout from '../../assets/images/IMGabout.jpg'
import Collapse from './Collapse'

function Mainabout() {
    return (
        <div className="main">
            <Banner picture={IMGabout} title={''} />
            <Collapse />
        </div>
    )
}

export default Mainabout