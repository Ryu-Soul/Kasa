import { NavLink } from 'react-router-dom'
import '../../styles/global/Header.scss'

function Navbar() {
  return (
    <nav className='navbar'>
      <NavLink to="/" end className={({ isActive }) => isActive ? 'active-link' : ''}>
        Accueil
      </NavLink>
      <NavLink to="/about" end className={({ isActive }) => isActive ? 'active-link' : ''}>
        A Propos
      </NavLink>
    </nav>
  )
}

export default Navbar