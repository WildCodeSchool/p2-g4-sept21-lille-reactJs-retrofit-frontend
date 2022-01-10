import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header/index';
import Footer from './Components/Footer/index';
import SignUpModal from './Components/SignUpModal';
import SignInModal from './Components/SignInModal';
import Home from './Pages/Home';
import Team from './Pages/Team/index';

export default function App() {
  return (
    <div>
      <SignUpModal />
      <SignInModal />
      <Header />
      <Routes>
        <Route path="/" element={<Home />}>
          Home
        </Route>
        <Route path="/equipe" element={<Team />}>
          Team
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}
