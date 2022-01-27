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
      <Link to={`/Vehicules/${id}`}>
        <Image src={image} alt={model} />
        <Text>
          <h2>
            {brand} {model}
          </h2>
          <p>A partir de {price} €</p>
          <p>Disponible en {availability}</p>
        </Text>
        <Btn>Configurer</Btn>
      </Link>
    </SVehiculeCard>
  );
}

VehiculeCard.propTypes = {
  id: PropTypes.number,
  model: PropTypes.string,
  image: PropTypes.string,
  brand: PropTypes.string,
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
