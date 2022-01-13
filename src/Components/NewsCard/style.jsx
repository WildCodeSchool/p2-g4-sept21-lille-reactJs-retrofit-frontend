import styled from 'styled-components';

const Card = styled.div`
  background: var(--color--secondary);
  display: flex;
  flex-direction: column;
  margin: 25px;
  width: 320px;
  height: 490px;
  border-radius: 10px;
  border: solid 3px var(--color--primary);
  img {
    height: 210px;
    padding-right: 0;
    border-radius: 8px 8px 0 0;
  }

  h1 {
    margin: 20px 0 0 10px;
    font-size: 14px;
    color: grey;
    padding-left: 2%;
    padding-right: 2%;
  }

  :hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`;

const Texte = styled.div`
  display: flex;
  flex-direction: column;
  p,
  a {
    padding-left: 2%;
    padding-right: 2%;
  }

  p {
    font-size: 20px;
    margin: 10px;
    color: white;
  }

  a {
    text-decoration: none;
    color: var(--color--secondary);
    margin: 0 0 0 0;
    padding: 0px;
    justify-content: space-between;
    :hover {
      color: var(--color--secondary);
    }
    p {
      position: relative;
      bottom: 0;
    }
  }
`;

export { Card, Texte };
