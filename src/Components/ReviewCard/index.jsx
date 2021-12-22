import BeautyStars from 'beauty-stars';

import { Card, CardContainer } from './style';

const ReviewCard = ({ ...review }) => {
  return (
    <>
      <CardContainer>
        <Card>
          <BeautyStars maxStars={5} value={review.stars} size={34} />

          <h3>{review.name} </h3>
          <p>{review.review}</p>
        </Card>
      </CardContainer>
    </>
  );
};

export default ReviewCard;
