import IMGbanner from '../assets/images/IMG-banner.png'
import '../styles/Banner.scss'

function Banner() {
    return (
        <div className="homeBanner">
            <img src={IMGbanner} alt='paysage'></img>
            <div className='overlay'></div>
            <h1 >Chez vous, partout et ailleurs</h1>
        </div>
    )
}

export default Banner