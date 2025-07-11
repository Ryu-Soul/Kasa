import DropdownLocation from "./DropdownLocation"
import '../../styles/locationpage/Locationpage.scss'


function MainLocations({ location }) {
    return (
        <div className="location-page">
            <div className="Carrousel"></div>
            <img src={location.cover} alt={location.title} />
            <div className="DescriptionLoc">
                <h1>{location.title}</h1>
                <p>{location.location}</p>
            </div>
            <div className="Hoststars">
                <p>{location.host.name}</p>
                <img src={location.host.picture}></img>
            </div>
            <DropdownLocation location={location} />
        </div>
    )
}

export default MainLocations