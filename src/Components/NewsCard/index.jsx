import propTypes from 'prop-types';
import Card from './style';

export default function NewsCard({ image, date, description, source }) {
  return (
    <Card>
      <img src={image} alt="à propos de la news" />
      <h1>{date}</h1>
      <p>{description}</p>
      <a href={source} target="_blank" rel="noreferrer">
        <p>Source : {source}</p>
      </a>
    </Card>
  );
}

NewsCard.propTypes = {
  image: propTypes.string,
  date: propTypes.string,
  description: propTypes.string,
  source: propTypes.string,
};
NewsCard.defaultProps = {
  image: '',
  date: '',
  description: '',
  source: '',
};
