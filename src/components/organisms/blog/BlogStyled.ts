import styled from "styled-components";

export const WrapperBlog = styled.section`
    margin-top: 130px;
    max-width: 1440px;
`;


export const SpanUp = styled.div`
    margin: 139px 0px 10px 600px;
    width: 78px;
    height: 1px;
    background: ${({ theme }) => theme.colors.yellow};
`;


export const Span = styled(SpanUp)`
    margin: 3px 20px 50px 600px;
`;


export const WrapperCards = styled.div`
    margin-top: 30px;
    padding: 20px;
    max-width: 1380px;
    min-height: 770px;
    flex-direction: row;
    display: flex;
    justify-content: space-between;
    gap: 20px;
`;


export const WrapperText = styled.div`
    max-width: 600px;
    grid-column: 1 / 4;
    grid-row: 2 / 4;
`;


export const Grid = styled.div`
    max-width: 600px;
    min-height: 335px;
    display: grid;
    grid-template-columns: 300px 300px;
    grid-template-rows: 100px auto;
    gap: 10px;
    .title-data {
    
        grid-column: 1 / 4;
        grid-row: 1 / 1;
    }

    .data {
    
        grid-column: 2 / 4;
        grid-row: 1 / 1;
    }
`;


export const Card = styled.div`
    position: relative;
    max-width: 600px;
    min-height: 720px;
    border: 1px solid #DCDCDC;
    background-color: #FFF8DC;
`;


export const WrapperImg = styled.div`
    max-width: 600px;
    min-height: 384px;
`;


export const SpanBlogUp = styled.div`
    margin: 5px 10px 9px 0px;
    width: 140px;
    height: 1px;
    background: ${({ theme }) => theme.colors.yellow};
`;


export const SpanBlog = styled.div`
    margin: 3px 10px 8px 0px;
    width: 140px;
    height: 1px;
    background: ${({ theme }) => theme.colors.yellow};
`;


export const BlogDataSpanUp = styled.div`
    margin: 5px 10px 9px 0px;
    width: 170px;
    height: 1px;
    background: ${({ theme }) => theme.colors.yellow};
`;

export const BlogDataSpan = styled.div`
    margin: 3px 10px 8px 0px;
    width: 170px;
    height: 1px;
    background: ${({ theme }) => theme.colors.yellow};
`;





