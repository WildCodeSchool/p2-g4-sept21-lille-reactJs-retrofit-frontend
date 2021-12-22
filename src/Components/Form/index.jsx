import { SForm, Button } from './Style';

export default function Form() {
  return (
    <SForm>
      <p>Contactez-nous pour un renseignement</p>
      <form>
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
        />
        <input className="tallInput" type="search" placeholder="Entreprise" />
        <input className="tallInput" type="search" placeholder="Motif*" />
        <input className="comments" type="search" placeholder="Commentaire" />
      </form>
      <Button>
        <input type="submit" value="Envoyer" />
      </Button>
    </SForm>
  );
}
