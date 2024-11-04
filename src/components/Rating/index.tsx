import { Rating as ReactRating } from '@smastrom/react-rating'

interface RatingInterface {
    value: number;
    readOnly?: boolean;
    setRating?: (value: number) => void;
}

const Rating: React.FC<RatingInterface> = ({ value, readOnly = false, setRating }) => {
  return <ReactRating style={{ maxWidth: 100 }} value={value} readOnly={readOnly} onChange={setRating} />
}

export default Rating;