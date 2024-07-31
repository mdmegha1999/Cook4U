import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home'; // Adjust the path if necessary
import DontMiss from './Pages/DontMiss';
import ProductList from './Pages/ProductList';
// import ManuData from './Pages/ManuData'; // Adjust the path if necessary

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dont-miss" element={<DontMiss />} />
        <Route path="/products" element={<ProductList />} />
        {/* <Route path="/manu-data" element={<ManuData />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
