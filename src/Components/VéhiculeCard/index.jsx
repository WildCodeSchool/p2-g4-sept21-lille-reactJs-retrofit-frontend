import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { SVehiculeCard, Btn, Image, Text } from './style';

export default function VehiculeCard({ model, image, price }) {
  return (
    <SVehiculeCard>
      <Link to={`/Vehicules/${model}`}>
        <Image src={image} alt="image voiture" />
        <Text>
          <h2>{model}</h2>
          <p>A partir de {price} €</p>
        </Text>
        <Btn>Configurer</Btn>
      </Link>
    </SVehiculeCard>
  );
}

VehiculeCard.propTypes = {
  model: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
};

VehiculeCard.defaultProps = {
  model: '',
  image: '',
  price: 0,
};
