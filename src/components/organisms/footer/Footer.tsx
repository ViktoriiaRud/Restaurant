import React from 'react';
import GlobalStyle from '../../../theme/globalStyles';
import { theme } from '../../../theme/theme';
import { ThemeProvider } from 'styled-components';
import { footerDataType } from './FooterData';
import { WrapperFooter, WrapperColor } from './FooterStyles';
import { Contact, FormLogo, Social, Logo, Form } from './FooterStyles';

const Footer = ({ img }: footerDataType) => {
    return <>
        <ThemeProvider theme={theme}>
            <GlobalStyle />

            <WrapperColor>
                <WrapperFooter>
                    <Contact>

                    </Contact>
                    <FormLogo>
                        <Logo>
                            <img src={img} alt="logo" />
                        </Logo>
                        <Form>

                        </Form>

                    </FormLogo>

                    <Social>

                    </Social>
                </WrapperFooter>

            </WrapperColor>
        </ThemeProvider>
    </>
}


export default Footer;