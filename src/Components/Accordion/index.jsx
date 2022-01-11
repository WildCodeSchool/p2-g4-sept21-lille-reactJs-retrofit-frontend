import propTypes from 'prop-types';
import { useEffect, useState } from 'react';
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
  const [isSubActive, _setIsSubActive] = useState([]);
  // const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    // setToggle(!toggle);
  };

  const initSubActive = questions.map(() => false);

  const setIsSubActive = (index) => {
    // const next line because have eslint warning for let //
    const cache = [...isSubActive];
    cache[index] = !cache[index];
    _setIsSubActive(cache);
  };

  useEffect(() => {
    _setIsSubActive(initSubActive);
  }, []);

  return (
    <>
      <SAccordion>
        <Header
          isActive={isActive}
          onClick={() => {
            setIsActive(!isActive);
            _setIsSubActive(initSubActive);
            handleClick();
          }}
        >
          <div>{isActive ? <ArrowDown /> : <ArrowRight />}</div>
          <h1>{title}</h1>
        </Header>
        {isActive && (
          <Content>
            {questions.map(({ question, content }, index) => (
              <div>
                <SubHeader
                  isSubActive={isSubActive[index]}
                  onClick={() => {
                    setIsSubActive(index);
                  }}
                >
                  <div>
                    {isSubActive[index] ? <ArrowDown /> : <ArrowRight />}
                  </div>
                  <h1>{question}</h1>
                </SubHeader>
                {isSubActive[index] && <SubContent>{content}</SubContent>}
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
