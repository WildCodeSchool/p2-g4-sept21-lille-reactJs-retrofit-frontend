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
  const [toggle, setToggle] = useState(false);

  const animation = () => {
    setToggle(!toggle);
  };

  const initSubActive = questions.map(() => false);

  const setIsSubActive = (i) => {
    const cache = [...isSubActive];
    cache[i] = !cache[i];
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
            animation();
          }}
        >
          <div>{isActive ? <ArrowDown /> : <ArrowRight />}</div>
          <h1>{title}</h1>
        </Header>
        {isActive && (
          <Content>
            {questions.map(({ question, content }, i) => (
              <div>
                <SubHeader
                  isSubActive={isSubActive[i]}
                  onClick={() => {
                    setIsSubActive(i);
                    animation();
                  }}
                >
                  <div>{isSubActive[i] ? <ArrowDown /> : <ArrowRight />}</div>
                  <h1>{question}</h1>
                </SubHeader>
                {isSubActive[i] && <SubContent>{content}</SubContent>}
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
