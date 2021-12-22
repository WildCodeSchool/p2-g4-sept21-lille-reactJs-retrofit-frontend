import styled from 'styled-components';

const CardContainer = styled.div`
  background: var(--color--primary);
  padding: 1%;
  display: flex;
  flex-direction: column;
  margin: 25px;
  width: 300px;
  height: 400px;
  img {
    height: 150px;
    border: 1px solid black;
  }

  h1 {
    margin: 20px 0 0 0;
    font-size: 14px;
    color: grey;
  }

  p.newsContent {
    font-size: 20px;
    margin: 10px 0 0 0;
  }

  p.newsSource {
    position: relative;
    bottom: 0;
  }
  a {
    text-decoration: none;
    color: var(--color--secondary);
    margin: 0;
    :hover {
      color: var(--color--secondary);
    }
  }

  :hover {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
`;

export default CardContainer;
