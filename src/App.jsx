import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header/index';
import Footer from './Components/Footer/index';
import SignUpModal from './Components/SignUpModal';
import SignInModal from './Components/SignInModal';
import Home from './Pages/Home';
import LegalNotice from './Pages/LegalNotice';

export default function App() {
  return (
    <div>
      <SignUpModal />
      <SignInModal />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/mentionsLegales" element={<LegalNotice />} />
      </Routes>
      <Footer />
    </div>
  );
}
