import { useEffect, useState } from 'react';
import { SForm, Button } from './Style';

export default function Form() {
  const [chooseOption, setChooseOption] = useState('info');
  window.scrollTo(0, 0);
  useEffect(() => {
    const url = window.location.href.split('/')[3];
    switch (url) {
      case 'renseignements':
        setChooseOption('info');
        break;
      case 'partenariats':
        setChooseOption('partners');
        break;
      case 'nousrencontrer':
        setChooseOption('meet-us');
        break;
      case 'serviceclient':
        setChooseOption('client');
        break;
      case 'conseiltechnique':
        setChooseOption('advice');
        break;
      case 'sav':
        setChooseOption('sav');
        break;
      default:
        break;
    }
  }, []);

  return (
    <SForm>
      <form>
        <select
          onChange={(e) => {
            setChooseOption(e.target.value);
          }}
        >
          <option value="info" selected={chooseOption === 'info'}>
            Contactez-nous pour un renseignement
          </option>
          <option value="partners" selected={chooseOption === 'partners'}>
            Contactez-nous pour un partenariat
          </option>
          <option value="meet-us" selected={chooseOption === 'meet-us'}>
            Nous rencontrer
          </option>
          <option value="advice" selected={chooseOption === 'advice'}>
            Contactez-nous pour un conseil technique
          </option>
          <option value="client" selected={chooseOption === 'client'}>
            Service Client
          </option>
          <option value="sav" selected={chooseOption === 'sav'}>
            Service Après Vente
          </option>
        </select>
        <input type="search" placeholder="Nom" />
        <input type="search" placeholder="Prénom*" required="required" />
        <input
          type="search"
          placeholder="Adresse e-mail*"
          required="required"
        />
        <input type="search" placeholder="Numéro de téléphone" />
        <input
          className="tallInput"
          type="search"
          placeholder="Raison Sociale"
          disabled={
            chooseOption === 'info' ||
            chooseOption === 'advice' ||
            chooseOption === 'meet-us' ||
            chooseOption === 'sav' ||
            chooseOption === 'client'
          }
        />
        <input
          className="tallInput"
          type="search"
          placeholder="Entreprise"
          disabled={
            chooseOption === 'info' ||
            chooseOption === 'advice' ||
            chooseOption === 'partners' ||
            chooseOption === 'sav' ||
            chooseOption === 'client'
          }
        />
        <input
          className="tallInput"
          type="search"
          placeholder="Motif*"
          disabled={
            chooseOption === 'info' ||
            chooseOption === 'partners' ||
            chooseOption === 'advice'
          }
        />
        <input className="comments" type="search" placeholder="Commentaire" />
      </form>
      <Button>Envoyer</Button>
    </SForm>
  );
}
