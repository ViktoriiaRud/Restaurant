import React from "react";
import GlobalStyle from '../../../theme/globalStyles';
import { theme } from '../../../theme/theme';
import { ThemeProvider } from 'styled-components';
import { menuPopularDataType } from './MenuPopularData';
import { WrapperMenuPopular } from './MenuPopularStyles';
import { OffersSubtitle, OffersTitle, OffersDescription, OffersDescription2 } from './../../atoms/titleSubtitle/TitleSubtitleStyles';
import { SpanUp, Span } from './../offers/OffersStyles';
import { WrapperCard, CardImg, CardText, WrapperCards } from './MenuPopularStyles';
import { SubtitlePopular, DescriptionPopular, SennaPopular } from './../../atoms/titleSubtitle/TitleSubtitleStyles';
import { ButtonPopular } from '../../atoms/button/ButtonStyled';

const MenuPopular = ({ subtitle, title, description1, description2, cards }: menuPopularDataType) => {
    return <>
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <WrapperMenuPopular>
                <SpanUp></SpanUp>
                <OffersSubtitle>{subtitle}</OffersSubtitle>
                <Span></Span>
                <OffersTitle>{title}</OffersTitle>
                <OffersDescription>{description1}</OffersDescription>
                <OffersDescription2>{description2}</OffersDescription2>

                <WrapperCards>
                    {cards.map((item, index) => (
                        <WrapperCard key={index}>
                            <CardImg>
                                <img src={item.img} alt="" />
                            </CardImg>
                            <CardText>
                                <SubtitlePopular>{item.subtitle}</SubtitlePopular>
                                <div className="senna">
                                    <SennaPopular>{item.senna}</SennaPopular>
                                </div>
                                <DescriptionPopular>{item.description}</DescriptionPopular>
                            </CardText>
                        </WrapperCard>
                    ))}
                </WrapperCards>
                <ButtonPopular>See all dishes</ButtonPopular>
            </WrapperMenuPopular>
        </ThemeProvider>
    </>
}


export default MenuPopular;