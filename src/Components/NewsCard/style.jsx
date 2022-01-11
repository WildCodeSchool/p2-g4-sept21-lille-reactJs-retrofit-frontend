import styled from 'styled-components';

const Card = styled.div`
  background: var(--color--secondary);
  padding: 1%;
  display: flex;
  flex-direction: column;
  margin: 25px;
  width: 350px;
  height: 480px;
  border-radius: 10px;
  border: solid 5px var(--color--primary);
  img {
    height: 200px;
    border: 1px solid black;
  }

  h1 {
    margin: 20px 0 0 0;
    font-size: 14px;
    color: grey;
  }

  p {
    font-size: 20px;
    margin: 10px 0 0 0;
    color: white;
  }

  a {
    text-decoration: none;
    color: var(--color--secondary);
    margin: 0;
    :hover {
      color: var(--color--secondary);
    }
    p {
      position: relative;
      bottom: 0;
    }
  }
  :hover {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
`;

export default Card;
