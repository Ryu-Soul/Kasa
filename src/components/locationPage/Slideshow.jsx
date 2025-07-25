import { useState } from 'react';
import ArrowLogementD from '../../assets/images/arrow-logement-droite.png';
import ArrowLogementG from '../../assets/images/arrow-logement-gauche.png';
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
        src={ArrowLogementG}
        alt="fleche gauche"
        className="flecheGauche"
        onClick={previousSlide}
      />
      <img
        src={ArrowLogementD}
        alt="fleche droite"
        className="flecheDroite"
        onClick={nextSlide}
      />
    </div>
  );
}

export default Slideshow;