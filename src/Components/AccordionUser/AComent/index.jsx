import { useState } from 'react';
import propTypes from 'prop-types';

import { Header, Content, SAccordion, ArrowRight, ArrowDown } from './style';

export default function AComent({ title }) {
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
        {isActive && <Content>Commentaire</Content>}
      </SAccordion>
    </>
  );
}

AComent.propTypes = {
  title: propTypes.string,
};
AComent.defaultProps = {
  title: '',
};
