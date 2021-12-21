import styled from 'styled-components';
import { LinkedinSquare } from '@styled-icons/boxicons-logos/LinkedinSquare';

const Card = styled.div`
  height: 400px;
  width: 900px;
  border: 1px solid red;
  color: white;
  background: var(--color--secondary);
`;

const Icon = styled(LinkedinSquare)`
  height: 2em;
  color: white;
`;

export { Icon, Card };
