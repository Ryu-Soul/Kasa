import Dropdown from "./Dropdown"
import { Valeurs } from '../../data/Valeurs'

function Collapse() {
    return (
        <div className="Valeurs">
            {Valeurs.map((item, index) => (
                <Dropdown key={index} title={item.valeur}>
                    <p>{item.Description}</p>
                </Dropdown>
            ))}
        </div>
    )
}

export default Collapse