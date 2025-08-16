import Locations from '../../data/Locations.json'
import '../../styles/homepage/Card.scss'
import { Link } from 'react-router-dom'

function Card() {
    return (
        <div className='gallery'>
            {Locations.map(({ title, cover, id }) => (
                <Link to={`../locationPage/${id}`} key={id}>
                    <div className='card'>
                        <div className='overlayCard'>
                        </div>
                        <img src={cover} alt={title}></img> <p>{title}</p>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default Card