import { useState } from 'react';
import ArrowLogement from '../../assets/images/arrow-logement.png';

function Slideshow({ source, title }) {
  const [count, setCount] = useState(0);

  const previousSlide = () => {
    setCount((prevCount) => (prevCount - 1 + source.length) % source.length);
  };

  const nextSlide = () => {
    setCount((prevCount) => (prevCount + 1) % source.length);
  };

  return (
    <div className="Slideshow">
      <img src={source[count]} alt={title} className='Photologement'/>
      <img
        src={ArrowLogement}
        alt="fleche gauche"
        className="flecheGauche"
        onClick={previousSlide}
      />
      <img
        src={ArrowLogement}
        alt="fleche droite"
        className="flecheDroite"
        onClick={nextSlide}
      />
    </div>
  );
}

export default Slideshow;