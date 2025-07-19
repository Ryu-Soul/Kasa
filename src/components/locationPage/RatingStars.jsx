import starFull from '../../assets/images/star-active.png';
import starEmpty from '../../assets/images/star-inactive.png';

function RatingStars({ rating }) {
  const totalStars = 5;

  return (
    <div className="rating">
      {[...Array(totalStars)].map((_, index) => (
        <img
          key={index}
          src={index < rating ? starFull : starEmpty}
          alt={index < rating ? "Étoile pleine" : "Étoile vide"}
          className="star"
        />
      ))}
    </div>
  );
}

export default RatingStars