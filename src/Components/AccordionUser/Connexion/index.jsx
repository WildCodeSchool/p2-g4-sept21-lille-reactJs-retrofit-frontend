import { Content, Row, Row2, Button } from './style';

export default function Connexion() {
  return (
    <>
      <Content>
        <Row>
          <p>Nouvelle adresse e-mail :</p>
          <input type="email" />
          <p>Resaisir votre adresse e-mail :</p>
          <input type="email" />
          <Button>
            <input type="submit" value="Modifier" />
          </Button>
        </Row>
        <Row2>
          <p>Ancien mot de passe:</p>
          <input type="search" />
          <p>Nouveau mot de passe:</p>
          <input type="search" />
          <p>Confirmation du mot de passe:</p>
          <input type="search" />
        </Row2>
      </Content>
    </>
  );
}
