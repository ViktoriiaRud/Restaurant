import React from "react";
import headerRestaurant from './HeaderRestaurantData';
import { WrapperLogo } from "./HeaderRestaurantStyles";

const HeaderRestaurant = () => {
    return <>
        <WrapperLogo>
            <h1>{headerRestaurant.title}</h1>
        </WrapperLogo>
    </>
}


export default HeaderRestaurant;