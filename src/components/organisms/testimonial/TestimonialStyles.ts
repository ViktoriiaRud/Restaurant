import styled from "styled-components";

export const WrapperColor = styled.section`
    background-color: ${({theme}) => theme.colors.grey};
`;

export const WrapperTestimonial = styled.div`
    max-width: 1440px;
`;

export const TestimonialCard = styled.div`
    padding: 50px;
    max-width: 1360px;
    min-height: 906px;
`;

export const TestimonialImg = styled.div`
    position: relative;
    width: 100%;
    min-height: 600px;

    img {
        position: absolute;
        min-height: 600px;
        width: 100%;
        object-fit: cover;
    }
`;

export const Span = styled.div`
    margin: 0 0 8px 0;
    max-width: 141px;
    min-height: 1px;
    background-color: ${({theme}) => theme.colors.yellow};
`;