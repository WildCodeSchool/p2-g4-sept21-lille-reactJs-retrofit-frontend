import axios from 'axios';
import { useEffect } from 'react';
import Cookies from 'universal-cookie';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Header from 'Components/Header';
import SignInModal from './Components/SignInModal';
import Signup from './Pages/Signup';
import Footer from './Components/Footer/index';
import Home from './Pages/Home';
import Faq from './Pages/Faq';
import LegalNotice from './Pages/LegalNotice';
import Team from './Pages/Team/index';
import Cars from './Pages/Cars/index';
import CarsDetails from './Pages/CarsDetails/index';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const cookies = new Cookies();
    axios
      .post('http://localhost:8123/auth/login', {
        token: cookies.get('user_token'),
      })
      .then((response) => {
        const user = response.data;
        dispatch({ type: 'LOGGEDIN', user });
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
        }
      });
  }, []);

  return (
    <>
      <SignInModal />
      <Header />
      <Routes>
        <Route path="/" element={<Home />}>
          Home
        </Route>
        <Route path="/faq" element={<Faq />}>
          Faq
        </Route>
        <Route path="/equipe" element={<Team />}>
          Team
        </Route>
        <Route path="/register" element={<Signup />} />
        <Route path="/mentionsLegales" element={<LegalNotice />} />

        <Route path="Vehicules/:name" element={<CarsDetails />} />
        <Route path="Vehicules/" element={<Cars />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </>
  );
}
