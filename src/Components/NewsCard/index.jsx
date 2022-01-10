import CardContainer from './style';

const NewsCard = ({ ...news }) => {
  return (
    <CardContainer>
      <img src={news.image} alt="à propos de la news" />
      <h1>Il y a 20h :{news.id}</h1>
      <p className="newsContent">{news.content}</p>
      <a href={news.source} target="_blank" rel="noreferrer">
        <p className="newsSource">Source : {news.source}</p>
      </a>
    </CardContainer>
  );
};

export default NewsCard;
