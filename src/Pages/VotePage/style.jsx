import styled from 'styled-components';

const VoteContainer = styled.div`
  margin: 5% 5%;
  height: 100%;
  padding: 15px;
  display: flex;
  flex-direction: column;
  text-align: center;

  h1 {
    font-size: 40px;
    margin: 10px;
  }

  div.voteContainer {
    display: flex;
    flex-direction: column;
    background: var(--color--secondary);
    color: var(--color--thirdary);
  }

  div.TopVoteCardWrapper {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }

  div.VoteCardContainer {
    margin: 0% 5%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    color: var(--color--thirdary);
  }

  h3 {
    color: black;
    margin: 5% 10%;
    font-size: 20px;
  }
`;

export default VoteContainer;
