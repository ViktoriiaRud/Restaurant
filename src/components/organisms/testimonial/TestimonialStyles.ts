import styled from "styled-components";


export const WrapperColor = styled.section`
    background-color: ${({ theme }) => theme.colors.grey};
`;


export const WrapperTestimonial = styled.div`
    max-width: 1440px;
    min-height: 1506px;
    display: flex;
    flex-direction: column;
`;


export const TestimonialCard = styled.div`
    padding: 50px;
    max-width: 1360px;
    min-height: 906px;
`;


export const TestimonialImg = styled.div`
    max-width: 1440px;
    min-height: 600px;
    img {
        min-height: 600px;
    }

`;


export const Span = styled.div`
    margin: 0px 0px 8px 0px;
    max-width: 141px;
    min-height: 1px;
    background-color: ${({ theme }) => theme.colors.yellow};
`;


