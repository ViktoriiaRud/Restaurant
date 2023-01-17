import React from 'react';
import GlobalStyle from '../../../theme/globalStyles';
import { theme } from '../../../theme/theme';
import { ThemeProvider } from 'styled-components';
import { menuDataType } from './MenuData';
import { WrapperMenu, Starters, Dish, Dessert } from './MenuStyles';



const Menu = ({ img }: menuDataType) => {
    return <>
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <WrapperMenu>
                <div>
                    <img src={img} alt="img" />
                </div>
                <div>
                    <Starters>

                    </Starters>

                    <Dish>

                    </Dish>

                    <Dessert>

                    </Dessert>
                </div>
            </WrapperMenu>




        </ThemeProvider>
    </>
}


export default Menu;