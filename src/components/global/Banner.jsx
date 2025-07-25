import '../../styles/global/Banner.scss'

function Banner({picture, title}) {
    return (
        <div className="Banner">
            <img src={picture} alt='paysage'></img>
            <div className='overlayBanner'></div>
            {title && <h1>{title}</h1>}
        </div>
    )
}

export default Banner