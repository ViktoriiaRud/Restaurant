import React from "react";
import headerRestaurant from './HeaderRestaurantData';
import { WrapperLogo, Logo, Wrapper } from "./HeaderRestaurantStyles";
import { Button, ButtonOrange } from '../atoms/button/ButtonStyled';

const HeaderRestaurant = () => {
    return <>
        <WrapperLogo>
            <Wrapper>
                <Button>Call - 123 456 789</Button>
                <Logo>
                    <img src={headerRestaurant.img} alt="" />
                </Logo>
                <ButtonOrange>Reservation</ButtonOrange>
            </Wrapper>
        </WrapperLogo>

        <h1>{headerRestaurant.title}</h1>
    </>
}


export default HeaderRestaurant;