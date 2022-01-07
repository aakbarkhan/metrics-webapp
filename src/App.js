import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Navbar';
import Home from './components/main';
import Region from './components/countyregion';
import './App.css';

const App = () => (
  <BrowserRouter>
    <Nav />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/region" element={<Region />} />
    </Routes>
  </BrowserRouter>
);

export default App;
