import styled from 'styled-components';

const VoteContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--color--thirdary);
  border-radius: 10px;
  margin: 20px 40px;
  padding: 5px;
  width: 310px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 2px, rgba(0, 0, 0, 0.2) 0px 2px 4px,
    rgba(0, 0, 0, 0.2) 0px 4px 8px, rgba(0, 0, 0, 0.2) 0px 8px 16px,
    rgba(0, 0, 0, 0.2) 0px 16px 32px, rgba(0, 0, 0, 0.2) 0px 32px 64px;
  img {
    width: 250px;
    height: 150px;
  }
  h1.titleArea {
    color: black;
    font-size: 30px;
  }
  p.priceArea {
    font-size: 20px;
    margin: 0 0 10px 0;
    color: var(--color--primary);
  }
  button {
    cursor: pointer;
    width: 95%;
    height: 40px;
    padding: 10px;
    margin: 10px;
    font-size: 20px;
    border: none;
    border-radius: 8px;
    background-color: var(--color--primary);
    &.disabledBtn {
      font-size: 14px;
    }
  }
  h3 {
    font-size: 14px;
    width: 280px;
    margin: 0;
    padding: 6px 20px 0 0;
    color: var(--color--thirdary);
  }
`;

const ProgressContainer = styled.div`
  padding: 0;
  width: 95%;
  height: 47px;
  p.progressLabel {
    bottom: 0;
    margin: 0;
    position: relative;
    top: -32px;
    font-size: 25px;
    height: 40px;
  }
  progress {
    background-color: var(--color--secondary);
    border: 0;
    width: 100%;
    height: 40px;
    border-radius: 8px;
    border: none;
  }
  progress::-webkit-progress-bar {
    background-color: var(--color--secondary);
    width: 100%;
    height: 40px;
    border-radius: 8px;
    overflow: hidden;
    border: none;
  }
  progress::-webkit-progress-value {
    background-color: var(--color--secondary);
    width: 100%;
    height: 40px;
    border-radius: 8px;
    overflow: hidden;
    border: none;
  }
  progress::-moz-progress-bar {
    background-color: var(--color--primary);
    width: 100%;
    height: 40px;
    border-radius: 8px;
    overflow: hidden;
    border: none;
    padding-bottom: 5px;
  }
  progress::-moz-progress-label {
    top: 30px;
  }
`;

export { VoteContainer, ProgressContainer };
