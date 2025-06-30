import IMGbanner from '../assets/images/IMG-banner.png'
import '../styles/Banner.scss'

function Banner () {
    return (
        <div className="homeBanner">
            <h1 style={{ backgroundImage: `url(${IMGbanner})` }}>Chez vous, partout et ailleurs</h1>
        </div>
    )
}

export default Banner