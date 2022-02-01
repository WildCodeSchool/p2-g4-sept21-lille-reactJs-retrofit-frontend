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
    flex-flow: row wrap;
    justify-content: center;
  }
  div.VoteCardContainer {
    margin: 0% 5%;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    color: var(--color--thirdary);
  }
  h3 {
    font-size: 14px;
    width: 280px;
    margin: 0;
    padding: 6px 35px 0 0;
    color: var(--color--thirdary);
  }
`;

export default VoteContainer;
