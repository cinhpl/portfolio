import './App.css';
import { Routes, Route } from 'react-router-dom';

import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import CV from './components/pages/CV';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className='app'>
      <Header />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/curriculum' element={<CV />} />
          <Route exact path='/projects' element={<Projects />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
