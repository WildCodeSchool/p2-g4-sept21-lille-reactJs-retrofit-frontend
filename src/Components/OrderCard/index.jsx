import propTypes from 'prop-types';
import { Card, Col4, Row2 } from './style';

export default function OrderCard({ brand, model, quantities, price, state }) {
  return (
    <Card>
      <Col4>
        <p>{brand}</p>
      </Col4>
      <Col4>
        <p>{model}</p>
      </Col4>
      <Col4>
        <p>{quantities}</p>
      </Col4>
      <Col4>
        <p>{price}</p>
      </Col4>
      <Row2>
        <progress
          max="100"
          value={state}
          data-text="Progression de votre commande"
        />
      </Row2>
    </Card>
  );
}

OrderCard.propTypes = {
  brand: propTypes.string,
  model: propTypes.string,
  quantities: propTypes.number,
  price: propTypes.number,
  state: propTypes.number,
};
OrderCard.defaultProps = {
  brand: '',
  model: '',
  quantities: 0,
  price: 0,
  state: 0,
};
