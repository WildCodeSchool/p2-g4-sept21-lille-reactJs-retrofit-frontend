import { Card, CardContainer } from './style';

const ReviewCard = ({ ...review }) => {
  return (
    <>
      <CardContainer>
        <Card>
          <h3>{review.name} </h3>
          <p>{review.review}</p>
        </Card>
      </CardContainer>
    </>
  );
};

export default ReviewCard;
