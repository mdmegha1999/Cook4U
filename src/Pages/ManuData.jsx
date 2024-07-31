import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DontMiss from './DontMiss';
import ProductList from './ProductList'; // Adjust the path if necessary
import { useNavigate } from "react-router-dom";


function ManuData() {
    const navigate = useNavigate();
    return (
        <div>
          <button onClick={() => navigate(-1)}>go back</button>
          <Routes>
            <Route path="/" element={<DontMiss />} />
        <Route path="/products" element={<ProductList />} />
          </Routes>
        </div>
    );
  }
  export default ManuData;
