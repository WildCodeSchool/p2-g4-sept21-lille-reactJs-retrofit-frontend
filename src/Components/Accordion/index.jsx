import propTypes from 'prop-types';
import { useState } from 'react';
import { RiArrowRightSFill, RiArrowDownSFill } from 'react-icons/ri';
import {
  Header,
  Content,
  SAccordion,
  Title,
  SubTitle,
  DivHeader,
  ExpandBtn,
  SubHeader,
  SubExpandBtn,
  SubContent,
  ArrowRight,
  ArrowDown,
} from './style';

export default function Accordion({ title, content, question }) {
  const [isActive, setIsActive] = useState(false);
  const [isSubActive, setIsSubActive] = useState(false);

  return (
    <>
      <SAccordion>
        <Header
          isActive={isActive}
          onClick={() => {
            setIsActive(!isActive);
            setIsSubActive(false);
          }}
        >
          <DivHeader>
            <ExpandBtn>{isActive ? <ArrowDown /> : <ArrowRight />}</ExpandBtn>
            <Title>{title}</Title>
          </DivHeader>
        </Header>
        {isActive && (
          <Content>
            {' '}
            <SubHeader
              isSubActive={isSubActive}
              onClick={() => {
                setIsSubActive(!isSubActive);
              }}
            >
              <DivHeader>
                <SubExpandBtn>
                  {isSubActive ? (
                    <RiArrowDownSFill size={35} />
                  ) : (
                    <RiArrowRightSFill size={35} />
                  )}
                </SubExpandBtn>
                <SubTitle>{question}</SubTitle>
              </DivHeader>
            </SubHeader>
            {isSubActive && <SubContent>{content}</SubContent>}
          </Content>
        )}
      </SAccordion>
    </>
  );
}

Accordion.propTypes = {
  title: propTypes.string,
  content: propTypes.string,
  question: propTypes.string,
};
Accordion.defaultProps = {
  title: '',
  content: '',
  question: '',
};
