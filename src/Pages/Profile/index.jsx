import BaseAccordion from 'Components/AccordionUser/BaseAccordion';
import Information from 'Components/AccordionUser/Information';
import Connexion from 'Components/AccordionUser/Connexion';
import Ordered from 'Components/AccordionUser/Ordered';
import Question from 'Components/AccordionUser/Question';
import Coment from 'Components/AccordionUser/Coment';
import { Container, Button } from './style';

export default function Profile() {
  const data = [
    {
      title: 'modifier vos infromations personelles',
      components: <Information />,
    },
    {
      title: 'modifier vos identifiants de connexion',
      components: <Connexion />,
    },
    { title: 'Vos commandes', components: <Ordered /> },
    { title: 'Vos questions', components: <Question /> },
    { title: 'Envoyer un avis suite à une commande', components: <Coment /> },
  ];
  return (
    <div>
      <Container>
        <h1>Bienvenue Jean-philipe</h1>
        {data.map(({ title, components }) => {
          return <BaseAccordion title={title} components={components} />;
        })}
        <Button>Déconexion</Button>
      </Container>
    </div>
  );
}
