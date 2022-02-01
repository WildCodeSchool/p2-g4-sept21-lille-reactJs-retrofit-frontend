import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import VoteCard from '../../Components/VoteCard';
import VoteContainer from './style';

export default function VotePage() {
  const [carsList, setCarsList] = useState([]);
  const [topCars, setTopCars] = useState([]);

  useEffect(async () => {
    axios
      .get(`/cars`)
      .then(({ data }) => {
        setCarsList(data);
        setTopCars(data.slice(0, 3));
      })
      .catch((err) => {
        toast.error(err);
      });
  }, []);

  return (
    <VoteContainer>
      <div className="voteContainer">
        <h1>TOP VOTE</h1>
        <div className="TopVoteCardWrapper">
          {topCars.map((car) => {
            return <VoteCard {...car} />;
          })}
        </div>
      </div>

      <div className="h3Container">
        <h3>
          Votez pour le véhicule que vous souhaitez rétrofiter. Une fois le
          nombre de votes atteint, le rétrofit de ce véhicule démarrera pour
          repondre aux demandes le plus rapidement possible.
        </h3>
      </div>
      <div className="VoteCardContainer">
        {carsList.map((car) => {
          return <VoteCard {...car} />;
        })}
      </div>
    </VoteContainer>
  );
}
