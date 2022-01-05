import styled from 'styled-components';
import { LinkedinSquare } from '@styled-icons/boxicons-logos/LinkedinSquare';

const Card = styled.div`
  height: 420px;
  width: 360px;
  color: white;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  padding-top: 15px;
  padding-bottom: 15px;
  margin-right: 100px;
  margin-left: 100px;
  margin-bottom: 35px;
  background: var(--color--secondary);
  border-radius: 8px;
  :hover {
    box-shadow: rgba(0, 0, 0, 0.582) 0px 4px 12px;
  }
  img {
    border-radius: 130px;
  }
  h1 {
    margin-bottom: 0px;
  }
`;

const Icon = styled(LinkedinSquare)`
  height: 50px;
  color: white;
  cursor: pointer;
`;

export { Icon, Card };
