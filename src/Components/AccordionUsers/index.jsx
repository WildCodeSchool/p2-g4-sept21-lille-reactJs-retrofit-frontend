import { useState } from 'react';
import propTypes from 'prop-types';

import { Header, SAccordion, ArrowRight, ArrowDown } from './style';

export default function AccordionUsers({ title }) {
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
        {/* {components.map(({ component }) => (
          <Accordion title={title} questions={questions} />
        ))} */}
        {/* {isActive && { components.map(({ component }) => ({ component })) }} */}
      </SAccordion>
    </>
  );
}

AccordionUsers.propTypes = {
  title: propTypes.string,
  // components: propTypes.elementType,
};
AccordionUsers.defaultProps = {
  title: '',
  // components: [],
};
