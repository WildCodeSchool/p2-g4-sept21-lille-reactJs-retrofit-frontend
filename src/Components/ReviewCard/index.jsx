import Rating from '@mui/material/Rating';
import { Card, CardContainer } from './style';

const ReviewCard = ({ ...review }) => {
  return (
    <>
      <CardContainer>
        <Card>
          <Rating
            name="read-only"
            value={review.rating}
            size="large"
            readOnly
          />
          <h3>
            {review.firstname} {review.lastname}
          </h3>
          <p>{review.content}</p>
        </Card>
      </CardContainer>
    </>
  );
};

export default ReviewCard;
