import React from 'react';
import GlobalStyle from '../../../theme/globalStyles';
import { theme } from '../../../theme/theme';
import { ThemeProvider } from 'styled-components';
import { footerDataType } from './FooterData';
import { WrapperFooter, WrapperColor } from './FooterStyles';

const Footer = ({ img }: footerDataType) => {
    return <>
        <ThemeProvider theme={theme}>
            <GlobalStyle />

            <WrapperColor>

                <WrapperFooter>
                    <img src={img} alt="logo" />
                </WrapperFooter>
            </WrapperColor>

        </ThemeProvider>
    </>
}


export default Footer;