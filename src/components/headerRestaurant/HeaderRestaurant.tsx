import React from "react";
import headerRestaurant from './HeaderRestaurantData';
import { WrapperLogo, Logo, WrapperBanner, Span } from "./HeaderRestaurantStyles";
import { WrapperLinkSocial, WrapperLink, WrapperSocial, LinkYellow, LinkWhite, Link } from './HeaderRestaurantStyles';
import { Button, ButtonOrange } from '../atoms/button/ButtonStyled';
import GlobalStyle from "../../theme/globalStyles";
import { ThemeProvider } from "styled-components";
import { theme } from '../../theme/theme';


const HeaderRestaurant = () => {
    return <>
        <ThemeProvider theme={theme}>
            <GlobalStyle />

            <WrapperBanner>
                <WrapperLogo>
                    <Button>Call - 123 456 789</Button>
                    <Logo>
                        <img src={headerRestaurant.img} alt="" />
                    </Logo>
                    <ButtonOrange>Reservation</ButtonOrange>
                </WrapperLogo>
                <Span></Span>
                <WrapperLinkSocial>
                    <WrapperLink>
                        <Link>
                            <li><LinkYellow href="#">{headerRestaurant.link1}</LinkYellow></li>
                            <li><LinkWhite href="#">{headerRestaurant.link2}</LinkWhite></li>
                            <li><LinkWhite href="#">{headerRestaurant.link3}</LinkWhite></li>
                            <li><LinkWhite href="#">{headerRestaurant.link4}</LinkWhite></li>
                            <li><LinkWhite href="#">{headerRestaurant.link5}</LinkWhite></li>
                            <li><LinkWhite href="#">{headerRestaurant.link6}</LinkWhite></li>
                        </Link>
                    </WrapperLink>
                    <WrapperSocial>
                        {headerRestaurant.items.map((item) => (
                            <img src={item.imgSocial} alt="social" />
                        ))}
                    </WrapperSocial>
                </WrapperLinkSocial>
            </WrapperBanner>

            <h1>{headerRestaurant.title}</h1>

        </ThemeProvider>

    </>

}




export default HeaderRestaurant;