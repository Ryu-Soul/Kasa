import { useParams } from 'react-router-dom'
import { Locations } from '../data/Locations'
import Header from '../components/global/Header'
import Footer from '../components/global/Footer'
import MainLocations from '../components/locationPage/MainLocations'

function LocationsPage() {
    const { id } = useParams()
    const Location = Locations.find(loc => loc.id === id)

    if (!Location) {
        return <p>Logement non trouvé</p>
    }

    return (
        <div className='page'>
        <Header />
        <MainLocations location={Location}/>
        <Footer />
        </div>
    )
}

export default LocationsPage