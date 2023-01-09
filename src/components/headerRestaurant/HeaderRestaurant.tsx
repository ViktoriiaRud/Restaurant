import React from "react";
import headerRestaurant from './HeaderRestaurantData';
import { WrapperLogo, Logo, WrapperBanner } from "./HeaderRestaurantStyles";
import { WrapperLinkSocial, WrapperLink, WrapperSocial, LinkYellow } from './HeaderRestaurantStyles';
import { Button, ButtonOrange } from '../atoms/button/ButtonStyled';

const HeaderRestaurant = () => {
    return <>
        <WrapperBanner>
            <WrapperLogo>
                <Button>Call - 123 456 789</Button>
                <Logo>
                    <img src={headerRestaurant.img} alt="" />
                </Logo>
                <ButtonOrange>Reservation</ButtonOrange>
            </WrapperLogo>

            <WrapperLinkSocial>
                <WrapperLink>
                    <ul>
                        <li><LinkYellow href="#">{headerRestaurant.link1}</LinkYellow></li>
                        <li><a href="#">{headerRestaurant.link2}</a></li>
                        <li><a href="#">{headerRestaurant.link3}</a></li>
                        <li><a href="#">{headerRestaurant.link4}</a></li>
                        <li><a href="#">{headerRestaurant.link5}</a></li>
                        <li><a href="#">{headerRestaurant.link6}</a></li>
                    </ul>
                </WrapperLink>
                <WrapperSocial>
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                </WrapperSocial>

            </WrapperLinkSocial>
        </WrapperBanner>

        <h1>{headerRestaurant.title}</h1>
    </>
}


export default HeaderRestaurant;