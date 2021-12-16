import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header/index';
import Home from './Pages/Home';
import Faq from './Pages/Faq';

export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />}>
          Home
        </Route>
        <Route path="/faq" element={<Faq />}>
          Faq
        </Route>
      </Routes>
    </div>
  );
}
