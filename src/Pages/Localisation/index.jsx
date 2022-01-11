import Map from '../../Components/Map/index';
import { SContainer, SListAdress, SButtons } from './style';

function Localisation() {
  return (
    <>
      <SContainer>
        <SListAdress>
          <SButtons>
            <p>Nom du garage</p>
            <input type="text" id="nameGarage" placeholder="Nom du garage" />
          </SButtons>
        </SListAdress>
        <Map />
      </SContainer>
    </>
  );
}
export default Localisation;
