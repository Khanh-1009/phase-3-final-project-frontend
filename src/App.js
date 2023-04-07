import './App.css';
import React from 'react';
import Header from './Header'
import ProductPage from './ProductPage';
import NavBar from './NavBar';

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <ProductPage />
    </div>
  );
}

export default App;
