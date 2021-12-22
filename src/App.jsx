import { Routes, Route } from 'react-router-dom';
import Form from './Components/Form/index';
import Header from './Components/Header/index';
import Footer from './Components/Footer/index';

import Home from './Pages/Home';

export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}>
          Home
        </Route>
        <Route path="/renseignements" element={<Form />}>
          Renseignement
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}
