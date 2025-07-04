import { Locations } from '../../data/Locations.jsx'
import '../../styles/Card.scss'
import { Link } from 'react-router-dom'

function Card() {
    return (
        <div className='gallery'>
            {Locations.map(({ title, cover, id }) => (
                <Link to={`../locationPage/${id}`} key={id}>
                    <div className='card'>
                        <img src={cover} alt={title}></img> <p>{title}</p>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default Card