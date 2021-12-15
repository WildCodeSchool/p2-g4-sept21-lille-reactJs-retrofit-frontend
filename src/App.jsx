import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header/index';
import Home from './Pages/Home';

export default function App() {
  return (
    <div>
      <Header />
      <Home />
      <Routes>
        <Route path="/home" element={<Home />}>
          Home
        </Route>
      </Routes>
    </div>
  );
}
