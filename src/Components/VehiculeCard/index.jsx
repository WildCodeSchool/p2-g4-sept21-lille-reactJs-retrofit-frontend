import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { SVehiculeCard, Btn, Image, Text } from './style';

export default function VehiculeCard({
  id,
  model,
  image,
  price,
  brand,
  availability,
}) {
  return (
    <SVehiculeCard>
      <Image src={image} alt="image voiture" />
      <Text>
        <div>
          <h2>{brand}</h2>
          <h2>{model}</h2>
        </div>
        <p>A partir de {price} €</p>
        <p>Disponible en {availability}</p>
      </Text>
      <Link to={`/Vehicules/${id}`}>
        <Btn>Configurer</Btn>
      </Link>
    </SVehiculeCard>
  );
}

VehiculeCard.propTypes = {
  id: PropTypes.number,
  model: PropTypes.string,
  brand: PropTypes.string,
  image: PropTypes.string,
  availability: PropTypes.string,
  price: PropTypes.number,
};

VehiculeCard.defaultProps = {
  id: 0,
  model: '',
  image: '',
  brand: '',
  availability: '',
  price: 0,
};
