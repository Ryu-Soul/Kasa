import Dropdown from "../global/Collapse"
import { Valeurs } from '../../data/Valeurs'

function Collapse() {
    return (
        <div className="Valeurs">
            {Valeurs.map((item, index) => (
                <Dropdown 
                key={index} 
                title={item.valeur}
                content={<p>{item.Description}</p>}
                >  
                </Dropdown>
            ))}
        </div>
    )
}

export default Collapse