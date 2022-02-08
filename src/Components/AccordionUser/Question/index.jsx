import { Content, BorderContainer } from './style';

export default function Question() {
  return (
    <>
      <Content>
        <BorderContainer>
          <h4>Posté le 01/05/2021:</h4>
          <p>
            J&apos;ai une vieille 4L qui appartenait à mon père, elle est en bon
            état mais pensez-vous qu&apos;elle puisse être rétrofitée ?
          </p>
        </BorderContainer>
        <BorderContainer>
          <h4>Posté le 12/12/2021:</h4>
          <p>
            Est-ce que le retrofitting doit être reproduit sur le véhicule après
            quelques années ou est-ce définitif ?
          </p>
        </BorderContainer>
      </Content>
    </>
  );
}
