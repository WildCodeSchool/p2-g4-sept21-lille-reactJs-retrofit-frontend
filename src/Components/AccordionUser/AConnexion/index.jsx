import { useState } from 'react';
import propTypes from 'prop-types';

import { Header, Content, SAccordion, ArrowRight, ArrowDown } from './style';

export default function AConnexion({ title }) {
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
        {isActive && <Content>connexion</Content>}
      </SAccordion>
    </>
  );
}

AConnexion.propTypes = {
  title: propTypes.string,
};
AConnexion.defaultProps = {
  title: '',
};
