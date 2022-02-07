import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { SVehiculeCard, Btn, Image, Text } from './style';

export default function VehiculeCard({ model, image, price, brand }) {
  return (
    <SVehiculeCard>
      <Image src={image} alt="image voiture" />
      <Text>
        <h2>{brand}</h2>
        <h2>{model}</h2>
        <p>A partir de {price} €</p>
      </Text>
      <Link to={`/Vehicules/${model}`}>
        <Btn>Configurer</Btn>
      </Link>
    </SVehiculeCard>
  );
}

VehiculeCard.propTypes = {
  model: PropTypes.string,
  brand: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
};

VehiculeCard.defaultProps = {
  brand: '',
  model: '',
  image: '',
  price: 0,
};
