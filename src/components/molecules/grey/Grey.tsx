import React from 'react';
import GlobalStyle from '../../../theme/globalStyles';
import { theme } from '../../../theme/theme';
import { ThemeProvider } from 'styled-components';
import { greyDataType } from './GreyData';
import { TestimonialTitle, TestimonialSubtitle, TestDescription } from './../../atoms/titleSubtitle/TitleSubtitleStyles';
import { GreyWrapper } from './GreyStyles';
import { WrapperCard } from './GreyStyles';
import { GreyDescription } from './../../atoms/titleSubtitle/TitleSubtitleStyles'
import { Span, WrapperText, CardGreyDark, CardGreyLight, Cards } from './GreyStyles';


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
                    {items.map((item, index) => (
                        <Cards key={index}>
                            <CardGreyLight>
                                <CardGreyDark>
                                    <div>
                                        <img src={item.img} alt="img" />
                                    </div>
                                    <div>
                                        <GreyDescription>{item.description}</GreyDescription>
                                    </div>

                                </CardGreyDark>
                            </CardGreyLight>
                        </Cards>

                    ))}

                </WrapperCard>
            </GreyWrapper>
        </ThemeProvider>
    </>
}

export default Grey;


