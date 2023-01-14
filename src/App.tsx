import React from 'react';
import HeaderRestaurant from './components/headerRestaurant/HeaderRestaurant';
import Locate from './components/locate/Locate';
import headerRestaurantData from './components/headerRestaurant/HeaderRestaurantData';

function App() {
  return (
    <div className="App">
      <HeaderRestaurant {...headerRestaurantData} />
      <Locate />
    </div>
  );
}

export default App;
