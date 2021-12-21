import TeamCard from '../../Components/TeamCard/index';
import { STeam, TeamView } from './style';

const team = [
  {
    firstName: 'Anthony',
    lastName: 'Tartare',
    role: 'CEO',
    img: 'https://zupimages.net/up/21/51/3a8s.png',
    link: 'https://www.linkedin.com/',
  },
  {
    firstName: 'Capendu',
    lastName: 'Kevin',
    role: 'CEO',
    img: 'https://zupimages.net/up/21/51/36lc.png',
    link: 'https://www.linkedin.com/',
  },
  {
    firstName: 'Capronnier',
    lastName: 'Eymeric',
    role: 'CEO',
    img: 'https://zupimages.net/up/21/51/aci8.png',
    link: 'https://www.linkedin.com/',
  },
  {
    firstName: 'Turcotte',
    lastName: 'Alice',
    role: 'Développeur Web',
    img: 'https://zupimages.net/up/21/51/9ke2.png',
    link: 'https://www.linkedin.com/',
  },
  {
    firstName: 'Grandville',
    lastName: 'Maheu',
    role: 'RH',
    img: 'https://zupimages.net/up/21/51/g3i4.png',
    link: 'https://www.linkedin.com/',
  },
  {
    firstName: 'Laprise',
    lastName: 'Aurélie',
    role: 'Chef de projet',
    img: 'https://zupimages.net/up/21/51/gc4y.png',
    link: 'https://www.linkedin.com/',
  },
];

export default function Team() {
  return (
    <STeam>
      <div>
        <h1>Everetrofit</h1>
        <button type="button">Rejoignez la team</button>
      </div>
      <div>
        <p>
          EVeRetrofit c’est dans un premier temps trois amis passionnés par les
          véhicules que ce soit à la fois dans le domaine de l’automobile mais
          aussi dans les deux roues. Suite à nos masters dans le domaine de
          l’Automatique et Systèmes Electriques spécialisé dans les Véhicules
          intelligents Electriques à l’Université de Lille, nous souhaitons
          apporter notre empreinte dans la transition écologique et dans le
          développement des véhicules éléctriques tout en réduisant le nombre de
          voitures thermiques présent sur nos routes françaises.
        </p>
      </div>
      <TeamView>
        {team.map((data) => {
          return (
            <TeamCard
              firstName={data.firstName}
              lastName={data.lastName}
              role={data.role}
              img={data.img}
              link={data.link}
            />
          );
        })}
      </TeamView>
    </STeam>
  );
}
