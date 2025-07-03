import '../../styles/MainHome.scss'
import Banner from '../global/Banner'
import IMGabout from '../../assets/images/IMGabout.jpg'

function Mainabout() {
    return (
        <div className="mainHome">
            <Banner picture={IMGabout} title={''} />
        </div>
    )
}

export default Mainabout