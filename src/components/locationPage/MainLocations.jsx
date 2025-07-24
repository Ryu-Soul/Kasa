import DropdownLocation from "./DropdownLocation"
import Slideshow from "./Slideshow"
import RatingStars from "./RatingStars"
import '../../styles/locationpage/Locationpage.scss'


function MainLocations({ location }) {
    return (
        <div className="location-page">
            <Slideshow location={location}
                source={location.pictures}
                title="Photo du logement"
            />
            <div className="Information">
                <div className="DescriptionLoc">
                    <h1>{location.title}</h1>
                    <p>{location.location}</p>
                </div>
                <div className="Hoststars">
                    <div className="Hostinfo">
                        <p>{location.host.name}</p>
                        <img src={location.host.picture}></img>
                    </div>
                    <RatingStars rating={location.rating} />
                </div>
                <div className="tags">
                    {location.tags.map((tag, index) => (
                        <p key={tag + index}>{tag}</p>
                    ))}
                </div>
            </div>
            <DropdownLocation location={location} />
        </div>
    )
}

export default MainLocations