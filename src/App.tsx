import React from 'react';
import HeaderRestaurant from './components/organisms/headerRestaurant/HeaderRestaurant';
import Locate from '././components/organisms/locate/Locate';
import headerRestaurantData from './components/organisms/headerRestaurant/HeaderRestaurantData';
import locateData from './components/organisms/locate/LocateData';
import menuData from './components/organisms/menu/MenuData';
import Menu from './components/organisms/menu/Menu'
import testimonialData from './components/organisms/testimonial/TestimonialData';
import Testimonial from './components/organisms/testimonial/Testimonial';
import Offers from './components/organisms/offers/Offers';
import offersData from './components/organisms/offers/OffersData';
import menuPopularData from './components/organisms/menuPopular/MenuPopularData';
import MenuPopular from './components/organisms/menuPopular/MenuPopular';
import blogData from './components/organisms/blog/BlogData';
import Blog from './components/organisms/blog/Blog';
import Reservation from './components/organisms/reservation/Reservation';
import { reservationData } from './components/organisms/reservation/ReservationData';



function App() {
  return (
    <div className="App">
      <HeaderRestaurant {...headerRestaurantData} />
      <Locate {...locateData} />
      <Menu {...menuData} />
      <Testimonial {...testimonialData} />
      <Offers {...offersData} />
      <MenuPopular {...menuPopularData} />
      <Blog {...blogData} />
      <Reservation {...reservationData} />
    </div>
  );
}

export default App;
