import styled from 'styled-components';
import { RightArrow } from '@styled-icons/boxicons-solid/RightArrow';
import { DownArrow } from '@styled-icons/boxicons-solid/DownArrow';

export const SAccordion = styled.div`
  margin: 0.6rem auto;
  font-family: 'MyFont';
`;

export const ArrowRight = styled(RightArrow)`
  height: 25px;
  width: 25px;
`;

export const ArrowDown = styled(DownArrow)`
  height: 25px;
  width: 25px;
`;

export const Header = styled.div`
  width: 70vw;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  cursor: pointer;
  /* border: solid 2px rgb(1, 30, 38); */
  background-color: rgb(0, 230, 200);
  transition: width 0.2s, height 0.2s, background-color 0.2s, transform 0.2s;
  :hover {
    background-color: rgb(0, 173, 150);
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
  border-radius: 10px;
`;

export const SubHeader = styled.div`
  width: 70vw;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  cursor: pointer;
  /* border: solid 2px rgb(1, 30, 38); */
  background-color: rgba(0, 230, 199, 0);
`;

export const DivHeader = styled.h1`
  display: flex;
  flex-direction: row;
  font-size: 30px;
  color: white;
  margin-right: 5px;
  margin-top: 0px;
  animation: Fade 0.4s ease-in-out;
`;

export const ExpandBtn = styled.div`
  margin-right: 10px;
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SubExpandBtn = styled.h2`
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  font-size: 25px;
  color: white;
  margin-right: 5px;
  margin-left: 4px;
  margin-bottom: 8px;
  margin-top: 8px;
`;

export const Title = styled.h1`
  display: flex;
  flex-direction: row;
  font-size: 30px;
  color: white;
  margin-right: 5px;
  margin-top: 14px;
  @media (max-width: 768px) {
    font-size: 23px;
  }
`;

export const SubTitle = styled.h1`
  display: flex;
  flex-direction: row;
  font-size: 25px;
  color: white;
  margin-right: 5px;
  margin-top: 10px;
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const Content = styled.div`
  background-color: rgb(1, 30, 38);
  padding-bottom: 0.6rem;
  color: white;
  border-radius: 10px;
  max-width: 70vw;
  padding: 1vw;
  padding-bottom: 1px;
  padding-top: 1px;
  animation: Fade 0.4s ease-in-out;
  @keyframes Fade {
    0% {
      display: none;
      opacity: 0;
    }
    100% {
      display: block;
      opacity: 1;
    }
  }
`;

export const SubContent = styled.div`
  background-color: rgb(1, 30, 38);
  color: white;
  border-radius: 10px;
  font-size: 22px;
  padding-right: 10px;
  padding-left: 10px;
  padding-bottom: 10px;
  margin-bottom: 10px;
  animation: Fade 0.4s ease-in-out;
  @keyframes Fade {
    0% {
      display: none;
      opacity: 0;
    }
    100% {
      display: block;
      opacity: 1;
    }
  }
`;
