import { Content, Row, Row2, Button } from './style';

export default function Information() {
  return (
    <>
      <Content>
        <Row>
          <p>Nom :</p>
          <input type="search" />
          <p>Prénom :</p>
          <input type="search" />
          <p>Mobile :</p>
          <input type="search" />
          <Button>
            <input type="submit" value="Modifier" />
          </Button>
        </Row>
        <Row2>
          <p>N° :</p>
          <input type="search" />
          <p>Rue :</p>
          <input type="search" />
          <p>Ville :</p>
          <input type="search" />
          <p>Code postal :</p>
          <input type="search" />
        </Row2>
      </Content>
    </>
  );
}
