import React from "react";
import { WrapperLogo, Logo, WrapperBanner, Span, WrapperWelcome, WrapperTitle, WrapperImg } from "./HeaderRestaurantStyles";
import { WrapperLinkSocial, WrapperLink, WrapperSocial, LinkYellow, Link } from './HeaderRestaurantStyles';
import { Button, ButtonOrange, ButtonTitle } from '../../atoms/button/ButtonStyled';
import GlobalStyle from "../../../theme/globalStyles";
import { ThemeProvider } from "styled-components";
import { theme } from './../../../theme/theme';
import { headerRestaurantType } from './HeaderRestaurantData'


const HeaderRestaurant = ({ img, img3, imgSocial, links, title, subtitle }: headerRestaurantType) => {
    return <>
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <WrapperBanner>
                <WrapperLogo>
                    <Button>Call - 123 456 789</Button>
                    <Logo>
                        <img src={img} alt="photo" />
                    </Logo>
                    <ButtonOrange>Reservation</ButtonOrange>
                </WrapperLogo>
                <Span></Span>
                <WrapperLinkSocial>
                    <WrapperLink>
                        <Link>
                            {links.map((link, index) => (
                                <li key={index}><LinkYellow href={link.href} >{link.name}</LinkYellow></li>
                            ))}

                        </Link>
                    </WrapperLink>

                    <WrapperSocial>
                        {imgSocial ?
                            imgSocial.map((item) => (
                                <a href="#"><img src={item} alt="social" /></a>
                            ))
                            : null}
                    </WrapperSocial>
                </WrapperLinkSocial>
                <Span></Span>
                <WrapperWelcome>
                    <WrapperTitle>
                        <h1>{title}</h1>
                        <h2>{subtitle}</h2>
                        <ButtonTitle>View Menu</ButtonTitle>
                    </WrapperTitle>
                    <WrapperImg>
                        <img src={img3} alt="Frame" />
                    </WrapperImg>
                </WrapperWelcome>
            </WrapperBanner>
        </ThemeProvider>
    </>
}



export default HeaderRestaurant;