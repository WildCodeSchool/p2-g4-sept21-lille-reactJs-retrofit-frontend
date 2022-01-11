import { useState } from 'react';
import { SForm, Button } from './Style';

export default function Form() {
  const [chooseOption, setChooseOption] = useState('info');
  return (
    <SForm>
      <form>
        <select
          onChange={(e) => {
            setChooseOption(e.target.value);
          }}
        >
          <option value="info">Contactez-nous pour un renseignement</option>
          <option value="partners">Contactez-nous pour un partenariat</option>
          <option value="meet-us">Nous rencontrer</option>
          <option value="advice">
            Contactez-nous pour un conseil technique
          </option>
          <option value="client">Service Client</option>
          <option value="sav">Service Après Vente</option>
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
      <Button>
        <input type="submit" value="Envoyer" />
      </Button>
    </SForm>
  );
}
