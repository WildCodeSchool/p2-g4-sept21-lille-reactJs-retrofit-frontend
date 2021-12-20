import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Pages/Home';

export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}>
          Home
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}
