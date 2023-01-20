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
max-width: 1360px;
height: 410px;
display: flex;
flex-direction: row;
flex-wrap: wrap;
gap: 50px;

h6 {
    font-family: 'Cormorant Infant';
    font-style: normal;
    font-weight: 400;
    font-size: 60px;
    line-height: 66px;
    letter-spacing: 0.2px;
    color: #292E36;
}
`;


export const Card = styled.div`
margin-top: 0px;
max-width: 550px;
height: 350px;
`;


export const Card2 = styled.div`
margin-top: 0px;
max-width: 550px;
height: 350px;
background: ${({ theme }) => theme.colors.yellow};
`;
