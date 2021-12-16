import Accordion from '../../Components/Accordion/index';
import { Container, SendBtn } from './style';

export default function Faq() {
  const accordionData = [
    {
      title: 'Le rétrofit',
      question: `Depuis quand le rétrofit est autorisé en France ?`,
      content: `Quisque eu fringilla dolor, sed feugiat nulla. 
        Pellentesque et lorem et ante volutpat efficitur. 
        Pellentesque fringilla, lorem eget consectetur luctus, 
        metus erat consequat massa, nec consequat est dolor eget magna. 
        Suspendisse fringilla sed nisi tristique ultricies. Phasellus 
        facilisis tortor mauris, non convallis libero interdum non. 
        Nulla sed ullamcorper leo. Quisque porta mi nunc. Vestibulum ac
        dui eget sapien ultrices eleifend vitae eu neque. Ut pulvinar 
        eros ut sem aliquet, auctor aliquam est posuere. Aliquam non posuere lectus. `,
    },
    {
      title: `L'entreprise`,
      question: `Comment se passe le rétrofit ?`,
      content: `Quisque eu fringilla dolor, sed feugiat nulla. 
        Pellentesque et lorem et ante volutpat efficitur. 
        Pellentesque fringilla, lorem eget consectetur luctus, 
        metus erat consequat massa, nec consequat est dolor eget magna. 
        Suspendisse fringilla sed nisi tristique ultricies. Phasellus 
        facilisis tortor mauris, non convallis libero interdum non. 
        Nulla sed ullamcorper leo. Quisque porta mi nunc. Vestibulum ac
        dui eget sapien ultrices eleifend vitae eu neque. Ut pulvinar 
        eros ut sem aliquet, auctor aliquam est posuere. Aliquam non posuere lectus. `,
    },
    {
      title: `L'environnement`,
      question: `Combien de temps prend un rétrofitage ?`,
      content: `Quisque eu fringilla dolor, sed feugiat nulla. 
        Pellentesque et lorem et ante volutpat efficitur. 
        Pellentesque fringilla, lorem eget consectetur luctus, 
        metus erat consequat massa, nec consequat est dolor eget magna. 
        Suspendisse fringilla sed nisi tristique ultricies. Phasellus 
        facilisis tortor mauris, non convallis libero interdum non. 
        Nulla sed ullamcorper leo. Quisque porta mi nunc. Vestibulum ac
        dui eget sapien ultrices eleifend vitae eu neque. Ut pulvinar 
        eros ut sem aliquet, auctor aliquam est posuere. Aliquam non posuere lectus. `,
    },
  ];

  return (
    <div>
      <Container>
        {accordionData.map(({ title, content, question }) => (
          <Accordion title={title} content={content} question={question} />
        ))}
        <SendBtn>Envoyez-nous vos questions</SendBtn>
      </Container>
    </div>
  );
}
