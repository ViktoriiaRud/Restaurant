import React from "react";
import { WrapperLogo, Logo, WrapperBanner, Span, WrapperWelcome, WrapperTitle, WrapperImg, WrapperImg2 } from "./HeaderRestaurantStyles";
import { WrapperLinkSocial, WrapperLink, WrapperSocial, LinkYellow, LinkWhite, Link, Span1, Span2, Span3 } from './HeaderRestaurantStyles';
import { Button, ButtonOrange, ButtonTitle } from '../../atoms/button/ButtonStyled';
import GlobalStyle from "../../../theme/globalStyles";
import { ThemeProvider } from "styled-components";
import { theme } from './../../../theme/theme';
import { headerRestaurantType } from './HeaderRestaurantData'


const HeaderRestaurant = ({ img, img2, img3, imgSocial, links, title, subtitle }: headerRestaurantType) => {
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

                <WrapperWelcome>
                    <WrapperTitle>
                        <h1>{title}</h1>
                        <h2>{subtitle}</h2>
                        <ButtonTitle>View Menu</ButtonTitle>
                    </WrapperTitle>
                    <WrapperImg>
                        <Span1></Span1>
                        <img src={img3} alt="Frame" />
                        <Span2></Span2>
                        <Span3></Span3>
                        <WrapperImg2>
                            <img src={img2} alt="Frame" />
                        </WrapperImg2>
                    </WrapperImg>
                </WrapperWelcome>
            </WrapperBanner>
        </ThemeProvider>
    </>
}



export default HeaderRestaurant;