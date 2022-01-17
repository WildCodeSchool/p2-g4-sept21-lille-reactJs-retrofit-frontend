import PropTypes from 'prop-types';
import { SVéhiculeCard, Btn, Title, Image } from './style';

export default function VéhiculeCard({ model, image, price }) {
  return (
    <SVéhiculeCard>
      <Image src={image} alt="image voiture" />
      <Title>{model}</Title>
      <p>A partir de {price} €</p>
      <Btn>Plus dinfos</Btn>
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
