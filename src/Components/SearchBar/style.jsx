import styled from 'styled-components';
import { Search } from '@styled-icons/bootstrap/Search';

const Ssearchbar = styled.div`
  padding-top: 18px;
  @media (max-width: 1400px) {
    padding-top: 0;
  }
  @media (max-width: 768px) {
    height: 50px;
    margin-bottom: 5px;
  }
`;

const Form = styled.form`
  border: solid 2px var(--color--primary);
  max-height: 40px;
  min-height: 40px;
  display: flex;
  @media (max-width: 768px) {
    height: 35px;
    width: 65vw;
  }
`;

const Input = styled.input`
  background-color: var(--color--secondary);
  min-width: 180px;
  width: 180px;
  color: white;
  border: none;
  padding: 2px 0 0 7px;
  font-size: 24px;
  :focus {
    outline: none;
  }
  @media (max-width: 768px) {
    height: 35px;
  }
`;

const SearchBtn = styled(Search)`
  color: var(--color--primary);
  height: 35px;
  width: 28px;
  margin-top: 1px;
  margin-right: 4px;
  cursor: pointer;
  @media (max-width: 768px) {
    height: 30px;
    margin-top: 4px;
    margin: auto;
    margin-right: 5px;
  }
`;

export { SearchBtn, Input, Form, Ssearchbar };
