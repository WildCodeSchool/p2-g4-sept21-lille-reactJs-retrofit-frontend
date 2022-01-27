import { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { VoteContainer, ProgressContainer } from './style';

const VoteCard = ({ ...car }) => {
  const location = useLocation().pathname;
  const dispatch = useDispatch();
  const votes = car.VoteNbr;
  const [voteValue, setVoteValue] = useState(votes);
  const voteStorage = useSelector((state) => state.vote);
  const userStorage = useSelector((state) => state.id);

  function upVote() {
    dispatch({ type: 'UPVOTE' });
    if (voteValue >= 30) {
      setVoteValue(30);
    } else {
      setVoteValue(voteValue + 1);
    }
    axios
      .put('/cars', {
        carId: car.id,
        userId: userStorage,
      })
      .then((response) => {
        setVoteValue(response.data);
      })
      .catch((error) => {
        if (error.response) {
          console.log(error);
        }
      });
  }
  useEffect(async () => {
    if ((await !userStorage) && location === '/vote') {
      dispatch({ type: 'OPENSIGNIN' });
    }
  }, []);

  return (
    <>
      <VoteContainer>
        <div className="imageContainer">
          <img src={car.image} alt="VW Golf 1 GTI" />
        </div>
        <h1 className="titleArea">
          {car.brand} {car.model}
        </h1>
        <p className="priceArea">A partir de {car.price}€</p>
        {voteStorage < 2 && userStorage ? (
          <button type="button" onClick={upVote}>
            {location === '/' ? 'ACCEDEZ AUX VOTES' : 'VOTEZ'}
          </button>
        ) : (
          <button
            type="button"
            onClick={upVote}
            disabled
            className="disabledBtn"
          >
            {!userStorage
              ? 'CONNECTEZ-VOUS POUR VOTER'
              : `MERCI D'AVOIR PARTICIPÉ`}
          </button>
        )}
        <ProgressContainer>
          <progress max="30" value={voteValue} />
          {voteValue >= 30 ? (
            <p className="progressLabel">Vote Terminé !</p>
          ) : (
            <p className="progressLabel">{voteValue || 0} Votes / 30 </p>
          )}
        </ProgressContainer>
      </VoteContainer>
    </>
  );
};

export default VoteCard;
