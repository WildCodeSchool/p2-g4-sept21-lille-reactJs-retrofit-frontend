import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header/index';
import Footer from './components/Footer/Footer';
import Home from './Pages/Home';
import Team from './Pages/Team/index';

export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />}>
          Home
        </Route>
        <Route path="/equipe" element={<Team />}>
          Home
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}
