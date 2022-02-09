import { useDispatch, useSelector } from 'react-redux';
import Cookies from 'universal-cookie';
import BaseAccordion from 'Components/AccordionUser/BaseAccordion';
import Information from 'Components/AccordionUser/Information';
import Connexion from 'Components/AccordionUser/Connexion';
import Ordered from 'Components/AccordionUser/Ordered';
import Question from 'Components/AccordionUser/Question';
import Coment from 'Components/AccordionUser/Coment';
import { Link } from 'react-router-dom';
import { Container, Button } from './style';

export default function Profile() {
  const dispatch = useDispatch();
  const firstname = useSelector((state) => state.firstname);
  const data = [
    {
      title: 'Modifier vos informations personnelles',
      components: <Information />,
      id: 1,
    },
    {
      title: 'Modifier vos identifiants de connexion',
      components: <Connexion />,
      id: 2,
    },
    { title: 'Vos commandes', components: <Ordered />, id: 3 },
    { title: 'Vos questions', components: <Question />, id: 4 },
    {
      title: 'Envoyer un avis suite à une commande',
      components: <Coment />,
      id: 5,
    },
  ];

  const Loggout = () => {
    const cookies = new Cookies();
    cookies.remove('user_token');
    dispatch({ type: 'LOGGOUT' });
  };

  return (
    <div>
      <Container>
        <h1>
          Bienvenue sur votre espace <span>{firstname}</span>
        </h1>
        {data.map(({ title, components, id }) => {
          return (
            <BaseAccordion title={title} components={components} key={id} />
          );
        })}
        <Link to="/">
          <Button
            onClick={() => {
              Loggout();
            }}
          >
            Déconnexion
          </Button>
        </Link>
      </Container>
    </div>
  );
}
