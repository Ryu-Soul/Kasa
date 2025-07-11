import '../../styles/aboutpage/Dropdown.scss'
import Arrow from '../../assets/images/arrow_back.png'
import { useState } from 'react'

function DropdownLocation({ location }) {
  const [isDescOpen, setIsDescOpen] = useState(false)
  const [isEquipOpen, setIsEquipOpen] = useState(false)

  return (
    <div className='Valeurs'>

      <div className="Dropdown">
        <div className='Valeur'>
          <h1>Description</h1>
          <img
            src={Arrow}
            alt="flèche"
            className={isDescOpen ? 'rotated' : ''}
            onClick={() => setIsDescOpen(!isDescOpen)}
          />
        </div>
        <div className={`DescriptionValeur ${isDescOpen ? 'active' : ''}`}>
          <p>{location.description}</p>
        </div>
      </div>

      <div className="Dropdown">
        <div className='Valeur'>
          <h1>Équipements</h1>
          <img
            src={Arrow}
            alt="flèche"
            className={isEquipOpen ? 'rotated' : ''}
            onClick={() => setIsEquipOpen(!isEquipOpen)}
          />
        </div>
        <div className={`DescriptionValeur ${isEquipOpen ? 'active' : ''}`}>
          <ul>
            {location.equipments.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

    </div>
  )
}

export default DropdownLocation