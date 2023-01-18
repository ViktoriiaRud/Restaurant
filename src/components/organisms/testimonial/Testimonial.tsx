import React from 'react';
import GlobalStyle from '../../../theme/globalStyles';
import { theme } from '../../../theme/theme';
import { ThemeProvider } from 'styled-components';
import { testimonialType } from './TestimonialData';
import { WrapperColor } from './TestimonialStyles';

const Testimonial = ({ img }: testimonialType) => {
    return <>
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <WrapperColor>
                <img src={img} alt="img" />
            </WrapperColor>

        </ThemeProvider>
    </>
}

export default Testimonial;