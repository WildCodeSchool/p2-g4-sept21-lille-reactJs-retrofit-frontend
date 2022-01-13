import VéhiculeCard from '../../Components/VéhiculeCard';
import SCarsView from './style';

const véhicules = [
  {
    name: 'Ctiroen C3',
    url: 'https://cdn.wheel-size.com/automobile/body/citroen-c3-2013-2015-1627380267.7414687.jpg',
  },
  {
    name: 'Ctiroen DS3',
    url: 'https://d17kynu4zpq5hy.cloudfront.net/igi/oscaro/mqVAgKQAsHkFpMic.large',
  },
  {
    name: 'Renault Clio 4',
    url: 'https://www.automobile-magazine.fr/asset/cms/186332/config/134647/renault-clio-e-tech-limited-2021.jpg',
  },
  {
    name: 'Renault Clio 3',
    url: 'https://d17kynu4zpq5hy.cloudfront.net/igi/oscaro/lEsUc2W4GFtbBtiv.large',
  },
  {
    name: 'Toyota Aygo',
    url: 'https://www.sayarti.tn/wp-content/uploads/2017/09/toyota_aygo_bsb_voiture_populaire_tunisie_2016_arrivage.jpg',
  },
  {
    name: 'Toyota Yaris',
    url: 'https://img4.autodeclics.com/photo_article/80371/11491/1200-L-une-nouvelle-finition-design-pour-la-yaris.jpg',
  },
];

function Véhicules() {
  return (
    <SCarsView>
      {véhicules.map((véhicule) => {
        return <VéhiculeCard {...véhicule} />;
      })}
    </SCarsView>
  );
}

export default Véhicules;
