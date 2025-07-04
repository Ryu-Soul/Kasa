import '../../styles/aboutpage/Dropdown.scss'
import Arrow from '../../assets/images/arrow_back.png'
import { Valeurs } from '../../data/Valeurs'
import { useState } from 'react'

function Dropdown () {
    

    const [rotations, setRotations] = useState(Array(Valeurs.length).fill(false));

    const toggleRotation = (index) => {
    const newRotations = [...rotations];
    newRotations[index] = !newRotations[index];
    setRotations(newRotations);
    }
    return (
        <div className='Valeurs'>
            {Valeurs.map(({valeur, Description}, index ) => (
            <div className="Dropdown" key={`${valeur}-${index}`}>
                <div className='Valeur'>
                <h1>{valeur}</h1>
                <img
                    src={Arrow}
                    alt="flèche"
                    className={rotations[index] ? 'rotated' : ''}
                    onClick={() => toggleRotation(index)}
                />
                </div>
                <div className={`DescriptionValeur ${rotations[index] ? 'active' : ''}`}>
                    <p>{Description}</p>
                </div>
            </div>))}           
        </div>
    )
}

export default Dropdown