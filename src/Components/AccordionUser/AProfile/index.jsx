import { useState } from 'react';
import propTypes from 'prop-types';

import {
  Header,
  Content,
  SAccordion,
  ArrowRight,
  ArrowDown,
  Row,
  Row2,
  Button,
} from './style';

export default function AProfile({ title }) {
  const [isActive, setIsActive] = useState(false);
  const [toggle, setToggle] = useState(false);

  const animation = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <SAccordion>
        <Header
          isActive={isActive}
          onClick={() => {
            setIsActive(!isActive);
            animation();
          }}
        >
          <div>{isActive ? <ArrowDown /> : <ArrowRight />}</div>
          <h1>{title}</h1>
        </Header>
        {isActive && (
          <Content>
            <Row>
              <p>Nom :</p>
              <input type="search" />
              <p>Prénom :</p>
              <input type="search" />
              <p>Mobile :</p>
              <input type="search" />
              <Button>
                <input type="submit" value="Modifier" />
              </Button>
            </Row>
            <Row2>
              <p>N° :</p>
              <input type="search" />
              <p>Rue :</p>
              <input type="search" />
              <p>Ville :</p>
              <input type="search" />
              <p>Code postal :</p>
              <input type="search" />
            </Row2>
          </Content>
        )}
      </SAccordion>
    </>
  );
}

AProfile.propTypes = {
  title: propTypes.string,
};
AProfile.defaultProps = {
  title: '',
};
