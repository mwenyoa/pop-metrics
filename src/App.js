import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Category from './components/Category';
import Details from './components/Details';
import Header from './components/Header';

function App() {
  return (
    <>

      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Category />} />
            <Route path="/Details/:code" element={<Details />} exact />
          </Routes>
        </main>
      </Router>
    </>
  );
}

export default App;
