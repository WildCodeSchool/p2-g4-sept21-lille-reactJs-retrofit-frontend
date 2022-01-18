import AccordionUsers from 'Components/AccordionUsers';
import Question from 'Components/AccordionUser/Question';
import { Container, Button } from './style';

export default function Profile() {
  const data = [
    { key: 1, title: 'Test', component: [Question] },
    { key: 2, title: 'Test2', component: Question },
    { key: 3, title: 'Test3', component: Question },
    { key: 4, title: 'Test4', component: Question },
    { key: 5, title: 'Test5', component: Question },
    { key: 6, title: 'Test6', component: Question },
  ];
  return (
    <div>
      <Container>
        <h1>Bienvenue Jean-philipe</h1>
        {data.map(({ title, component }) => {
          return <AccordionUsers title={title} component={component} />;
        })}
        <Button>Déconexion</Button>
      </Container>
    </div>
  );
}
