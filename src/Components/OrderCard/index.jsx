import propTypes from 'prop-types';
import { Card, Col1, Col2, Col4, Col3, Units, Row2, Value } from './style';

export default function OrderCard({
  image,
  brand,
  model,
  quantities,
  price,
  state,
}) {
  return (
    <Card>
      <Col1>
        <img src={image} alt="ordered car" />
      </Col1>
      <Col2>
        <Units>
          <Col3>
            <p>Marque</p>
          </Col3>
          <Col3>
            <p>Modèle</p>
          </Col3>
          <Col3>
            <p>Quantités</p>
          </Col3>
          <Col3>
            <p>Prix</p>
          </Col3>
        </Units>
        <Value>
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
        </Value>
        <Row2>
          <progress
            max="100"
            value={state}
            data-text="Progression de votre commande"
          />
          <p className="progressLabel">Retrofitage en cours</p>
        </Row2>
      </Col2>
    </Card>
  );
}

OrderCard.propTypes = {
  image: propTypes.string,
  brand: propTypes.string,
  model: propTypes.string,
  quantities: propTypes.number,
  price: propTypes.number,
  state: propTypes.number,
};
OrderCard.defaultProps = {
  image: '',
  brand: '',
  model: '',
  quantities: 0,
  price: 0,
  state: 0,
};
