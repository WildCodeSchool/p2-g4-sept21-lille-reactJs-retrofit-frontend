import styled from 'styled-components';

const VoteContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--color--thirdary);
  border-radius: 10px;
  border: 2px solid var(--color--secondary);
  margin: 20px 40px;
  padding: 5px;
  width: 310px;
  height: 360px;

  img {
    width: 250px;
    height: 150px;
  }

  h1.titleArea {
    color: black;
    font-size: 30px;
  }

  p.PriceArea {
    font-size: 20px;
    margin: 0 0 10px 0;
    color: var(--color--primary);
  }

  button {
    cursor: pointer;
    width: 90%;
    height: 40px;
    padding: 10px;
    margin: 10px;
    font-size: 20px;
    border: 1px solid black;
    border-radius: 10px;
    background-color: var(--color--primary);

    &.disabledBtn {
      font-size: 14px;
    }
  }
`;

const ProgressContainer = styled.div`
  padding: 0 0 20px 0;
  width: 90%;

  p.progressLabel {
    bottom: 0;
    margin: 0;
    position: relative;
    top: -30px;
    font-size: 20px;
    margin-bottom: 10px;
  }

  progress {
    background-color: var(--color--primary);
    border: 0;
    width: 100%;
    height: 40px;
    border-radius: 10px;
    border: none;
  }

  progress::-webkit-progress-bar {
    background-color: var(--color--secondary);
    width: 100%;
    height: 40px;
    border-radius: 10px;
    overflow: hidden;
    border: none;
  }

  progress::-webkit-progress-value {
    background-color: var(--color--primary);
    width: 100%;
    height: 40px;
    border-radius: 10px;
    overflow: hidden;
    border: none;
  }

  progress::-moz-progress-bar {
    background-color: var(--color--primary);
    width: 100%;
    height: 40px;
    border-radius: 10px;
    overflow: hidden;
    border: none;
  }
`;

export { VoteContainer, ProgressContainer };
