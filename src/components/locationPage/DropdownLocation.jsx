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
          <p key={index}>{item}</p>
        ))
      }
      />
    </div>
  )
}

export default DropdownLocation