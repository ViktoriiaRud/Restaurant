import React from 'react';
import HeaderRestaurant from './components/organisms/headerRestaurant/HeaderRestaurant';
import Locate from '././components/organisms/locate/Locate';
import Menu from './components/organisms/menu/Menu'
import Testimonial from './components/organisms/testimonial/Testimonial';
import Offers from './components/organisms/offers/Offers';
import MenuPopular from './components/organisms/menuPopular/MenuPopular';
import Blog from './components/organisms/blog/Blog';
import Reservation from './components/organisms/reservation/Reservation';
import Footer from './components/organisms/footer/Footer';
import Grey from "./components/molecules/grey/Grey";
import {greyData} from "./components/molecules/grey/GreyData";
import headerRestaurantData from './components/organisms/headerRestaurant/HeaderRestaurantData';
import locateData from './components/organisms/locate/LocateData';
import menuData from './components/organisms/menu/MenuData';
import testimonialData from './components/organisms/testimonial/TestimonialData';
import offersData from './components/organisms/offers/OffersData';
import menuPopularData from './components/organisms/menuPopular/MenuPopularData';
import blogData from './components/organisms/blog/BlogData';
import {reservationData} from './components/organisms/reservation/ReservationData';
import {footerData} from './components/organisms/footer/FooterData';


function App() {
    return (
        <div className="App">
            <HeaderRestaurant {...headerRestaurantData} />
            <Locate {...locateData} />
            <Menu {...menuData} />
            <Testimonial {...testimonialData} />
            <Offers {...offersData} />
            <MenuPopular {...menuPopularData} />
            <Grey {...greyData} />
            <Blog {...blogData} />
            <Reservation {...reservationData} />
            <Footer {...footerData} />
        </div>
    );
}

export default App;
