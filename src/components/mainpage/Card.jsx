import { Locations } from '../../data/Locations.jsx'
import '../../styles/homepage/Card.scss'
import { Link } from 'react-router-dom'

function Card() {
    return (
        
        <div className='gallery'>
            {Locations.map(({ title, cover, id }) => (
                <Link to={`../locationPage/${id}`} key={id}>
                    <div className='overlayCard'>
                    <div className='card'>
                        <img src={cover} alt={title}></img> <p>{title}</p>
                    </div>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default Card