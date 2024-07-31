// import React, { useState, useEffect } from 'react';
// import './ProductList.css'; // Make sure the path is correct based on your project structure

// const ProductList = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [selectedType, setSelectedType] = useState('all'); // State for selected food type

//   const fetchProducts = async () => {
//     try {
//       const urls = [
//         '/bbqs.json', 
//         '/best-foods.json', 
//         '/breads.json',
//         '/burgers.json',
//         '/chocolates.json',
//         '/desserts.json',
//         '/drinks.json',
//         '/fried-chicken.json',
//         '/ice-cream.json',
//         '/manifest.json',
//         '/our-foods.json',
//         '/pizzas.json',
//         '/porks.json',
//         '/sandwiches.json',
//         '/sausages.json',
//         '/steaks.json'
//       ];
      
//       const fetchPromises = urls.map(url => fetch(url).then(response => {
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         return response.json();
//       }));

//       const results = await Promise.all(fetchPromises);
//       const combinedData = results.flat(); // Combine all fetched data into a single array
//       setProducts(combinedData);
//     } catch (err) {
//       setError(err.message);
//       console.error('Error fetching data:', err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const handleTypeChange = (event) => {
//     setSelectedType(event.target.value);
//   };

//   const filteredProducts = selectedType === 'all'
//     ? products
//     : products.filter(product => product.type === selectedType);

  
//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error}</p>;

//   return (
//     <div className="product-list">
//       <h1>Menu</h1>
//       <div>
//         <label htmlFor="food-type">Select Food Type: </label>
//         <select id="food-type" value={selectedType} onChange={handleTypeChange}>
//           <option value="all">All</option>
//           <option value="bbqs">BBQs</option>
//           <option value="best-foods">Best Foods</option>
//           <option value="breads">Breads</option>
//           <option value="burgers">Burgers</option>
//           <option value="chocolates">Chocolates</option>
//           <option value="desserts">Desserts</option>
//           <option value="drinks">Drinks</option>
//           <option value="fried-chicken">Fried Chicken</option>
//           <option value="ice-cream">Ice Cream</option>
//           <option value="our-foods">Our Foods</option>
//           <option value="pizzas">Pizzas</option>
//           <option value="porks">Porks</option>
//           <option value="sandwiches">Sandwiches</option>
//           <option value="sausages">Sausages</option>
//           <option value="steaks">Steaks</option>
//         </select>
//       </div>
//       <ul>
//         {filteredProducts.map(product => (
//           <li key={product.id} className="product-item">
//             <img src={product.img} alt={product.name} />
//             <h2>{product.name}</h2>
//             <p>{product.dsc}</p>
//             <p>Price: ${product.price ? product.price.toFixed(2) : 'N/A'}</p>
//             <p>Rating: {product.rate ? product.rate : 'N/A'} stars</p>
//             <p>Location: {product.country}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ProductList;






import React, { useState } from 'react';
import './ProductList.css'; // Make sure the path is correct based on your project structure

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchProducts = async (url) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const jsonData = await response.json();
      setProducts(jsonData);
    } catch (err) {
      setError(err.message);
      console.error('Error fetching data:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleButtonClick = (type) => {
    const url = `/${type}.json`;
    fetchProducts(url);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="product-list">
      <div className='Menu_header'>
      <h1>MENU CHART</h1>
      <div className='menu_type'>
        <button onClick={() => handleButtonClick('bbqs')}>BBQs</button>
        <button onClick={() => handleButtonClick('best-foods')}>Best Foods</button>
        <button onClick={() => handleButtonClick('breads')}>Breads</button>
        <button onClick={() => handleButtonClick('burgers')}>Burgers</button>
        <button onClick={() => handleButtonClick('chocolates')}>Chocolates</button>
        <button onClick={() => handleButtonClick('desserts')}>Desserts</button>
        <button onClick={() => handleButtonClick('drinks')}>Drinks</button>
        <button onClick={() => handleButtonClick('fried-chicken')}>Fried Chicken</button>
        <button onClick={() => handleButtonClick('ice-cream')}>Ice Cream</button>
        <button onClick={() => handleButtonClick('our-foods')}>Our Foods</button>
        <button onClick={() => handleButtonClick('pizzas')}>Pizzas</button>
        <button onClick={() => handleButtonClick('porks')}>Porks</button>
        <button onClick={() => handleButtonClick('sandwiches')}>Sandwiches</button>
        <button onClick={() => handleButtonClick('sausages')}>Sausages</button>
        <button onClick={() => handleButtonClick('steaks')}>Steaks</button>
      </div>
      </div>
      
      <ul>
        {products.map(product => (
          <li key={product.id} className="product-item">
            <img src={product.img} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.dsc}</p>
            <p>Price: ${product.price ? product.price.toFixed(2) : 'N/A'}</p>
            <p>Rating: {product.rate ? product.rate : 'N/A'} stars</p>
            <p>Location: {product.country}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
