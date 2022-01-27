import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import { SForm, Button, ParentButton } from './Style';

export default function Form() {
  const [chooseOption, setChooseOption] = useState('info');
  const [informations, setInformations] = useState({
    lastname: '',
    firstname: '',
    email: '',
    phoneNumber: '',
    businessName: '',
    companyName: '',
    subject: '',
    message: '',
  });

  const handleChange = (evt) => {
    const newInformations = { ...informations };
    newInformations[evt.target.name] = evt.target.value;
    setInformations(newInformations);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`/contact`, informations)
      .then(() => {
        toast(
          'Message envoyé ! Nous vous répondrons dans les plus brefs délais.'
        );
      })
      .catch(() => {
        toast('Saisie incorrecte');
      });
  };

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
      <form onSubmit={handleSubmit}>
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
        <input
          type="search"
          name="lastname"
          value={informations.lastname}
          onChange={handleChange}
          placeholder="Nom"
        />
        <input
          type="search"
          name="firstname"
          value={informations.firstname}
          onChange={handleChange}
          placeholder="Prénom*"
          required="required"
        />
        <input
          type="search"
          name="email"
          value={informations.email}
          onChange={handleChange}
          placeholder="Adresse e-mail*"
          required="required"
        />
        <input
          type="search"
          name="phoneNumber"
          value={informations.phoneNumber}
          onChange={handleChange}
          placeholder="Numéro de téléphone"
        />
        <input
          className="tallInput"
          type="search"
          name="businessName"
          value={informations.businessName}
          onChange={handleChange}
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
          name="companyName"
          value={informations.companyName}
          onChange={handleChange}
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
          name="subject"
          value={informations.subject}
          onChange={handleChange}
          placeholder="Motif*"
          disabled={
            chooseOption === 'info' ||
            chooseOption === 'partners' ||
            chooseOption === 'advice'
          }
        />
        <textarea
          className="message"
          name="message"
          value={informations.message}
          onChange={handleChange}
          placeholder="Tapez votre message ici..."
        />
        <ParentButton className="parentButton">
          <Button type="submit">Envoyer</Button>
        </ParentButton>
        <ToastContainer />
      </form>
    </SForm>
  );
}
