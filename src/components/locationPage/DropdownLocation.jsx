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
        content={
        location.equipments.map((item, index) => (
          <ul key={index}>
            <li key={index}>
            {item}
            </li>
          </ul>
        ))
      }
      />
    </div>
  )
}

export default DropdownLocation