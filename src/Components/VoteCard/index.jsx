import { useState } from 'react';
import { VoteContainer, ProgressContainer } from './style';

const VoteCard = () => {
  const [voteValue, setVoteValue] = useState(0);

  function upvote() {
    if (voteValue >= 30) {
      setVoteValue(30);
    } else setVoteValue(voteValue + 1);
  }

  return (
    <>
      <VoteContainer>
        <img src="https://i.imgur.com/XW6WVVR.png" alt="VW Golf 1 GTI" />
        <h1 className="titleArea">VW Golf 1 GTI</h1>
        <p className="PriceArea">A partir de 30 000€</p>
        <button type="button" onClick={upvote}>
          VOTEZ
        </button>

        <ProgressContainer>
          <progress max="30" value={voteValue} />
          {voteValue === 30 ? (
            <p className="progressLabel">Vote Terminé !</p>
          ) : (
            <p className="progressLabel">{voteValue} Votes / 30 </p>
          )}
        </ProgressContainer>
      </VoteContainer>
    </>
  );
};

export default VoteCard;
