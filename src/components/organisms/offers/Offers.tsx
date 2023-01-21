import React from 'react';
import GlobalStyle from '../../../theme/globalStyles';
import { ThemeProvider } from 'styled-components';
import { theme } from './../../../theme/theme';
import { offersDataType } from './OffersData';
import { OffersSubtitle, OffersTitle, OffersDescription, OffersDescription2, SubtitleCard, TitleCard, DescriptionCard } from './../../atoms/titleSubtitle/TitleSubtitleStyles';
import { SpanUp, Span, WrapperOffers, WrapperCards, Card, SpanUpSub, SpanSub } from './OffersStyles';


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
                            <div className="img-card">
                                <img src={item.card} alt="img" />
                            </div>
                            <div className="dish-img">
                                <img src={item.img} alt="img" />
                            </div>
                            <div className="senna-bg">
                                <img src={item.icons} alt="img" />
                            </div>
                            <div className="senna">
                                <img src={item.icon} alt="img" />
                            </div>
                            <div className="senna-dollar">
                                <h6>{item.senna}</h6>
                            </div>
                            <div className="text-senna">
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
        </ThemeProvider>
    </>

}


export default Offers;