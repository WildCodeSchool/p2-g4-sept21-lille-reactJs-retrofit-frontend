import styled from 'styled-components';
import { Search } from '@styled-icons/bootstrap/Search';

export const Ssearchbar = styled.div`
  padding-top: 18px;
  @media (max-width: 1400px) {
    padding-top: 0;
    @media (max-width: 768px) {
      height: 50px;
      margin-bottom: 5px;
    }
  }
`;

export const Form = styled.form`
  border: solid 2px var(--color--primary);
  max-height: 40px;
  min-height: 40px;
  display: flex;
  flex-direction: row;
  @media (max-width: 768px) {
    height: 35px;
    width: 65vw;
  }
`;

export const Input = styled.input`
  background-color: var(--color--secondary);
  min-width: 180px;
  width: 180px;
  color: white;
  border: none;
  font-size: 24px;
  :focus {
    outline: none;
  }
  @media (max-width: 768px) {
    height: 35px;
  }
`;

export const SearchBtn = styled(Search)`
  color: var(--color--primary);
  height: 35px;
  width: 28px;
  margin-top: 1px;
  margin-right: 4px;
  cursor: pointer;
  @media (max-width: 768px) {
    height: 30px;
    margin-top: 4px;
  }
`;
