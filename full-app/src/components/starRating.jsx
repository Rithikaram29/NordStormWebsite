import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faStar,
    faStarHalfStroke,
    faStar as faStarEmpty
} from "@fortawesome/free-solid-svg-icons";

const StarRating = ({ rating }) => {
    const totalStars = 5;
    const filledStar = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5 ? 1 : 0;
    const emptyStar = totalStars - (filledStar + halfStar);

    return (
        <div className="flex items-center">
            {[...Array(filledStar)].map((_, i) => (
                <span key={`filled-${i}`}>
                    <FontAwesomeIcon icon={faStar} className="text-blue-105 w-4" />
                </span>
            ))}
            {halfStar ? (
                <span key="half">
                    <FontAwesomeIcon icon={faStarHalfStroke} className="text-blue-105  w-4" />
                </span>
            ) : null}
            {(filledStar+halfStar !== 5 )? ([...Array(emptyStar)].map((_, i) => (
                <span key={`empty-${i}`}>
                    <FontAwesomeIcon icon={faStarEmpty} className="text-blue-105  w-4" />
                </span>
            ))):null}
        </div>
    );
};

export default StarRating;
