import LOGOfooter from '../assets/images/LOGO-footer.png'
import '../styles/Footer.scss'

function Footer (){
    return (
        <footer>
            <img src={LOGOfooter} alt="Logo" /><p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer