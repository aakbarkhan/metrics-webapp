import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Navbar';
import Home from './components/main';
import DetailLists from './components/detailList';
import './App.css';

const App = () => (
  <BrowserRouter>
    <Nav />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/:country" element={<DetailLists />} />
    </Routes>
  </BrowserRouter>
);

export default App;
