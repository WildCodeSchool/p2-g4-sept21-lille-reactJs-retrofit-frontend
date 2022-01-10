import { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import TeamCard from '../../Components/TeamCard/index';
import { STeam, TeamView, Row, Row2 } from './style';

export default function Team() {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);

    axios
      .get(`http://localhost:3031/team`)
      .then(({ data }) => {
        console.log(data);
        if (Array.isArray(data)) setTeam(data);
        else throw new Error('Failed API call');
      })
      .catch(() => {
        toast.error('No Team Members found !', {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  }, []);

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
