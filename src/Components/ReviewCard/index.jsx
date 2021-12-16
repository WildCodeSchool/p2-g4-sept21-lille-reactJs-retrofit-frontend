import { Rating } from 'semantic-ui-react';
import Card from './style';

const ReviewCard = () => {
  return (
    <>
      <Rating maxRating={5} defaultRating={3} icon="star" size="huge" />
      <Card>
        Sylvain .D <br />
        <br />
        Equipe au top, toutes les explications étaient claires, encore merci !
      </Card>
    </>
  );
};

export default ReviewCard;
