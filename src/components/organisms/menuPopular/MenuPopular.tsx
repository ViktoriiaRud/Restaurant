import React from "react";
import Container from "../../atoms/container";
// import Grey from "../../molecules/grey/Grey";
import {theme} from "../../../theme";
import GlobalStyle from '../../../theme/globalStyles';
import {ThemeProvider} from 'styled-components';
import {WrapperMenuPopular} from './MenuPopularStyles';
import {
    OffersSubtitle,
    OffersTitle,
    OffersDescription,
    OffersDescription2
} from '../../atoms/titleSubtitle/TitleSubtitleStyles';
import {WrapperCard, CardImg, CardText, WrapperCards} from './MenuPopularStyles';
import {SubtitlePopular, DescriptionPopular, SennaPopular} from '../../atoms/titleSubtitle/TitleSubtitleStyles';
import {ButtonPopular} from '../../atoms/button/ButtonStyled';
import {greyData} from '../../molecules/grey/GreyData';
import {Span} from "../headerRestaurant/HeaderRestaurantStyles";
import {SpanUp} from "../offers/OffersStyles";

import {menuPopularDataType} from './MenuPopularData';

const MenuPopular = ({subtitle, title, description1, description2, cards}: menuPopularDataType) => {
    return <>
        <ThemeProvider theme={theme}>
            <GlobalStyle/>
            <Container>
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
                                    <img src={item.img} alt=""/>
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
                    {/*<Grey {...greyData} />*/}
                </WrapperMenuPopular>
            </Container>
        </ThemeProvider>
    </>
}


export default MenuPopular;