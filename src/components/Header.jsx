import LOGO from '../assets/images/LOGO.png'
import Navbar from './Navbar'
import '../styles/Header.scss'

function Header (){
    return (
        <header>
            <img src={LOGO} alt="Logo" /><Navbar />
        </header>
    )
}

export default Header