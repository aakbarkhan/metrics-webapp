import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Navbar';
import Home from './components/main';
import Details from './components/details';
import './App.css';

const App = () => (
  <BrowserRouter>
    <Nav />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/region" element={<Details />} />
    </Routes>
  </BrowserRouter>
);

export default App;
