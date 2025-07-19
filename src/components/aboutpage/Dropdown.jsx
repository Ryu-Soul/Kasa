import '../../styles/aboutpage/Dropdown.scss'
import Arrow from '../../assets/images/arrow_back.png'
import { useState } from 'react'

function Dropdown({ title, children }) {

    const [isDescOpen, setIsDescOpen] = useState(false)

    return (
        <div className="Dropdown">
            <div className='Valeur'>
                <h1>{title}</h1>
                <img
                    src={Arrow}
                    alt="flèche"
                    className={isDescOpen ? 'rotated' : ''}
                    onClick={() => setIsDescOpen(!isDescOpen)}
                />
            </div>
            <div className={`DescriptionValeur ${isDescOpen ? 'active' : ''}`}>
                <p>{children}</p>
            </div>
        </div>
    )
}

export default Dropdown