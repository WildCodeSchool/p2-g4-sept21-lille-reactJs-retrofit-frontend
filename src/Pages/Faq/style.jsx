import styled from 'styled-components';

export const SendBtn = styled.button`
  width: 50vw;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  cursor: pointer;
  font-size: 30px;
  border-radius: 10px;
  border: solid 1px black;
  background-color: rgba(255, 255, 255, 0);
  transition: width 0.2s, height 0.2s, background-color 0.2s, transform 0.2s;
  :hover {
    background-color: rgb(0, 173, 150);
    color: white;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
  @media (max-width: 768px) {
    font-size: 20px;
    width: 70vw;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 150px;
  @media (max-width: 768px) {
    padding-top: 170px;
  }
`;
