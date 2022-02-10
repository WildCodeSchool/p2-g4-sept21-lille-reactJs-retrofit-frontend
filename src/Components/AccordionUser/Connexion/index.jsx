import { Content, Row, Row2, Button } from './style';

export default function Connexion() {
  return (
    <>
      <Content>
        <Row>
          <p>e-mail :</p>
          <input type="email" />
          <p>Confirmer l&apos;e-mail :</p>
          <input type="email" />
          <Button>
            <input type="submit" value="Modifier" />
          </Button>
        </Row>
        <Row2>
          <p>Nouveau mot de passe:</p>
          <input type="search" />
          <p>Confirmation du mot de passe:</p>
          <input type="search" />
        </Row2>
      </Content>
    </>
  );
}
