import React from 'react';
import GlobalStyle from '../../../theme/globalStyles';
import { theme } from '../../../theme/theme';
import { ThemeProvider } from 'styled-components';
import { footerDataType } from './FooterData';
import { WrapperFooter, WrapperColor } from './FooterStyles';
import { Contact, FormLogo, Social, Logo, Form } from './FooterStyles';
import { FooterDescription, TastEat, ContactTitle, ContactCity, Phone, Email } from './../../atoms/titleSubtitle/TitleSubtitleStyles';

const Footer = ({ img, description1, description2, subtitle1, subtitle2, subtitle3, phone, email, }: footerDataType) => {
    return <>
        <ThemeProvider theme={theme}>
            <GlobalStyle />

            <WrapperColor>
                <WrapperFooter>
                    <Contact>
                        <TastEat>{subtitle1}</TastEat>
                        <ContactTitle>{subtitle2}</ContactTitle>
                        <ContactCity>{subtitle3}</ContactCity>
                        <Phone>{phone}</Phone>
                        <Email>{email}</Email>
                    </Contact>
                    <FormLogo>
                        <Logo>
                            <img src={img} alt="logo" />
                        </Logo>
                        <FooterDescription>{description1}</FooterDescription>
                        <FooterDescription>{description2}</FooterDescription>
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