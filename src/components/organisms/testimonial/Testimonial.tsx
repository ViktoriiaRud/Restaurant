import React from 'react';
import GlobalStyle from '../../../theme/globalStyles';
import { theme } from '../../../theme/theme';
import { ThemeProvider } from 'styled-components';
import { testimonialType } from './TestimonialData';
import { WrapperColor } from './TestimonialStyles';
import { WrapperTestimonial, TestimonialCard, TestimonialImg, Span } from './TestimonialStyles';
import { TestDescription, TestimonialSubtitle, TestimonialTitle } from './../../atoms/titleSubtitle/TitleSubtitleStyles';
import MyCarousel from '../carousel/Carousel';
import carouselData from '../carousel/CarouselData';


const Testimonial = ({ img, title, subtitle, description }: testimonialType) => {
    return <>
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <WrapperColor>
                <WrapperTestimonial>
                    <TestimonialCard>
                        <Span></Span>
                        <TestimonialTitle>{title}</TestimonialTitle>
                        <Span></Span>
                        <TestimonialSubtitle>{subtitle}</TestimonialSubtitle>
                        <TestDescription>{description}</TestDescription>
                        <MyCarousel {...carouselData} />
                    </TestimonialCard>
                    <TestimonialImg>
                        <img src={img} alt="img" />
                    </TestimonialImg>
                </WrapperTestimonial>
            </WrapperColor>
        </ThemeProvider>
    </>
}


export default Testimonial;