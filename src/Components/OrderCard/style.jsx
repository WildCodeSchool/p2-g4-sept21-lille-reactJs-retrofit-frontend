import styled from 'styled-components';

const Col4 = styled.div`
  width: 100%;
  text-align: center;
  font-size: 25px;
  font-weight: bold;
  @media (max-width: 768px) {
    font-size: 20px;
  }
  p {
    margin-top: 45px;
    @media (max-width: 768px) {
      font-size: 20px;
    }
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 8px 12px 0 5px;
  border-radius: 8px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
  img {
    max-width: 20vw;
    min-height: 280px;
    margin: 8px 0 5px 12px;
    border-radius: 7px;
    @media (max-width: 768px) {
      width: 30%;
      margin: 8px 10px 5px 12px;
    }
    @media (max-width: 1400px) {
      min-height: 200px;
      min-width: 255px;
      max-height: 200px;
      max-width: 255px;
    }
  }
  @media (max-width: 768px) {
    width: 45%;
    margin: 8px 0 0 11px;
    border: none;
    flex-direction: column;
  }
`;

const Units = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 20%;
  border: 2px solid var(--color--primary);
  margin: 8px 12px 0 5px;
  border-radius: 8px;
  @media (max-width: 768px) {
    height: 21vw;
    width: 35vw;
    margin: 8px 0 0 11px;
    border: none;
    flex-direction: column;
  }
`;

const Col3 = styled.div`
  width: 100%;
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  p {
    margin-top: 15px;
    @media (max-width: 768px) {
      font-size: 20px;
    }
  }
`;

const Row2 = styled.div`
  padding: 0;
  width: 70%;
  height: 47px;
  border: 2px solid var(--color--primary);
  border-radius: 8px;
  margin-right: auto;
  margin-left: auto;
  margin-top: 30px;
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
    background-color: var(--color--primary);
    width: 100%;
    height: 40px;
    border-radius: 8px;
    overflow: hidden;
    border: none;
  }
  progress::-moz-progress-bar {
    background-color: var(--color--primary);
    width: 100%;
    height: 43px;
    border-radius: 5px;
    overflow: hidden;
    border: none;
    padding-bottom: 5px;
  }
  progress::-moz-progress-label {
    top: 30px;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const Value = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  @media (max-width: 768px) {
    flex-direction: column;
    width: 35vw;
    padding-top: 8px;
  }
`;

const Col1 = styled.div`
  width: 31%;
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  p {
    margin-top: 15px;
  }
`;

const Col2 = styled.div`
  width: 67%;
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  p {
    margin-top: 15px;
  }
  @media (max-width: 768px) {
    width: 70vw;
    display: flex;
    flex-direction: row;
    margin-right: auto;
    margin-left: auto;
  }
`;

export { Col1, Col2, Col4, Col3, Card, Row2, Units, Value };
