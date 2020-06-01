import React from 'react';
import logo from './logo.svg';
import Products from './components/products/products';
import './App.css';

function App() {
  return (
    <>
    <div className="App">
      <header className="App-header">
        <h2 className="ml-2">
          Yummy Pizza Store
        </h2>
        
      </header>
    </div>
    <Products />
    
   </>
  );
}

export default App;
