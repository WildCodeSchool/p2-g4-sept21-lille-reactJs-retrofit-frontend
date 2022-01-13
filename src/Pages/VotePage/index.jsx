import VoteCard from '../../Components/VoteCard';
import VoteContainer from './style';

export default function VotePage() {
  return (
    <VoteContainer>
      <div className="voteContainer">
        <h1>TOP VOTE</h1>
        <div className="TopVoteCardWrapper">
          <VoteCard />
          <VoteCard />
          <VoteCard />
        </div>
      </div>

      <div className="h3Container">
        <h3>
          Votez pour le véhicule que vous souhaitez rétrofité. Une fois le
          nombre de votes atteint, le rétrofit de ce véhicule démarrera pour
          repondre aux demandes le plus rapidement possible.
        </h3>
      </div>
      <div className="VoteCardContainer">
        <VoteCard />
        <VoteCard />
        <VoteCard />
        <VoteCard />
        <VoteCard />
        <VoteCard />
      </div>
    </VoteContainer>
  );
}
