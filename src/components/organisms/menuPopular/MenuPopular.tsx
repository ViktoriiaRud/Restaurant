import React from "react";
import GlobalStyle from '../../../theme/globalStyles';
import { theme } from '../../../theme/theme';
import { ThemeProvider } from 'styled-components';
import { menuPopularDataType } from './MenuPopularData';


const MenuPopular = ({ title }: menuPopularDataType) => {
    return <>
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <h5>{title}</h5>
        </ThemeProvider>
    </>
}


export default MenuPopular;