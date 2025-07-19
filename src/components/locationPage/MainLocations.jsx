import DropdownLocation from "./DropdownLocation"
import RatingStars from "./RatingStars"
import '../../styles/locationpage/Locationpage.scss'


function MainLocations({ location }) {
    return (
        <div className="location-page">
            <img src={location.cover} alt={location.title} />
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
            </div>
            <DropdownLocation location={location} />
        </div>
    )
}

export default MainLocations