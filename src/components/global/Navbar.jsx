import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='navbar'>
      <NavLink to="/" className={({ isActive }) => isActive ? 'active-link' : ''}>
        Accueil
      </NavLink>
      <NavLink to="/about" className={({ isActive }) => isActive ? 'active-link' : ''}>
        A Propos
      </NavLink>
    </nav>
  )
}

export default Navbar