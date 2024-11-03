'use client'

import { useState } from 'react'
import { Rating as ReactRating } from '@smastrom/react-rating'

interface RatingInterface {
    value: number;
    readOnly?: boolean;
}

const Rating: React.FC<RatingInterface> = ({ value, readOnly = false }) => {
  const [rating, setRating] = useState(value)

  return <ReactRating style={{ maxWidth: 100 }} value={rating} readOnly={readOnly} onChange={setRating} />
}

export default Rating;