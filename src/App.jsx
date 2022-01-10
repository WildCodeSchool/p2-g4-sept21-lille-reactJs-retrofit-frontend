import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header/index';
import Footer from './Components/Footer/index';
import SignUpModal from './Components/SignUpModal';
import SignInModal from './Components/SignInModal';
import Home from './Pages/Home';
import Faq from './Pages/Faq';

export default function App() {
  return (
    <div>
      <SignUpModal />
      <SignInModal />
      <Header />
      <Routes>
        <Route path="/home" element={<Home />}>
          Home
        </Route>
        <Route path="/faq" element={<Faq />}>
          Faq
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}
