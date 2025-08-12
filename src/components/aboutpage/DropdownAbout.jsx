import Collapse from "../global/Collapse"
import { Valeurs } from '../../data/Valeurs'

function DropdownAbout() {
    return (
        <div className="Valeurs">
            {Valeurs.map((item, index) => (
                <Collapse 
                key={index} 
                title={item.valeur}
                content={<p>{item.Description}</p>}
                >  
                </Collapse >
            ))}
        </div>
    )
}

export default DropdownAbout