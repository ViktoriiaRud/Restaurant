import React from 'react';
import GlobalStyle from '../../../theme/globalStyles';

import {ThemeProvider} from 'styled-components';
import {testimonialType} from './TestimonialData';
import {WrapperColor} from './TestimonialStyles';
import {WrapperTestimonial, TestimonialCard, TestimonialImg, Span} from './TestimonialStyles';

import MyCarousel from '../carousel/Carousel';
import carouselData from '../carousel/CarouselData';
import Container from "../../atoms/container";
import {theme} from "../../../theme";
import {TestDescription, TestimonialSubtitle, TestimonialTitle} from "../../atoms/titleSubtitle/TitleSubtitleStyles";


const Testimonial = ({img, title, subtitle, description}: testimonialType) => {
    return <>
        <ThemeProvider theme={theme}>
            <GlobalStyle/>
            <WrapperColor>
                <Container>
                    <WrapperTestimonial>
                        <TestimonialCard>
                            <Span></Span>
                            <TestimonialTitle>{title}</TestimonialTitle>
                            <Span></Span>
                            <TestimonialSubtitle>{subtitle}</TestimonialSubtitle>
                            <TestDescription>{description}</TestDescription>
                            <MyCarousel {...carouselData} />
                        </TestimonialCard>
                    </WrapperTestimonial>
                </Container>
                <TestimonialImg>
                    <img src={img} alt="img"/>
                </TestimonialImg>
            </WrapperColor>
        </ThemeProvider>
    </>
}


export default Testimonial;