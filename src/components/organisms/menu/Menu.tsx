import React from 'react';
import {ThemeProvider} from 'styled-components';
import {menuDataType} from './MenuData';
import {WrapperMenu, Starters, Dish, Dessert, MenuList, MenuImg, Span} from './MenuStyles';
import {Title, SpecialTitle, Title1, Title2, Title3,} from '../../atoms/titleSubtitle/TitleSubtitleStyles';
import {ButtonMenu} from '../../atoms/button/ButtonStyled';
import {WrapperImgList, WrapperImg, WrapperText, WrapperSenna, StyledWrapperMenuColor,} from './MenuStyles';
import {Senna, Ingredients, DishSubtitle} from '../../atoms/titleSubtitle/TitleSubtitleStyles';
import {theme} from "../../../theme";
import Container from "../../atoms/container";


const Menu = ({img, title, h4, specialTitle, button, title1, title2, title3, card3, card1, card2}: menuDataType) => {
    return <>
        <ThemeProvider theme={theme}>
            <StyledWrapperMenuColor>
                <Container>
                    <WrapperMenu>
                        <div className="flex-menu">
                            <MenuImg>
                                <Span></Span>
                                <Title>{title}</Title>
                                <Span></Span>
                                <SpecialTitle>{specialTitle}</SpecialTitle>
                                <h4>{h4}</h4>
                                <img src={img} alt="img"/>
                                <ButtonMenu>{button}</ButtonMenu>
                            </MenuImg>

                            <MenuList>
                                <Title1>{title1}</Title1>
                                <Starters>
                                    {card1.map((item, index) => (
                                        <WrapperImgList key={index}>
                                            <WrapperImg>
                                                <img src={item.icon} alt=""/>
                                            </WrapperImg>
                                            <WrapperText>
                                                <div>
                                                    <DishSubtitle>{item.title}</DishSubtitle>
                                                    <Ingredients>{item.subtitle}</Ingredients>
                                                </div>
                                            </WrapperText>
                                            <WrapperSenna>
                                                <Senna>{item.senna}</Senna>
                                            </WrapperSenna>
                                        </WrapperImgList>
                                    ))}
                                </Starters>

                                <Title2>{title2}</Title2>
                                <Dish>
                                    {card2.map((item, index) => (
                                        <WrapperImgList key={index}>
                                            <WrapperImg>
                                                <img src={item.icon} alt=""/>
                                            </WrapperImg>
                                            <WrapperText>
                                                <div>
                                                    <DishSubtitle>{item.title}</DishSubtitle>
                                                    <Ingredients>{item.subtitle}</Ingredients>
                                                </div>
                                            </WrapperText>
                                            <WrapperSenna>
                                                <Senna>{item.senna}</Senna>
                                            </WrapperSenna>
                                        </WrapperImgList>
                                    ))}
                                </Dish>

                                <Title3>{title3}</Title3>
                                <Dessert>
                                    {card3.map((item, index) => (
                                        <WrapperImgList key={index}>
                                            <WrapperImg>
                                                <img src={item.icon} alt=""/>
                                            </WrapperImg>
                                            <WrapperText>
                                                <div>
                                                    <DishSubtitle>{item.title}</DishSubtitle>
                                                    <Ingredients>{item.subtitle}</Ingredients>
                                                </div>
                                            </WrapperText>
                                            <WrapperSenna>
                                                <Senna>{item.senna}</Senna>
                                            </WrapperSenna>
                                        </WrapperImgList>
                                    ))}
                                </Dessert>
                            </MenuList>
                        </div>
                    </WrapperMenu>
                </Container>
            </StyledWrapperMenuColor>
        </ThemeProvider>
    </>
}


export default Menu;