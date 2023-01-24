import React from 'react';
import GlobalStyle from '../../../theme/globalStyles';
import { theme } from '../../../theme/theme';
import { ThemeProvider } from 'styled-components';
import { blogDataType } from './BlogData';
import { WrapperBlog } from './BlogStyled';
import { SpanUp, Span } from './BlogStyled';
import { OffersSubtitle, OffersTitle, OffersDescription, OffersDescription2 } from './../../atoms/titleSubtitle/TitleSubtitleStyles';
import { Button } from 'react-bootstrap';
import { WrapperCards, WrapperText, Card, WrapperImg } from './BlogStyled';
import { ButtonView } from './../../atoms/button/ButtonStyled';
import { BlogDataSpan, BlogDataSpanUp, SpanBlog, SpanBlogUp, Grid } from './BlogStyled';
import { BlogDescription, BlogTitle, BlogData, BlogSubtitle, } from './../../atoms/titleSubtitle/TitleSubtitleStyles';
const Blog = ({ subtitle, title, description1, description2, cards }: blogDataType) => {

    return <>
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <WrapperBlog>
                <SpanUp></SpanUp>
                <OffersSubtitle>{subtitle}</OffersSubtitle>
                <Span></Span>
                <OffersTitle>{title}</OffersTitle>
                <OffersDescription>{description1}</OffersDescription>
                <OffersDescription2>{description2}</OffersDescription2>
                <WrapperCards>
                    {cards.map((item, index) => (
                        <Card key={index}>
                            <WrapperImg>
                                <img src={item.img} alt="img" />
                            </WrapperImg>
                            <ButtonView>{item.button}</ButtonView>
                            <Grid>
                                <div className="title-data">
                                    <SpanBlogUp></SpanBlogUp>
                                    <BlogSubtitle>{item.subtitle}</BlogSubtitle>
                                    <SpanBlog></SpanBlog>
                                </div>
                                <div className="data">
                                    <BlogDataSpanUp></BlogDataSpanUp>
                                    <BlogData>{item.data}</BlogData>
                                    <BlogDataSpan></BlogDataSpan>
                                </div>
                                <WrapperText>
                                    <BlogTitle>{item.title}</BlogTitle>
                                    <BlogDescription>{item.description}</BlogDescription>

                                </WrapperText>

                            </Grid>

                        </Card>
                    ))}

                </WrapperCards>
            </WrapperBlog>
        </ThemeProvider>
    </>
}


export default Blog;
