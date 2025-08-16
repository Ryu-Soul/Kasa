import Error from '../assets/images/Error.png'
import '../styles/errorpage/Error.scss'
import { Link } from 'react-router-dom'

function NotFound() {
    return (
        <>
            <div className='ErrorMain'>
                <img src={Error} alt='Erreur 404'></img>
                <h1>Oups! La page que vous demandez n'existe pas.</h1>
                <Link to={'/'}>Retourner sur la page d’accueil</Link>
            </div>
        </>
    )
}

export default NotFound;