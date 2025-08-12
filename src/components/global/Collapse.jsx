import '../../styles/global/Collapse.scss'
import Arrow from '../../assets/images/arrow_back.png'
import { useState } from 'react'

function Collapse({ title, content }) {

    const [isDescOpen, setIsDescOpen] = useState(false)

    return (
        <div className="Dropdown">
            <div className='Topbar'>
                <h2>{title}</h2>
                <img
                    src={Arrow}
                    alt="flèche"
                    className={isDescOpen ? 'rotated' : ''}
                    onClick={() => setIsDescOpen(!isDescOpen)}
                />
            </div>
            <div className={`Description ${isDescOpen ? 'active' : ''}`}>
                {content}
            </div>
        </div>
    )
}

export default Collapse