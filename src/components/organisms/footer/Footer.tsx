import React from 'react';
import GlobalStyle from '../../../theme/globalStyles';
import { theme } from '../../../theme/theme';
import { ThemeProvider } from 'styled-components';
import { footerDataType } from './FooterData';
import { WrapperFooter, WrapperColor } from './FooterStyles';
import { Contact, FormLogo, Social, Logo, Form } from './FooterStyles';
import { FooterDescription, TastEat, ContactTitle, ContactCity, Phone, Email, SocialText, SocialTextMon, SocialTextSut, SocialTextSun } from './../../atoms/titleSubtitle/TitleSubtitleStyles';

const Footer = ({ img, description1, description2, subtitle1, subtitle2, subtitle3, phone, email, imgSocial, subtitle4, dataMonday, dataSaturday, dataSunday }: footerDataType) => {
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
                        {imgSocial ?
                            imgSocial.map((item) => (
                                <a className="link-gap" href="#"><img src={item} alt="social" /></a>
                            ))
                            : null}

                        <SocialText>{subtitle4}</SocialText>
                        <SocialTextMon>{dataMonday}</SocialTextMon>
                        <SocialTextSut>{dataSaturday}</SocialTextSut>
                        <SocialTextSun>{dataSunday}</SocialTextSun>

                    </Social>
                </WrapperFooter>

            </WrapperColor>
        </ThemeProvider>
    </>
}


export default Footer;