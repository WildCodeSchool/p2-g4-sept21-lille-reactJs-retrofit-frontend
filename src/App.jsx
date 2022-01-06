import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header/index';
import Footer from './Components/Footer/index';

import Home from './Pages/Home';
import Localisation from './Pages/Localisation';

export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}>
          Home
        </Route>
        <Route path="/localisation" element={<Localisation />}>
          Localisation
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}
