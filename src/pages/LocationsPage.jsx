import { useParams } from 'react-router-dom'
import Locations from '../data/Locations.json'
import Error from './Error'
import MainLocations from '../components/locationPage/MainLocations'

function LocationsPage() {
    const { id } = useParams()
    const Location = Locations.find(loc => loc.id === id)

    if (!Location) {
        return <Error />
    }

    return (
        <>  
        <MainLocations location={Location}/> 
        </>
    )
}

export default LocationsPage