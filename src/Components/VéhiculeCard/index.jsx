import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { SVéhiculeCard, Btn, Image, Text } from './style';

export default function VéhiculeCard({ model, image, price }) {
  return (
    <SVéhiculeCard>
      <Link to={`/vehicules/${model}`}>
        <Image src={image} alt="image voiture" />
        <Text>
          <h2>{model}</h2>
          <p>A partir de {price} €</p>
        </Text>
        <Btn>Configurer</Btn>
      </Link>
    </SVéhiculeCard>
  );
}

VéhiculeCard.propTypes = {
  model: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
};

VéhiculeCard.defaultProps = {
  model: '',
  image: '',
  price: 0,
};
