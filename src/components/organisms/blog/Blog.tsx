import React from 'react';
import GlobalStyle from '../../../theme/globalStyles';
import { theme } from '../../../theme/theme';
import { ThemeProvider } from 'styled-components';
import { blogDataType } from './BlogData';
import { WrapperBlog } from './BlogStyled';
const Blog = ({ }: blogDataType) => {

    return <>
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <WrapperBlog>

            </WrapperBlog>

        </ThemeProvider>
    </>
}


export default Blog;
