import React from 'react';
import GlobalStyle from '../../../theme/globalStyles';
import { theme } from '../../../theme/theme';
import { ThemeProvider } from 'styled-components';
import { menuDataType } from './MenuData';
import { WrapperMenu, Starters, Dish, Dessert, MenuList, MenuImg, Span } from './MenuStyles';
import { Title, SpecialTitle, Title1, Title2, Title3 } from '../../atoms/titleSubtitle/TitleSubtitleStyles';
import { ButtonMenu } from '../../atoms/button/ButtonStyled';

const Menu = ({ img, title, h4, specialTitle, button, title1, title2, title3, }: menuDataType) => {
    return <>
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <WrapperMenu>
                <MenuImg>
                    <Title>{title}</Title>
                    <Span></Span>
                    <SpecialTitle>{specialTitle}</SpecialTitle>
                    <h4>{h4}</h4>
                    <img src={img} alt="img" />
                    <ButtonMenu>{button}</ButtonMenu>
                </MenuImg>
                <MenuList>
                    <Starters>
                        <Title1>{title1}</Title1>

                    </Starters>

                    <Dish>
                        <Title2>{title2}</Title2>

                    </Dish>

                    <Dessert>
                        <Title3>{title3}</Title3>

                    </Dessert>
                </MenuList>
            </WrapperMenu>




        </ThemeProvider>
    </>
}


export default Menu;