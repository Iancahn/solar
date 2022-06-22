import React from 'react';
// Global Style
import Globalstyle from './components/GlobalStyle';
// Import Pages
import Home from './pages/Home';
import Residential from './pages/Residential';
import Commercial from './pages/Commercial';
import ContactUs from './pages/ContactUs';
// Components
import Nav from './components/Nav';
// Router
import { Routes, Route, useLocation } from 'react-router-dom';
// Animation
import { AnimatePresence } from 'framer-motion';

function App() {
  return (
    <div className="App">
      <Globalstyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path='/' exact element={<Home />} />
          <Route path='/residential' exact element={<Residential />} />
          <Route path='/commercial' exact element={<Commercial />} />
          <Route path='/contact' exact element={<ContactUs />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
