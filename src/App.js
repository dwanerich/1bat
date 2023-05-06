import { Route, Routes, Router } from 'react-router-dom';

import './App.css';
import Body from './components/Body';
import Drums from './components/Drums';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
      <Route exact path="/" element={<Body />} />
      <Route exact path="/drumkit" element={<Drums />} />
        <Route exact path="/footer" element={<Footer />} />
      </Routes>
    </div>
  );
}

export default App;
