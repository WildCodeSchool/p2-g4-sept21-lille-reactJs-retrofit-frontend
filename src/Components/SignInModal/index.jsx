import { useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import Cookies from 'universal-cookie';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

import {
  Overlay,
  ModalContainer,
  MainContainer,
  Input,
  ClosureContainer,
} from './style';

export default function SignInModal() {
  const modalState = useSelector((state) => state.signInModal);
  const dispatch = useDispatch();
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [resErrorMessage, setResErrorMessage] = useState('');
  const [resMessage, setResMessage] = useState([]);

  const SignInfo = {
    password,
    mail: email.toLowerCase(),
  };
  const SendInfo = (evt) => {
    evt.preventDefault();
    setResErrorMessage('');
    setResMessage('');
    axios
      .post('http://localhost:3031/auth/login', SignInfo)
      .then((response) => {
        const { token, user } = response.data;

        setResMessage(response.data.welcome);
        dispatch({ type: 'LOGGEDIN', user });
        toast(`Bonjour ${user.firstname} !`, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });

        const cookies = new Cookies();
        cookies.set('user_token', token);
      })

      .catch((error) => {
        if (error.response) {
          setResErrorMessage(error.response.data);
        }
      });
  };

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
                  dispatch({ type: 'CLOSESIGNIN' });
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
              <h1>Accédez aux fonctionnalités en vous connectant</h1>
              <p>
                Pas de compte ?
                <Link to="/register">
                  <button
                    className="noAccount"
                    type="submit"
                    onClick={() => {
                      dispatch({ type: 'CLOSESIGNIN' });
                    }}
                  >
                    Inscrivez-vous
                  </button>
                </Link>
              </p>
              <Input>
                Adresse e-mail
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Input>
              <Input>
                Mot de passe
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Input>
              <button className="submitBtn" type="submit" onClick={SendInfo}>
                Connexion
              </button>
              <span className="success">
                {resMessage && resMessage.welcome}
              </span>
              <span className="error">
                {resErrorMessage && !resMessage && resErrorMessage}
              </span>
            </MainContainer>
          </ModalContainer>
        </Overlay>
      )}
    </>
  );
}
