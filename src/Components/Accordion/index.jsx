import propTypes from 'prop-types';
import { useState } from 'react';
import {
  Header,
  Content,
  SAccordion,
  SubHeader,
  SubContent,
  ArrowRight,
  ArrowDown,
} from './style';

export default function Accordion({ title, questions }) {
  const [isActive, setIsActive] = useState(false);
  const [isSubActive, setIsSubActive] = useState(false);
  // const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    // setToggle(!toggle);
  };

  return (
    <>
      <SAccordion>
        <Header
          isActive={isActive}
          onClick={() => {
            setIsActive(!isActive);
            setIsSubActive(false);
            handleClick();
          }}
        >
          <div>{isActive ? <ArrowDown /> : <ArrowRight />}</div>
          <h1>{title}</h1>
        </Header>
        {isActive && (
          <Content>
            {questions.map(({ question, content }) => (
              <div>
                <SubHeader
                  isSubActive={isSubActive}
                  onClick={() => {
                    setIsSubActive(!isSubActive);
                  }}
                >
                  <div>{isSubActive ? <ArrowDown /> : <ArrowRight />}</div>
                  <h1>{question}</h1>
                </SubHeader>
                {isSubActive && <SubContent>{content}</SubContent>}
              </div>
            ))}
          </Content>
        )}
      </SAccordion>
    </>
  );
}

Accordion.propTypes = {
  title: propTypes.string,
  questions: propTypes.arrayOf(propTypes.object),
};
Accordion.defaultProps = {
  title: '',
  questions: [{}],
};
