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
            <p>Numero de rue</p>
            <input type="number" id="number" placeholder="Numero de rue" />
            <p>Nom de la rue</p>
            <input type="text" id="nameStreet" placeholder="Nom de rue" />
            <p>Code postal</p>
            <input type="number" id="ZipCode" placeholder="Code postal" />
            <p>Ville</p>
            <input type="text" id="Ville" placeholder="Ville" />
          </SButtons>
        </SListAdress>
        <Map />
      </SContainer>
    </>
  );
}
export default Localisation;
