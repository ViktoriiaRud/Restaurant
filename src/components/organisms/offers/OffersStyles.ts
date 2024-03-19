import styled from "styled-components";

export const WrapperOffers = styled.section`
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
    padding: 20px;
    margin-top: 50px;
    max-width: 1360px;
    height: 410px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 30px;
    
    h6 {
        font-family: ${({ theme }) => theme.font2};
        font-style: normal;
        font-weight: 400;
        font-size: 60px;
        line-height: 66px;
        letter-spacing: 0.2px;
        color: ${({ theme }) => theme.colors.salmon};
    }
`;

export const Card = styled.div`
    margin-top: 0px;
    max-width: 665px;
    height: 409px;
    
    .img-card {
        position: relative;
    }

    .dish-img {
        position:absolute;
        margin: -335px 10px 10px 260px;
        z-index: 0;
        img {
            width: 295px;
            height: 244px;
        }
    }

    .price {
        position:absolute;
        margin: -315px 10px 10px 39px;
        z-index: 0;
        width: 167px;
        height: 104px;    
    }

    .price-bg {
        position:absolute;
        margin: -310px 12px 30px 33px;
        z-index: 0;
        width: 167px;
        height: 104px; 
    }

    .price-dollar {
        position:absolute;
        margin: -300px 0 20px 78px;
        z-index: 0; 
    }

    .text-price {
        position:absolute;
        margin: -210px 12px 20px 25px;
        z-index: 0;
        width: 278px;
        height: 153px; 
    }
`;

export const SpanUpSub = styled.div`
    margin: 5px 0 1px 0;
    width: 210px;
    height: 1px;
    z-index: 0;
    background: ${({ theme }) => theme.colors.salmon};
`;

export const SpanSub = styled(SpanUpSub)`
`;