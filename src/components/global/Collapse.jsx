import '../../styles/global/Collapse.scss'
import Arrow from '../../assets/images/arrow_back.png'
import { useState } from 'react'

function Dropdown({ title, content }) {

    const [isDescOpen, setIsDescOpen] = useState(false)

    return (
        <div className="Dropdown">
            <div className='Topbar'>
                <h1>{title}</h1>
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

export default Dropdown