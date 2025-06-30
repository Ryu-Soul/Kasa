import { Locations } from '../data/Locations.jsx'
import '../styles/Card.scss'

function Card () {
    return (
        <div className='gallery'>
            {Locations.map(({ title, cover, id }) => (
							<div className='card' key={id}>
								<img src={cover} alt={title}></img> <p>{title}</p>
							</div>
						))}
        </div>
    )
}

export default Card