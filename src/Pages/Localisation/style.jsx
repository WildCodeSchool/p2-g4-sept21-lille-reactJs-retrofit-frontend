import styled from 'styled-components';
import { Telephone } from '@styled-icons/bootstrap/Telephone';
import { LocationPin } from '@styled-icons/entypo/LocationPin';

export const SContainer = styled.div`
  margin-top: 85px;
  margin-bottom: 10px;
  padding: 2px;
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
    margin: 150px 20px 20px 20px;
  }
`;

export const SListAdress = styled.div`
  padding: 2px;
  border: solid 1px var(--color--secondary);
  width: 20vw;
  height: 90vh;
  overflow: scroll;
  ::-webkit-scrollbar {
    width: 3px;
  }
  overflow-x: hidden;
  @media only screen and (max-width: 768px) {
    margin-top: 5px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: start;
  }
`;

export const SAdress = styled.div`
  border: solid 2px var(--color--primary);
  margin: 5px;
  background-color: var(--color--secondary);
  color: white;
  h3 {
    text-align: center;
    padding-top: 3px;
  }
  p,
  h3 {
    margin: 5px;
  }
  p,
  h3:first-letter {
    text-transform: capitalize;
  }
  display: flex;
  flex-direction: column;
`;

export const PhoneWhite = styled(Telephone)`
  color: white;
  height: 15px;
  width: 15px;
  margin-right: 3px;
  margin-left: 5px;
`;

export const AdressWhite = styled(LocationPin)`
  color: white;
  height: 20px;
  width: 20px;
`;
