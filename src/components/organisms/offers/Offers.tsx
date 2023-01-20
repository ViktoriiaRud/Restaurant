import React from 'react';
import GlobalStyle from '../../../theme/globalStyles';
import { ThemeProvider } from 'styled-components';
import { theme } from './../../../theme/theme';
import { offersDataType } from './OffersData';
import { OffersSubtitle, OffersTitle, OffersDescription, OffersDescription2, SubtitleCard, TitleCard, DescriptionCard } from './../../atoms/titleSubtitle/TitleSubtitleStyles';
import { SpanUp, Span, WrapperOffers, WrapperCards, Card, Card2 } from './OffersStyles';


const Offers = ({ title, subtitle, description, description2, items }: offersDataType) => {
    return <>
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <WrapperOffers>
                <SpanUp></SpanUp>
                <OffersSubtitle>{subtitle}</OffersSubtitle>
                <Span></Span>
                <OffersTitle>{title}</OffersTitle>
                <OffersDescription>{description}</OffersDescription>
                <OffersDescription2>{description2}</OffersDescription2>
                <WrapperCards>
                    {items.map((item, index) => (
                        <Card key={index}>
                            <img src={item.card} alt="img" />
                            <img src={item.img} alt="img" />
                            <img src={item.icon} alt="img" />
                            <span></span>
                            <h6>{item.senna}</h6>
                            <span></span>
                            <SubtitleCard>{item.subtitle}</SubtitleCard>
                            <TitleCard>{item.title}</TitleCard>
                            <DescriptionCard>{item.description}</DescriptionCard>
                        </Card>
                    ))}
                </WrapperCards>
            </WrapperOffers>
        </ThemeProvider>
    </>

}




export default Offers;