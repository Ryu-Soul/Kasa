import Collapse from '../global/Collapse'

function DropdownLocation({ location }) {

  return (
    <div className='InfoDropdown'>
      <Collapse
        title='Description'
        content={location.description}
      />
      <Collapse
        title='Équipements'
        content={<ul>{
        location.equipments.map((item, index) => (
          <li key={index}>
            {item}
          </li>
        ))
      }</ul>}
      />
    </div>
  )
}

export default DropdownLocation