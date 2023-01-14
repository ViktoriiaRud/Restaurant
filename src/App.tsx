import React from 'react';
import './App.css';
import HeaderRestaurant from './components/headerRestaurant/HeaderRestaurant';
import Locate from './components/locate/Locate';


function App() {
  return (
    <div className="App">
      <HeaderRestaurant />
      <Locate />
    </div>
  );
}

export default App;
