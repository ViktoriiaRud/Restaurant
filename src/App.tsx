import React from 'react';
import HeaderRestaurant from './components/organisms/headerRestaurant/HeaderRestaurant';
import Locate from '././components/organisms/locate/Locate';
import headerRestaurantData from './components/organisms/headerRestaurant/HeaderRestaurantData';
import locateData from './components/organisms/locate/LocateData';
import menuData from './components/organisms/menu/MenuData';
import Menu from './components/organisms/menu/Menu'
import testimonialData from './components/organisms/testimonial/TestimonialData';
import Testimonial from './components/organisms/testimonial/Testimonial';

function App() {
  return (
    <div className="App">
      <HeaderRestaurant {...headerRestaurantData} />
      <Locate {...locateData} />
      <Menu {...menuData} />
      <Testimonial {...testimonialData} />
    </div>
  );
}

export default App;
