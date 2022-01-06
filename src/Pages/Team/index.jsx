import TeamCard from '../../Components/TeamCard/index';
import { STeam, TeamView, Row, Row2 } from './style';

const team = [
  {
    firstName: 'Anthony',
    lastName: 'Tartare',
    role: 'CEO',
    profilPic: 'https://zupimages.net/up/21/51/3a8s.png',
    linkedinUrl: 'https://www.linkedin.com/',
  },
  {
    firstName: 'Capendu',
    lastName: 'Kevin',
    role: 'CEO',
    profilPic: 'https://zupimages.net/up/21/51/36lc.png',
    linkedinUrl: 'https://www.linkedin.com/',
  },
  {
    firstName: 'Capronnier',
    lastName: 'Eymeric',
    role: 'CEO',
    profilPic: 'https://zupimages.net/up/21/51/aci8.png',
    linkedinUrl: 'https://www.linkedin.com/',
  },
  {
    firstName: 'Turcott',
    lastName: 'Alice',
    role: 'Développeur Web',
    profilPic: 'https://zupimages.net/up/21/51/9ke2.png',
    linkedinUrl: 'https://www.linkedin.com/',
  },
  {
    firstName: 'Grandville',
    lastName: 'Maheu',
    role: 'RH',
    profilPic: 'https://zupimages.net/up/21/51/g3i4.png',
    linkedinUrl: 'https://www.linkedin.com/',
  },
  {
    firstName: 'Laprise',
    lastName: 'Aurélie',
    role: 'Chef de projet',
    profilPic: 'https://zupimages.net/up/21/51/gc4y.png',
    linkedinUrl: 'https://www.linkedin.com/',
  },
];

export default function Team() {
  return (
    <STeam>
      <Row>
        <h1>
          La Team <span>EVeR</span>etrofit
        </h1>
        <button type="button">Rejoignez la team</button>
      </Row>
      <Row2>
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
      </Row2>
      <TeamView>
        {team.map((data) => {
          return (
            <TeamCard
              firstName={data.firstName}
              lastName={data.lastName}
              role={data.role}
              profilPic={data.profilPic}
              linkedinUrl={data.linkedinUrl}
            />
          );
        })}
      </TeamView>
    </STeam>
  );
}
