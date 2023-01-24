import React from 'react';
import GlobalStyle from '../../../theme/globalStyles';
import { theme } from '../../../theme/theme';
import { ThemeProvider } from 'styled-components';
import { greyDataType } from './GreyData';
import { TestimonialTitle, TestimonialSubtitle, TestDescription } from './../../atoms/titleSubtitle/TitleSubtitleStyles';
import { GreyWrapper } from './GreyStyles';
import { WrapperCard } from './GreyStyles';
import { GreyDescription } from './../../atoms/titleSubtitle/TitleSubtitleStyles'
import { Span, WrapperText, CardGreyDark, Cards, Card } from './GreyStyles';


const Grey = ({ title, subtitle, description, items }: greyDataType) => {
    return <>
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <GreyWrapper>

                <WrapperCard>
                    <WrapperText>
                        <Span></Span>
                        <TestimonialTitle>{title}</TestimonialTitle>
                        <Span></Span>
                        <TestimonialSubtitle>{subtitle}</TestimonialSubtitle>
                        <TestDescription>{description}</TestDescription>
                    </WrapperText>
                    <Cards>
                        {items.map((item, index) => (
                            <Card key={index}>

                                <CardGreyDark>
                                    <div className="img-dark">
                                        <img src={item.img} alt="img" />
                                    </div>
                                    <div className="text-dark">
                                        <GreyDescription>{item.description}</GreyDescription>
                                    </div>
                                </CardGreyDark>
                            </Card>
                        ))}
                    </Cards>
                </WrapperCard>
            </GreyWrapper>
        </ThemeProvider>
    </>
}



export default Grey;


