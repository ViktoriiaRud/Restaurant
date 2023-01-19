import React from 'react';
import GlobalStyle from '../../../theme/globalStyles';
import { theme } from '../../../theme/theme';
import { ThemeProvider } from 'styled-components';
import { testimonialType } from './TestimonialData';
import { WrapperColor } from './TestimonialStyles';
import { WrapperTestimonial, TestimonialCard, TestimonialImg } from './TestimonialStyles';

const Testimonial = ({ img }: testimonialType) => {
    return <>
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <WrapperColor>
                <WrapperTestimonial>
                    <TestimonialCard>

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