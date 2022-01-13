import PropTypes from 'prop-types';
// import useState from 'react';
import { SVéhiculeCard, Btn, Title, Image } from './style';

export default function VéhiculeCard({ name, url }) {
  // const [toggle, setToggle] = useState(false);
  // const handleClick = () => {
  //   setToggle(!toggle);
  // };
  return (
    <SVéhiculeCard>
      <Image src={url} alt={name} />
      <Title>{name}</Title>
      <p>A partir de 15 000 €</p>
      <Btn>Plus dinfos</Btn>
    </SVéhiculeCard>
  );
}
// toggle={toggle} onClick={handleClick}

VéhiculeCard.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string,
};

VéhiculeCard.defaultProps = {
  name: '',
  url: '',
};
