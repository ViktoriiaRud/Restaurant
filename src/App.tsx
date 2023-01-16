import React from 'react';
import HeaderRestaurant from './components/organisms/headerRestaurant/HeaderRestaurant';
import Locate from '././components/organisms/locate/Locate';
import headerRestaurantData from './components/organisms/headerRestaurant/HeaderRestaurantData';
import locateData from './components/organisms/locate/LocateData';

function App() {
  return (
    <div className="App">
      <HeaderRestaurant {...headerRestaurantData} />
      <Locate {...locateData} />
    </div>
  );
}

export default App;
