import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Navbar';
import Home from './components/main';
import './App.css';

const App = () => (
  <BrowserRouter>
    <Nav />
    <Routes>
      <Route exact path="/" element={<Home />} />
    </Routes>
  </BrowserRouter>
);

export default App;
