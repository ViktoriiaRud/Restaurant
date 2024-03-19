import React from 'react';
import GlobalStyle from '../../../theme/globalStyles';
import {ThemeProvider} from 'styled-components';
import {offersDataType} from './OffersData';

import Container from "../../atoms/container";
import {Card, Span, SpanSub, SpanUp, SpanUpSub, WrapperCards, WrapperOffers} from "./OffersStyles";
import {
    DescriptionCard,
    OffersDescription,
    OffersDescription2,
    OffersSubtitle,
    OffersTitle, SubtitleCard, TitleCard
} from "../../atoms/titleSubtitle/TitleSubtitleStyles";
import {theme} from "../../../theme";


const Offers = ({title, subtitle, description, description2, items}: offersDataType) => {
    return <>
        <ThemeProvider theme={theme}>
            <GlobalStyle/>
            <Container>
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
                                <div className="img-card">
                                    <img src={item.card} alt="img"/>
                                </div>
                                <div className="dish-img">
                                    <img src={item.img} alt="img"/>
                                </div>
                                <div className="price-bg">
                                    <img src={item.icons} alt="img"/>
                                </div>
                                <div className="price">
                                    <img src={item.icon} alt="img"/>
                                </div>
                                <div className="price-dollar">
                                    <h6>{item.price}</h6>
                                </div>
                                <div className="text-price">
                                    <SpanUpSub></SpanUpSub>
                                    <SubtitleCard>{item.subtitle}</SubtitleCard>
                                    <SpanSub></SpanSub>
                                    <TitleCard>{item.title}</TitleCard>
                                    <DescriptionCard>{item.description}</DescriptionCard>
                                </div>
                            </Card>
                        ))}
                    </WrapperCards>
                </WrapperOffers>
            </Container>
        </ThemeProvider>
    </>
}


export default Offers;