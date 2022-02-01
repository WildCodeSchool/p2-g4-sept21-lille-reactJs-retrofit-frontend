import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import { MainContainer, Input } from './style';

export default function Signup() {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPass, setRepeatPass] = useState('');
  const [email, setEmail] = useState('');
  const [resErrorMessage, setResErrorMessage] = useState('');
  const [resMessage, setResMessage] = useState('');
  const navigate = useNavigate();

  const SignInfo = {
    firstname: firstname.toLowerCase(),
    lastname: lastname.toLowerCase(),
    password,
    repeatPass,
    mail: email.toLowerCase(),
  };

  const SendInfo = (evt) => {
    evt.preventDefault();
    setResErrorMessage('');
    setResMessage('');
    axios
      .post('http://localhost:3031/auth/signup', SignInfo)
      .then((response) => {
        setResMessage(response.data);
        setFirstname('');
        setLastname('');
        setPassword('');
        setRepeatPass('');
        setEmail('');
        setResMessage('');
        navigate('/');
        toast.success(
          `Inscription réussie, vous allez recevoir un mail pour valider votre compte`,
          {
            position: toast.POSITION.BOTTOM_RIGHT,
          }
        );
      })
      .catch((error) => {
        if (error.response) {
          setResErrorMessage(error.response.data);
        }
      });
  };

  return (
    <>
      <MainContainer>
        <h1>
          Devenez membre de <span>EVeR</span>etrofit
        </h1>
        <h2>
          Inscrivez-vous gratuitement en 2 secondes ! On ne postera rien sans
          votre accord.
        </h2>
        <Input>
          <p>Nom</p>
          <input
            type="text"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
        </Input>
        <Input>
          <p>Prenom</p>
          <input
            type="text"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
        </Input>
        <Input>
          <p>Adresse e-mail</p>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span className="success">{resMessage && resMessage}</span>
          <span className="error">
            {resErrorMessage && !resMessage && resErrorMessage}
          </span>
        </Input>
        <Input>
          <p>Mot de passe</p>
          {/* - at least 8 characters - must contain at least 1
          uppercase letter, 1 lowercase letter, and 1 number - Can contain
          special characters */}
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Input>
        <Input>
          <p>Entrez à nouveau votre mot de passe</p>
          <input
            type="password"
            value={repeatPass}
            onChange={(e) => setRepeatPass(e.target.value)}
          />
        </Input>

        <button type="submit" className="submitButton" onClick={SendInfo}>
          Crée mon compte
        </button>
      </MainContainer>
    </>
  );
}
