import { useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';

import {
  Overlay,
  ModalContainer,
  MainContainer,
  Input,
  ClosureContainer,
} from './style';

export default function SignUpModal() {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [password, setPassword] = useState('');
  const [repeadPass, setRepeadPass] = useState('');
  const [email, setEmail] = useState('');
  const [resErrorMessage, setResErrorMessage] = useState('');
  const [resMessage, setResMessage] = useState('');

  const SignInfo = {
    firstname: firstname.toLowerCase(),
    lastname: lastname.toLowerCase(),
    password,
    repeadPass,
    mail: email.toLowerCase(),
  };

  const SendInfo = (evt) => {
    evt.preventDefault();
    setResErrorMessage('');
    setResMessage('');
    axios
      .post('http://localhost:8123/auth/signup', SignInfo)
      .then((response) => {
        setResMessage(response.data);
      })
      .catch((error) => {
        if (error.response) {
          setResErrorMessage(error.response.data);
        }
      });
  };

  const modalState = useSelector((state) => state.signUpModal);
  const dispatch = useDispatch();

  return (
    <>
      {modalState && (
        <Overlay>
          <ModalContainer>
            <ClosureContainer>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                className="bi bi-x-lg"
                viewBox="0 0 16 16"
                onClick={() => {
                  dispatch({ type: 'CLOSESIGNUP' });
                }}
              >
                <path
                  fillRule="evenodd"
                  d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"
                />
                <path
                  fillRule="evenodd"
                  d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"
                />
              </svg>
            </ClosureContainer>
            <MainContainer>
              <h1>Inscription</h1>
              <Input>
                Nom
                <input
                  type="text"
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                />
              </Input>
              <Input>
                Prenom
                <input
                  type="text"
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                />
              </Input>
              <Input>
                Mot de passe
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
                Entrez à nouveau votre mot de passe
                <input
                  type="password"
                  value={repeadPass}
                  onChange={(e) => setRepeadPass(e.target.value)}
                />
              </Input>
              <Input>
                Adresse e-mail
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
              <button type="submit" onClick={SendInfo}>
                S&#39;inscrire
              </button>
            </MainContainer>
          </ModalContainer>
        </Overlay>
      )}
    </>
  );
}
