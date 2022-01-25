import Rating from '@mui/material/Rating';
import { Card, CardContainer } from './style';

const ReviewCard = ({ ...review }) => {
  return (
    <>
      <CardContainer>
        <Card>
          <Rating name="read-only" value={review.stars} size="large" readOnly />

          <h3>{review.name} </h3>
          <p>{review.review}</p>
        </Card>
      </CardContainer>
    </>
  );
};

export default ReviewCard;
